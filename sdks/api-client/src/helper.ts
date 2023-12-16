import { APICaller, BIND_FUNC, ORIGINAL_RUNNER } from '@sdks/api-runner';
import { ClientRunner } from './client-runner';

export function genURLSearchParams(params: Record<string, any>) {
  return new URLSearchParams(Object.fromEntries(
    Object.entries(params).filter(([, value]) => !!value),
  ));
}

export function overrideCaller(
  caller: APICaller<ClientRunner>,
  cb: (originalRunner: ClientRunner) => ClientRunner,
): APICaller<ClientRunner> {
  if (!caller[ORIGINAL_RUNNER] || !caller[BIND_FUNC]) {
    throw new Error('clientRunner or BIND_FUNC is undefined');
  }

  const clientRunner = caller[ORIGINAL_RUNNER];
  const proxiedClientRunner = cb(clientRunner);
  const bindClientRunner = caller[BIND_FUNC];

  return bindClientRunner(proxiedClientRunner);
}