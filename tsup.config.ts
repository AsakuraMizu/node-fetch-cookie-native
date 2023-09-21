import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/browser.ts', 'src/node.ts'],
  format: ['esm', 'cjs'],
  clean: true,
});
