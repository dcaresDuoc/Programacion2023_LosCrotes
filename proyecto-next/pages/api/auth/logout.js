export default function handler(req, res) {
  res.setHeader(
    'Set-Cookie',
    'Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  );

  res.status(200).end();
}