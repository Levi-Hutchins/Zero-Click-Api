import app from './app';

import { logger } from './utils/logger';
import { envVars } from './config/env.config';
import { connectMongoDB } from './config/mongoose';

const PORT = envVars.PORT;
const RUNTIME_ENV = process.env.NODE_ENV;

connectMongoDB();

app.listen(PORT, () => {
  logger.info(`🚀 Server is running on http://localhost:${PORT}`);
  logger.info(`Environment: ${RUNTIME_ENV}`);
});
