import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/deep-get.ts',
  output: {
    file: 'dist/deep-get.js',
    format: 'umd',
    name: 'optimizatedDeepGet',
    sourceMap: true,
  },
  plugins: [typescript()],
}
