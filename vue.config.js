module.exports = {
  configureWebpack: {
    resolve: {
      // 文件后缀识别
      extensions: [],
      // 别名配置
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  devServer: {
    // host: '10.181.8.62',
    // port: 8080
  }
}