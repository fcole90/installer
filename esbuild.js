// @ts-check

import { build } from "esbuild";

await build({
  entryPoints: ['packages/installer/index.ts'],
  outdir: 'dist',
  bundle: true,
  // target: "firefox60", // Since GJS 1.53.90
  // target: "firefox68", // Since GJS 1.63.90
  target: "firefox78", // Since GJS 1.65.90
  // target: "firefox91", // Since GJS 1.71.1
  format: 'esm',
  // platform: 'node',
  external: ['gi://*', 'resource://*', 'gettext', 'system', 'cairo'],
  keepNames: true,
  minify: false,
})