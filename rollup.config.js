/* eslint-env node */

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

function createConfig(input) {
  /** @type {import('rollup').RollupOptions} */
  const config = {
    input: input,
    output: {
      dir: 'dist',
      format: 'es',
    },
    plugins: [
      resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
      commonjs(),
      typescript({ tsconfig: 'tsconfig.src.json', sourceMap: false }),
    ],
  };
  return config;
}

// eslint-disable-next-line import/no-default-export
export default [createConfig('src/index.ts')];
