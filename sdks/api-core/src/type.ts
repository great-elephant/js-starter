import { BIND_FUNC, ORIGINAL_RUNNER } from './constants';

type CallerFunc = (...args: any[]) => Promise<any>;

export interface APICaller<Runner = unknown> extends CallerFunc {
  [BIND_FUNC]?: (runner: Runner) => APICaller<Runner>;

  [ORIGINAL_RUNNER]?: Runner;
}
