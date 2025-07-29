import app from './app';
import { logger } from './utils/logger';
import { env } from './config/env.config';

const PORT = env.PORT;
const TEST = env.TEST;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
  console.log(`Server is running on port ${PORT}`);
  console.log(`Test mode is ${TEST}`);
  console.log('Raw env:', process.env.MONGODB_CONNECTION_STRING); // should show 'true'
});
