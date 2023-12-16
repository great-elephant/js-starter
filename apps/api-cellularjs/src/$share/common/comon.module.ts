import { Module } from '@cellularjs/di';
import { EnvModule } from '@cellularjs/env';
import { getLogger } from '@cellularjs/logger';
import { TypeOrmModule } from '@cellularjs/typeorm';
import { Env, env } from '$share/env';

@Module({
  exports: [
    EnvModule.config({ token: Env }),
    TypeOrmModule.initialize({
      type: 'postgres',
      host: env().DB_HOST,
      port: env().DB_PORT,
      username: env().DB_USER,
      password: env().DB_PASSWORD,
      database: env().DB_NAME,
      schema: env().DB_SCHEMA_NAME,
    }),
  ],
})
export class CommonModule {
  onInit() {
    getLogger(CommonModule.name).info('initialized');
  }
}
