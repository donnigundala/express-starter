import express, { Express } from "express";
import 'dotenv/config'
import appConfig from "@configs/app";

export class App {
  public app: express.Application
  public port: number

  constructor() {
    this.app = express();
    this.port = Number(appConfig.server.port)
  }

  public runServer() {
    this.app.listen(this.port, () => {
      console.log(`server start ${this.port}`)
    })
  }

  private initializeMiddlewares() {
    // use middleware here
  }

  private initializeRoutes() {
    // routes.forEach(route => {
    //   this.app.use('/', route.router);
    // });
  }

  private initializeErrorHandling() {
    // this.app.use(ErrorMiddleware);
  }
}