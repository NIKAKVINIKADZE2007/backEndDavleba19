import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class randomCheckMiddleweare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const number = Math.round(Math.random() * 2);
    if (number % 2 == 1) return res.json({ message: 'request not allowed' });
    next();
  }
}
