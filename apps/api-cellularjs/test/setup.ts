import { clearNetwork } from '@cellularjs/net';
import { destroyAllDataSource } from '@cellularjs/typeorm';
import supertest from 'supertest';
import { initApp } from '$gateway/http/app';

beforeEach(async () => {
  global.server = (await initApp()).listen();
  global.testAgent = supertest(global.server);
});

afterEach(async () => {
  await destroyAllDataSource();
  await clearNetwork();
  global.server?.close();
});
