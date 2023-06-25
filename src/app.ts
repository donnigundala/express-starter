import express from 'express';
import 'dotenv/config'
import { logger, stream } from '@utils/winston.util';
import appConfig from "@src/config/app.config";

export class App {
  public app: express.Application
  public env: string
  public port: number | string

  constructor() {
    this.app = express();
    this.port = Number(appConfig.server.port)
    this.env = appConfig.env
  }

  public runServer() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
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