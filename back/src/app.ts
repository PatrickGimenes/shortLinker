import express, { Application } from "express";
import { Request, Response, NextFunction } from "express";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeRoutes();
  }

  initializeRoutes() {}
  listen(port: string) {
    this.app.listen(port, () => console.log(`Server is running  at ${port}`));
  }
}

export { App };
