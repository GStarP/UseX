import ts from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'UseX',
      file: './lib/index.js',
      format: 'esm'
    },
    plugins: [
      // parse typescript and generate .d.ts
      ts()
    ]
  },
  // TODO seperate these build types
  {
    input: 'lib/index.js',
    output: {
      name: 'UseX',
      file: './dist/usex.min.js',
      format: 'umd'
    },
    plugins: [terser()]
  }
];
