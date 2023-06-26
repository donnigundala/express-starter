import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import hpp from 'hpp'
import { stream } from '@utils/winston.util';
import { routeNotFoundMiddleware, errorMiddleware } from '@middlewares/error.middleware';
import appConfig from "@src/config/app.config";

export class App {
  public app: express.Application
  public env: string
  public host: string
  public port: number | string

  constructor() {
    this.app = express();
    this.env = appConfig.env
    this.host = appConfig.server.host === '0.0.0.0'
      ? '127.0.0.1'
      : appConfig.server.host
    this.port = Number(appConfig.server.port)

    this.initializeMiddlewares()
    this.initializeErrorHandling()
  }

  public getServer() {
    return this.app
  }

  public runServer() {
    this.app.listen(this.port, () => {
      console.log('---------------- 🚀 SERVER STARTED ----------------')
      console.log(`             environment: ${this.env}`)
      console.log(`       Server Address: http://${this.host}:${this.port}`)
      console.log('---------------------------------------------------')
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
    this.app.use(routeNotFoundMiddleware)
    this.app.use(errorMiddleware);
  }
}