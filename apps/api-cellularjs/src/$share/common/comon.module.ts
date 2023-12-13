import { Env } from '$share/env';
import { Module } from '@cellularjs/di';
import { EnvModule } from '@cellularjs/env';
import { getLogger } from '@cellularjs/logger';

@Module({
  exports: [EnvModule.config({ token: Env })],
})
export class CommonModule {
  onInit() {
    getLogger(CommonModule.name).info('initialized');
  }
}
