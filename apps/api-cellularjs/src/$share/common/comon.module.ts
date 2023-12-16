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
      url: env().DB_URL,
    }),
  ],
})
export class CommonModule {
  onInit() {
    getLogger(CommonModule.name).info('initialized');
  }
}
