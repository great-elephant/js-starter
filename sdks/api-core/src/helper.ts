import { BIND_FUNC, ORIGINAL_RUNNER } from './constants';
import { ClientRunner } from './client-runner';
import { APICaller } from './type';

export function genURLSearchParams(params: Record<string, any>) {
  return new URLSearchParams(Object.fromEntries(
    Object.entries(params).filter(([, value]) => !!value),
  ));
}

export function createApiCollection<
  CallerCollection extends { [k: string]: APICaller },
  Runner = unknown,
>(
  obj: CallerCollection,
  runner: Runner,
) {
  type ObjType = typeof obj;
  type ObjKey = keyof ObjType;
  type ApiCollection = {
    [K in ObjKey]: (this: unknown, ...args: Parameters<ObjType[K]>) => ReturnType<ObjType[K]>;
  };

  return Object.keys(obj).reduce((prev, key) => {
    const apiCaller = obj[key]!;
    const newApiCaller: APICaller = apiCaller.bind(runner);

    newApiCaller[ORIGINAL_RUNNER] = runner;

    newApiCaller[BIND_FUNC] = (newRunner) => {
      return apiCaller.bind(newRunner);
    };

    return ({ ...prev, [key]: newApiCaller });
  }, {} as ApiCollection);
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