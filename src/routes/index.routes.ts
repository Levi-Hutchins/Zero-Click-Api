import { Express } from 'express';
import userRoutes from './user.routes';
import scanRoutes from './scan.routes';
import healthRoute from './health.route';

export const setupRoutes = (app: Express) => {
  app.use('/api/users', userRoutes);
  app.use('/api/scan-submissions', scanRoutes);
  app.use('/', healthRoute);
};
