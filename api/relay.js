export default async function handler(req, res) {
  const fetch = (await import('node-fetch')).default;
  const query = req.query.q;

  if (!process.env.SF6_COOKIE) {
    return res.status(500).json({ error: 'Missing SF6_COOKIE in environment.' });
  }

  if (!query) {
    return res.status(400).json({ error: 'Missing search query (?q=...)' });
  }

  try {
    const response = await fetch(`https://www.streetfighter.com/6/buckler/_api/search?character=&q=${encodeURIComponent(query)}`, {
      headers: {
        'cookie': process.env.SF6_COOKIE,
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Request failed', details: err.message });
  }
  console.log('Cookie:', process.env.SF6_COOKIE);

}
