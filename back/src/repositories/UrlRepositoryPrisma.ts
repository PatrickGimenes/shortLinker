import { PrismaClient } from "@prisma/client";
import { IUrl } from "../Interfaces/IUrl";
import { UrlRepository } from "./UrlRepository";

const prisma = new PrismaClient();

class UrlRepositoryPrisma implements UrlRepository {
  async shortenUrl(
    idUser: string,
    longurl: string,
    shortUrl: string
  ): Promise<IUrl> {
    const url = await prisma.uRL.create({
      data: {
        long_url: longurl,
        short_url: shortUrl,
        id_user: {
          connect: { id: idUser },
        },
      },
    });
    return url;
  }
  async getUrl(id: string): Promise<IUrl[]> {
    const url = await prisma.uRL.findMany({
      where: {
        id,
      },
    });
    return url;
  }
}

export { UrlRepositoryPrisma };
