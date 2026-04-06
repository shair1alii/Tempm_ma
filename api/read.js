export default async function handler(req, res) {
  const { id } = req.query;

  const response = await fetch(`https://www.emailondeck.com/email_iframe.php?msg_id=${id}`, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Cookie": "PHPSESSID=3isjbg118897gsdqaf4uk7f4pb"
    }
  });

  const text = await response.text();

  res.send(text);
}
