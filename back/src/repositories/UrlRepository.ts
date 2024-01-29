import { IUrl } from "../Interfaces/IUrl";

interface UrlRepository {
  shortenUrl(): Promise<IUrl>;
  getUrl(id): Promise<IUrl | undefined>;
}

export { UrlRepository };
