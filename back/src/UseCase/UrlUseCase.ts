import { IUrl } from "../Interfaces/IUrl";
import { UrlRepository } from "../Repositories/UrlRepository";

class UrlUseCase {
  constructor(private urlRepositoy: UrlRepository) {}
  getUrl(id: string): Promise<IUrl[] | undefined> {
    return this.urlRepositoy.getUrl(id);
  }

  shortenUrl(idUser: string, longurl: string, shortUrl: string): Promise<IUrl> {
    return this.urlRepositoy.shortenUrl(idUser, longurl, shortUrl);
  }
}

export { UrlUseCase };
