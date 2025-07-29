import dotenv from 'dotenv';
dotenv.config();

import { defineEnv, validateEnv } from 'node-env-schema';

const envFile = process.env.NODE_ENV === 'production' ? 'production.env' : 'development.env';

dotenv.config({ path: envFile });

const schema = defineEnv({
  PORT: { type: 'port', default: 3000 },
  ALLOWED_ORIGINS: { type: 'string', default: 'localhost' },
  MONGODB_CONNECTION_STRING: { type: 'string' },
  MONGODB_DATABASE: { type: 'string' },
  SCAN_RESULTS_COLLECTION: { type: 'string' },
  SCAN_SUBMISSIONS_COLLECTION: { type: 'string' },
  CLOUDFLARE_SCAN_ENDPOINT: { type: 'string' },
  CLOUDFLARE_RESULTS_ENDPOINT: { type: 'string' },
  CLOUDFLARE_API_KEY: { type: 'string' },
  ZERO_CLICK_API_KEY: { type: 'string' },
});

export const envVars = validateEnv(schema);
