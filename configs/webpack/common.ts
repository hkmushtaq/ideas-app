import { resolve } from "path";
import { CheckerPlugin } from "awesome-typescript-loader";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import postCssPresetEnv from "postcss-preset-env";

const webpackConfig: Configuration = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        include: /node_modules\/react-dom/,
        use: ["react-hot-loader/webpack"]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "awesome-typescript-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } }
        ]
      },
      {
        test: /\.module.(scss|sass)$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
                context: resolve(__dirname, "src"),
                hashPrefix: "edda70663d76"
              },
              localsConvention: "camelCase"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postCssPresetEnv()]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /\.module.(scss|sass)$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postCssPresetEnv()]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({ template: "index.html.ejs" }),
    new MiniCssExtractPlugin()
  ],
  performance: {
    hints: false
  }
};

export default webpackConfig;
