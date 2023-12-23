import { client } from './api-client';

if (typeof window !== 'undefined') {
  window.client = client;
} else {
  global.client = client;
}
