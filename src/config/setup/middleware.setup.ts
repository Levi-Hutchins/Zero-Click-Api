import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { Express } from 'express';
import { env } from '../env.config';
import { PROD_ENV } from '../../utils/api.constants';
import { errorHandlerMiddleware, notFoundMiddleware } from '../../middleware/index.middleware';
import { authMiddleware } from '../../middleware/auth.middleware';

export const setupMiddlewares = (app: Express) => {
  const environment = process.env.NODE_ENV || 'development';
  const allowedOrigins = env.ALLOWED_ORIGINS || 'localhost';

  const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };

  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

  if (environment === PROD_ENV) {
    app.use(notFoundMiddleware, errorHandlerMiddleware);
    app.use(authMiddleware);
  }
};
