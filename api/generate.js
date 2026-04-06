export default async function handler(req, res) {
  const response = await fetch("https://www.emailondeck.com/eod.php", {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Cookie": "PHPSESSID=3isjbg118897gsdqaf4uk7f4pb"
    }
  });

  const text = await response.text();

  const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/);

  res.json({
    email: match ? match[0] : "not found"
  });
}
