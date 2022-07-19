import ResolvePlugin from "rollup-plugin-node-resolve";
import ImportPlugin from "rollup-plugin-commonjs";
import TsPlugin from "rollup-plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    name: "UseX",
    file: "dist/usex.prod.js",
    format: "umd"
  },
  plugins: [
    // import external dependencies
    ResolvePlugin(),
    ImportPlugin(),
    // parse typescript
    TsPlugin()
  ]
};
