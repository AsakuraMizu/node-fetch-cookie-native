import { fetch } from 'node-fetch-native';
import fetchCookie from 'fetch-cookie';
import type { CookieJar } from 'tough-cookie';

export default function makeFetch(jar?: CookieJar): typeof fetch {
  return fetchCookie(fetch, jar);
}
