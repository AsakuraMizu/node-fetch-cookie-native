# node-fetch-cookie-native

[![](https://flat.badgen.net/npm/v/node-fetch-cookie-native)](https://www.npmjs.com/package/node-fetch-cookie-native)

This package is a simple wrapper for [node-fetch-native](https://github.com/unjs/node-fetch-native) and [fetch-cookie](https://github.com/valeriangalliat/fetch-cookie). It use conditional import to reduce bundle size. Its behaviour will be like:

- In browser, `fetch` with `credentials: 'include'`
- In node (>=18), native `fetch` with `fetch-cookie`
- In node (<18), `node-fetch` with `fetch-cookie`
