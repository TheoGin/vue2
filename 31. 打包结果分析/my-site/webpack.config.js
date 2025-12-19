const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

if (process.env.NODE_ENV === "production") {
  module.exports = {
    // WebpackOptionsValidationError: Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.  - configuration has an unknown property 'configureWebpack'.
    /*configureWebpack: {
      plugins: [new BundleAnalyzerPlugin()]
    }*/
    plugins: [new BundleAnalyzerPlugin()],
    externals: { // 以下库不会进行打包，可以通过 CDN 引入
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      // axios: "axios",
    },
    // 生产环境不需要源码映射
    devtool: false,
  };
} else {
  module.exports = {};
}