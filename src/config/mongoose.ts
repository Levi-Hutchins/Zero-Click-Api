import { connect, set } from 'mongoose';
import { logger } from '../utils/logger';
import { envVars } from './env.config';

const MONGO_DB_URI = envVars.MONGODB_CONNECTION_STRING || '';

export const connectMongoDB = async () => {
  try {
    set('strictQuery', false);
    await connect(MONGO_DB_URI);
    logger.info(' MongoDB connected ✅ ');
  } catch (error) {
    logger.error('Error connecting to MongoDB', error);
  }
};
