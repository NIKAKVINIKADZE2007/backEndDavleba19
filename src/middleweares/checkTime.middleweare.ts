import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class checkTimeMiddlewear implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const time = new Date().getHours();
    if (time > 18 || time < 10) {
      return res.json({
        message: 'not allowed at this time try from 10 to 18oclock',
      });
    }
    next();
  }
}
