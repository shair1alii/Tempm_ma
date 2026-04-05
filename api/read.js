export default async function handler(req, res) {
  const { id } = req.query;

  const response = await fetch(`https://www.emailondeck.com/email_iframe.php?msg_id=${id}`, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Cookie": "PHPSESSID=kd4d697p6je6v00na812jc5as"
    }
  });

  const text = await response.text();

  res.send(text);
}
