// eslint-disable-next-line @typescript-eslint/no-var-requires
const Webpack = require("webpack");
const VueAutoRoutingPlugin = require("vue-auto-routing/lib/webpack-plugin");

module.exports = {
  transpileDependencies: ["quasar"],

  configureWebpack: {
    plugins: [
      new VueAutoRoutingPlugin({
        // Path to the directory that contains your page components.
        pages: "src/pages",

        // A string that will be added to importing component path (default @/pages/).
        importPrefix: "@/pages/",
      }),
      new Webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ],
    resolve: {
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        // path: require.resolve("path-browserify"),
        path: false,
        fs: false,
      },
      alias: {
        process: "process/browser",
      },
    },
  },

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
};
