// Vercel serverless function: proxy Claude API for Bitcoin News Decoder
// Keeps ANTHROPIC_API_KEY server-side

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-haiku-4-5-20251001';
const SYSTEM_PROMPT = `You are a Bitcoin educator writing for complete beginners. When given a Bitcoin news headline or excerpt, explain it in plain, simple English. Avoid jargon. If jargon is unavoidable, define it immediately. Keep explanations under 150 words. Tone: educational, conversational, never condescending.

If the text is not related to Bitcoin, cryptocurrency, or financial/monetary topics, respond with exactly: "NOT_BITCOIN_RELATED"

Do not use hashtags, em dashes, or emojis in your response.`;

// Simple in-memory rate limiter: 1 request per 10 seconds per IP
const rateLimitMap = new Map();
const RATE_LIMIT_MS = 10000;

function isRateLimited(ip) {
  const now = Date.now();
  const last = rateLimitMap.get(ip) || 0;
  if (now - last < RATE_LIMIT_MS) return true;
  rateLimitMap.set(ip, now);
  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, ts] of rateLimitMap.entries()) {
      if (now - ts > RATE_LIMIT_MS * 2) rateLimitMap.delete(key);
    }
  }
  return false;
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment and try again.' });
  }

  const { text } = req.body || {};

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Missing text field.' });
  }

  const trimmed = text.trim();

  if (trimmed.length < 10) {
    return res.status(400).json({ error: 'Input must be at least 10 characters.' });
  }

  if (trimmed.length > 500) {
    return res.status(400).json({ error: 'Input must be 500 characters or fewer.' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const response = await fetch(ANTHROPIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: trimmed }],
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error('Claude API error:', response.status, errBody);
      return res.status(502).json({ error: 'Something went wrong. Try again in a moment.' });
    }

    const data = await response.json();
    const explanation = data?.content?.[0]?.text?.trim() || '';

    if (explanation === 'NOT_BITCOIN_RELATED') {
      return res.status(200).json({ notRelated: true });
    }

    return res.status(200).json({ explanation });
  } catch (err) {
    console.error('Decode handler error:', err);
    return res.status(500).json({ error: 'Something went wrong. Try again in a moment.' });
  }
}
