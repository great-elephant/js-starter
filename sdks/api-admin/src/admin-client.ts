
import { BaseClient, createApiCollection } from '@sdks/api-core';
import * as user from './callers/user';
import * as admin from './callers/admin';

export class AdminClient extends BaseClient {
  public readonly user = createApiCollection(user, this._options.runner);

  public readonly admin = createApiCollection(admin, this._options.runner);
}
