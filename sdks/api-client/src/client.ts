import { createApiCollection } from '@sdks/api-runner';
import * as user from './callers/user';
import { ClientRunner } from './client-runner';

type ClientOptions = {
  runner: ClientRunner;
}

export class Client {
  constructor(protected _options: ClientOptions) { }

  /**
   * Single sign-on service.
   */
  public readonly user = createApiCollection(user, this._options.runner);
}
