// Vercel serverless function: Bitcoin News Decoder
// Proxies Claude API calls server-side so the API key is never exposed in the browser.

const rateLimitMap = new Map();
const RATE_LIMIT_MS = 10000; // 10 seconds per IP

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://satusphere.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting per IP
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  const now = Date.now();
  const lastRequest = rateLimitMap.get(ip);
  if (lastRequest && now - lastRequest < RATE_LIMIT_MS) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment.' });
  }
  rateLimitMap.set(ip, now);

  // Clean up old entries to avoid memory leak
  if (rateLimitMap.size > 10000) {
    const cutoff = now - RATE_LIMIT_MS * 10;
    for (const [key, val] of rateLimitMap.entries()) {
      if (val < cutoff) rateLimitMap.delete(key);
    }
  }

  // Validate input
  const { headline } = req.body || {};
  if (!headline || typeof headline !== 'string') {
    return res.status(400).json({ error: 'Missing headline' });
  }
  const trimmed = headline.trim();
  if (trimmed.length < 10) {
    return res.status(400).json({ error: 'Headline too short (minimum 10 characters)' });
  }
  if (trimmed.length > 500) {
    return res.status(400).json({ error: 'Headline too long (maximum 500 characters)' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        system: `You are a Bitcoin education assistant for SatUsPhere. Your job is to decode Bitcoin news headlines for beginners in plain English.

Always respond with JSON only. No extra text outside the JSON.

If the input is clearly NOT about Bitcoin, cryptocurrency, blockchain, or monetary policy: respond with this exact JSON:
{"notRelated": true}

If the input IS Bitcoin-related, respond with this exact JSON structure:
{
  "explanation": "plain English explanation (2-3 sentences)",
  "whyItMatters": "why this matters to a Bitcoin beginner (1-2 sentences)",
  "signal": "bullish" or "bearish" or "neutral",
  "signalReason": "one sentence explaining the signal"
}

Rules for Bitcoin explanations:
- No hashtags
- No em dashes (use hyphens or restructure)
- No emojis
- Educational and conversational tone
- Never use "!" as punctuation
- Do not mention yourself or that you are an AI`,
        messages: [
          { role: 'user', content: trimmed }
        ]
      })
    });

    if (!anthropicRes.ok) {
      const err = await anthropicRes.text();
      console.error('Anthropic API error:', err);
      return res.status(502).json({ error: 'AI service unavailable. Please try again.' });
    }

    const data = await anthropicRes.json();
    const raw = data.content?.[0]?.text || '';

    // Parse JSON from Claude's response
    let parsed;
    try {
      // Claude sometimes wraps in ```json ... ```
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      parsed = JSON.parse(jsonMatch ? jsonMatch[0] : raw);
    } catch {
      // If not JSON, it's the "not Bitcoin-related" message
      return res.status(200).json({ notRelated: true, message: raw });
    }

    // If Claude flagged as not Bitcoin-related
    if (parsed.notRelated) {
      return res.status(200).json({ notRelated: true, message: 'That does not appear to be a Bitcoin-related headline. Try pasting a Bitcoin news headline.' });
    }

    // If missing signal field, treat as not related
    if (!parsed.signal) {
      return res.status(200).json({ notRelated: true, message: 'That does not appear to be a Bitcoin-related headline. Try pasting a Bitcoin news headline.' });
    }

    return res.status(200).json(parsed);
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
