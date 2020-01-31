import merge from "webpack-merge";
import { resolve } from "path";

import commonConfig from "./common";

const webpackConfig = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "js/bundle.[hash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/"
  },
  devtool: "source-map",
  plugins: [],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
});

export default webpackConfig;
