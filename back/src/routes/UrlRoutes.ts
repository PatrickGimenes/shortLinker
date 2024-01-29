import express, { Router } from "express";
import { UrlController } from "../Controllers/UrlController";
import { UrlRepositoryPrisma } from "../Repositories/UrlRepositoryPrisma";
import { UrlUseCase } from "../UseCase/UrlUseCase";

class UrlRoutes {
  public router: Router;
  private urlController: UrlController;

  constructor() {
    this.router = Router();
    const urlRepository = new UrlRepositoryPrisma();
    const urlUseCase = new UrlUseCase(urlRepository);
    this.urlController = new UrlController(urlUseCase);
    this.initRoutes();
  }

  initRoutes() {
    this.router.get(
      "/url/:id",
      this.urlController.getUrl.bind(this.urlController)
    );
    this.router.post(
      "/url",
      this.urlController.shortenUrl.bind(this.urlController)
    );
  }
}

export { UrlRoutes };
