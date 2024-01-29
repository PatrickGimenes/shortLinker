import * as crypto from "crypto";
import shortid from "shortid";

export function genShort(longUrl: string) {
  const hash = crypto.createHash("sha256").update(longUrl).digest("hex");

  // Passo 2: Converter a chave para base64
  const base64Key = Buffer.from(hash, "hex").toString("base64");

  // Passo 3: Selecionar os primeiros sete caracteres
  const shortUrl = base64Key.slice(0, 7);

  return shortUrl;
}
