export default async function handler(req, res) {
  const response = await fetch("https://www.emailondeck.com/ajax/messages.php", {
    method: "POST",
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Cookie": "PHPSESSID=3isjbg118897gsdqaf4uk7f4pb"
    }
  });

  const text = await response.text();

  res.json({ data: text });
}
