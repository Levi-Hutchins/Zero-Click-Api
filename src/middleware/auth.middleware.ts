import { NextFunction, Request, Response } from 'express';
import { env } from '../config/env.config';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];

  if (!token || token !== env.ZERO_CLICK_API_KEY) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
}
