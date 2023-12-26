import { ComponentType } from 'react';

export * from './response';
export * from './user';

export type ExtractPropsFromComponent<C> =
  C extends ComponentType<infer P> ? P : never;
  