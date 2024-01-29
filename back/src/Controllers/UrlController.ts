import { NextFunction, Request, Response } from "express";
import { UrlUseCase } from "../UseCase/UrlUseCase";
import { genShort } from "../Services/UrlService";

class UrlController {
  constructor(private urlUseCase: UrlUseCase) {}

  async getUrl(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const url = await this.urlUseCase.getUrl(id);
      return res.json(url);
    } catch (error) {
      console.error("Error in getUrl", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async shortenUrl(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, long } = req.params;
      const short = genShort(long);
      const url = await this.urlUseCase.shortenUrl(id, long, short);
      return res.json(url);
    } catch (error) {
      console.error("Error in shortenUrl", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
export { UrlUseCase };
