import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import hpp from 'hpp'
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

    this.initializeMiddlewares()
  }

  public getServer() {
    return this.app
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
    this.app.use(morgan(appConfig.morgan.format, { stream }));
    this.app.use(cors({ origin: '*' }));
    this.app.use(helmet());
    this.app.use(compression());
    // @ts-ignore
    this.app.use(express.json());
    // @ts-ignore
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(hpp())
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