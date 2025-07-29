import express from 'express';
import { envVars } from './config/env.config';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import userRoutes from './routes/user.routes';
import scanRoutes from './routes/scan.routes';
import healthRoute from './routes/health.route';
import { PROD_ENV } from './utils/api.constants';
import { notFoundMiddleware, errorHandlerMiddleware } from './middleware/index.middleware';
import { authMiddleware } from './middleware/auth.middleware';

const environment = process.env.NODE_ENV || 'development';

const app = express();

app.use(express.json());

app.use(environment === PROD_ENV ? morgan('combined') : morgan('dev'));
//TODO: see confgiruation for this
app.use(helmet());

const allowedOrigins = envVars.ALLOWED_ORIGINS || 'localhost';

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
app.use(authMiddleware);
app.use('/api/users', userRoutes);

app.use('/api/scan-submissions', scanRoutes);

app.use('/', healthRoute);

app.use(notFoundMiddleware, errorHandlerMiddleware);

export default app;
