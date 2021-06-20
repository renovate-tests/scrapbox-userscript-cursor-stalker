/* eslint-env node */

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    // Page#addScriptTag で差し込む都合上、bundle ファイルに sourcemap が埋め込まれている必要がある
    sourcemap: 'inline',
  },
  plugins: [
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.src.json',
      // ref: https://github.com/rollup/plugins/issues/260#issuecomment-601551228
      inlineSources: true,
    }),
  ],
};

// eslint-disable-next-line import/no-default-export
export default config;
