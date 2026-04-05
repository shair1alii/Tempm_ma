export default async function handler(req, res) {
  const response = await fetch("https://www.emailondeck.com/eod.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "x=1"
  });

  const text = await response.text();

  // NOTE: real parsing needed (this is simplified)
  res.json({
    email: "example@emailondeck.com",
    raw: text
  });
}
