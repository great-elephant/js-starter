import { Module } from '@nestjs/common';
import { CommonModule } from '$share/common';
import { HaloController } from './halo.controller';

@Module({
  imports: [CommonModule],
  controllers: [HaloController],
})
export class HaloModule {}
