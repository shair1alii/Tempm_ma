export default async function handler(req, res) {
  const response = await fetch("https://www.emailondeck.com/eod.php", {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });

  const text = await response.text();

  // better email match
  const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/);

  res.json({
    email: match ? match[0] : "email not found"
  });
}
