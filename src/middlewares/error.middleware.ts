import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/http.exception';
import { logger } from '@utils/winston.util';
import appConfig from "@config/app.config";

export const routeNotFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next(new HttpException(404, `Route not found`))
}

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';
    const stack = appConfig.env === 'production' ? null : error.stack

    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    res.status(status).json({
      status,
      message,
      stack
    });
  } catch (error) {
    next(error);
  }
};
