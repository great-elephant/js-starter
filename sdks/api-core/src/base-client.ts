import { ClientRunner } from './client-runner';

type ClientOptions = {
  runner: ClientRunner;
}

export class BaseClient {
  constructor(protected _options: ClientOptions) { }
}
