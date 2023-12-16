import { BIND_FUNC, ORIGINAL_RUNNER } from './client';
import { APICaller } from './type';

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
