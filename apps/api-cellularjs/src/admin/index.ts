import { CommonModule } from '$share/common';
import { Cell } from '@cellularjs/net';
import { TypeOrmModule } from '@cellularjs/typeorm';
import { AdminProfileEntity } from './$inner/dal/admin-profile.dal';

@Cell({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature({
      entities: [
        AdminProfileEntity,
      ],
    }),
  ],
  providers: ['./'],
  listen: './',
})
export class Admin { }
