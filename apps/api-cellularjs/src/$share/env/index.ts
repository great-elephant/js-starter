import { env as cllEnv } from '@cellularjs/env';

export class Env {
  NODE_PORT: string;
  DB_URL: string;
  JWT_SECRET: string;
  CLIENT_BASE_URL: string;
}

export const env = cllEnv<Env>;
