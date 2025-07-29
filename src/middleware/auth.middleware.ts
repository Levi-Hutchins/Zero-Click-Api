import { NextFunction, Request, Response } from 'express';
import { envVars } from '../config/env.config';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];

  if (!token || token !== envVars.ZERO_CLICK_API_KEY) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
}
