import { IUrl } from "../Interfaces/IUrl";

interface UrlRepository {
  shortenUrl(idUser: string, longurl: string, shortUrl: string): Promise<IUrl>;
  getUrl(id: string): Promise<IUrl[] | undefined>;
}

export { UrlRepository };
