import { IUrl } from "../Interfaces/IUrl";

interface UrlRepository {
  shortenUrl(idUser: string, longurl: string, shortUrl: string): Promise<IUrl>;
  getUrl(url: string): Promise<IUrl[] | undefined>;
}

export { UrlRepository };
