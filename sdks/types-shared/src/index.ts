import { ComponentType } from 'react';

export * from './response';
export * from './user';

export type ExtractPropsFromComponent<C> =
  C extends ComponentType<infer P> ? P : never;

export type Aql<W = { [k: string]: string | number | any }> = {
  select?: string[];
  where?: W;//{ [k: string]: string | number | any };
  order?: [string, 'ASC' | 'DESC'][];
  page?: number;
  size?: number;
}
