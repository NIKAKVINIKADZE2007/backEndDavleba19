import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class checkForApiKey implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const key = req.headers['apikey'];
    console.log(key);
    if (!key) return res.json({ message: 'permition denied' });
    next();
  }
}
