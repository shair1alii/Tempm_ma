export default async function handler(req, res) {
  const response = await fetch("https://www.emailondeck.com/eod.php", {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Cookie": "PHPSESSID=kd4d697p6je6v00na812jc5as"
    }
  });

  const text = await response.text();

  // Email extract (basic)
  const match = text.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/);

  res.json({
    email: match ? match[0] : "not found"
  });
}
