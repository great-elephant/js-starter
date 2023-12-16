import { CommonModule } from '$share/common';
import { Cell } from '@cellularjs/net';
import { TypeOrmModule } from '@cellularjs/typeorm';
import { UserRegistrationEntity } from './$inner/dal/user-registration.dal';
import { UserProfileEntity } from './$inner/dal/user-profile.dal';

@Cell({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature({
      entities: [
        UserProfileEntity,
        UserRegistrationEntity,
      ],
    }),
  ],
  providers: ['./'],
  listen: './',
})
export class User { }
