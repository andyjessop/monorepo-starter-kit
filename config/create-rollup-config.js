import path from 'path';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import yaml from '@rollup/plugin-yaml';

export function createRollupConfig(distDir, name, format, suffix) {
  return {
    input: path.resolve(__dirname, './src/index.ts'),
    output: {
      file: path.resolve(distDir, `${name}.${suffix}`),
      format,
      name,
      sourcemap: true,
    },
    plugins: [
      json({
        compact: true,
        indent: '  ',
        preferConst: true,
      }),
      yaml(),
      eslint({
        configFile: path.resolve(__dirname, '../../.eslintrc.js'),
      }),
      typescript({
        clean: true,
        tsconfig: path.resolve(__dirname, './tsconfig.json'),
        useTsconfigDeclarationDir: true,
      }),
      resolve(),
      commonjs(),
      cleanup({
        comments: 'none',
        extensions: ['.ts'],
      }),
    ],
  };
}
