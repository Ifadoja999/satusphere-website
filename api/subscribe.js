// Vercel serverless function: subscribe email to Kit (ConvertKit)
// Keeps KIT_API_KEY server-side. Called from satusphere-gate.js.

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source, score } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required.' });
  }

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID || '9316004';
  const sequenceId = process.env.KIT_SEQUENCE_ID || '2718150';

  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const headers = {
      'X-Kit-Api-Key': apiKey,
      'Content-Type': 'application/json',
    };
    const emailAddress = email.trim().toLowerCase();

    // Step 1: Subscribe to form
    const subRes = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email_address: emailAddress,
        form_id: Number(formId),
        fields: {
          source: source || 'unknown',
          score: score !== undefined ? String(score) : 'n/a',
        },
      }),
    });

    if (!subRes.ok) {
      const body = await subRes.text();
      console.error('Kit subscribe error:', subRes.status, body);
      return res.status(502).json({ error: 'Subscription failed. Try again.' });
    }

    const subData = await subRes.json();
    const subscriberId = subData?.subscriber?.id;

    // Step 2: Add to welcome sequence
    if (subscriberId) {
      await fetch(`https://api.kit.com/v4/sequences/${sequenceId}/subscribers`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ subscriber_id: subscriberId }),
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Subscribe handler error:', err);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
}
