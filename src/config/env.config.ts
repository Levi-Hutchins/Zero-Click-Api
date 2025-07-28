import dotenv from 'dotenv';
dotenv.config();

import { defineEnv, validateEnv } from 'node-env-schema';

const envFile = process.env.NODE_ENV === 'production' ? 'production.env' : 'development.env';
dotenv.config({ path: envFile });

const schema = defineEnv({
  PORT: { type: 'port', default: 3000 },
  ENABLE_FEATURE: { type: 'boolean', default: false },
  TEST: { type: 'boolean', default: false },
  ALLOWED_ORIGINS: { type: 'string', default: 'localhost' },
});

export const env = validateEnv(schema);
