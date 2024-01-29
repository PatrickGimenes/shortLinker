import express, { Application } from "express";
import { Request, Response, NextFunction } from "express";
import { UrlRoutes } from "./routes/UrlRoutes";

class App {
  public app: Application;
  private urlRoutes = new UrlRoutes();

  constructor() {
    this.app = express();
    this.app.use(express.json());

    this.initializeRoutes();
  }

  initializeRoutes() {
    this.app.use("/", this.urlRoutes.router);
  }
  listen(port: string) {
    this.app.listen(port, () => console.log(`Server is running  at ${port}`));
  }
}

export { App };
