import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export declare class checkForApiKey implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>>;
}
