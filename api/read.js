export default async function handler(req, res) {
  const { id } = req.query;

  const response = await fetch(`https://www.emailondeck.com/email.php?msg_id=${id}`);
  const text = await response.text();

  res.json({ data: text });
}
