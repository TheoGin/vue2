module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // 以 api 开头的开发服务器转发到 http://test.mysite.com
        target: 'http://test.mysite.com'
      }
    }
  }
}