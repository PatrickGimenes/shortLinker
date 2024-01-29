import * as crypto from "crypto";

export function genShort(longUrl: string) {
  const hash = crypto.createHash("sha256").update(longUrl).digest("hex");
  const base64Key = hash
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
  const shortUrl = base64Key.slice(0, 7);

  const randomChars = generateRandomChars(7 - shortUrl.length);
  const randomShortUrl = shortUrl + randomChars.replace(/\//g, "A");

  return randomShortUrl;
}

function generateRandomChars(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}
