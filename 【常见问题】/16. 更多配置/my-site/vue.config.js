module.exports = {
  // 1. devServer：和webpack-dev-server一样，具体配置可看webpack官网
  devServer: {
    proxy: {
      "/api": {
        // 以 api 开头的开发服务器转发到 http://test.mysite.com
        target: "http://test.mysite.com",
      },
    },
  },

  // 2. publicPath：和webpack一样，抽离到这
  publicPath: "/news", // Default: '/'

  // 3. outputDir
  outputDir: 'dist-pack',

  // 4. runtimeCompiler
  runtimeCompiler: true, // 在运行时保留 compiler 会让你的应用额外增加 10kb 左右

  // 5. transpileDependencies
  transpileDependencies: ["axios"], // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。

  // 6. configureWebpack
  configureWebpack: require("./webpack.config"), // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。

  // 7. css.requireModuleExtension
  css: {
    requireModuleExtension: false, // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
  },
};