import { NetworkConfig, createNetWork } from '@cellularjs/net';
import { Admin } from 'admin';
import { User } from 'user';

export async function initNetwork() {
  const netCnfs: NetworkConfig = [
    { name: Admin.name, driver: Admin },
    { name: User.name, driver: User },
  ];

  await createNetWork(netCnfs);
}