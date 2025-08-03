import express from 'express';
import { setupRoutes } from './routes/index.routes';
import { setupMiddlewares } from './config/setup/middleware.setup';
import { setupSwagger } from './config/setup/swagger.config';

const app = express();

app.use(express.json());

setupMiddlewares(app);

setupRoutes(app);

if (process.env.NODE_ENV !== 'production') {
  setupSwagger(app);
}

export default app;
