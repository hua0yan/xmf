const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
      port: 8868,
      host: 'localhost',
      proxy: {
        '/ips': {
          target: 'http://www-wms-java.itheima.net', // 我们要代理的地址
          changeOrigin: true
        },
        '/api': {
          target: 'http://www-wms-java.itheima.net', // 我们要代理的地址
          changeOrigin: true
        }
      }
    },
    resolve: {
      alias: {
        '#': path.join(__dirname, 'src/components')
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '小蜜蜂'
      return args
    })
  }
})
