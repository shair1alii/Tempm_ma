export default async function handler(req, res) {
  const response = await fetch("https://www.emailondeck.com/ajax/messages.php");
  const text = await response.text();

  res.json({ data: text });
}
