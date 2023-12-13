import { NetworkConfig } from '@cellularjs/net';
import { User } from 'user';

export const netCnfs: NetworkConfig = [{
  name: User.name, driver: User,
}];
