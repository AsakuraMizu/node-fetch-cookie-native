import { fetch } from 'node-fetch-native';

export default function makeFetch(): typeof fetch {
  return (input, init) => fetch(input, { ...init, credentials: 'include' });
}
