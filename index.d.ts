import type { fetch } from 'node-fetch-native';
import type { CookieJar } from 'tough-cookie';

export default function makeFetch(jar?: CookieJar): typeof fetch;
