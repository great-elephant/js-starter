import { AsyncLocalStorage } from 'async_hooks';

export const als = new AsyncLocalStorage<{
  lang: string;
}>();
