// const path = require('path')

// function resolve(dir) {
//     return path.join(__dirname, dir)
//   }
module.exports = {
    // chainWebpack(config) {
    //     // set svg-sprite-loader
    //     config.module
    //       .rule('svg')
    //       .exclude.add(resolve('src/icons'))
    //       .end()
    //     config.module
    //       .rule('icons')
    //       .test(/\.svg$/)
    //       .include.add(resolve('src/icons'))
    //       .end()
    //       .use('svg-sprite-loader')
    //       .loader('svg-sprite-loader')
    //       .options({
    //         symbolId: 'icon-[name]'
    //       })
    //       .end()
    //   }
    devServer:{
        host:'0.0.0.0',   //ip
        port:8081,      //端口
        // open:false,     //编译完成后是否自动打开浏览器
        proxy:{         // 本地环境代理
            'prod-api':{
                target:'http://vue.ruoyi.vip/prod-api',
                // target:'http://192.168.2.201:8080',
                // target:'http://dev.gonsincloud.com:80',
                changeOrigin:true,
                disableHostCheck: false, //  新增该配置项
                // pathRewrite:{
                //     '/api':''
                // }
            },
            '/restapi':{
                target:'http://192.168.2.192:8080',
                // target:'http://192.168.2.201:8080',
                // target:'http://dev.gonsincloud.com:80',
                changeOrigin:true,
                disableHostCheck: false, //  新增该配置项
                // pathRewrite:{
                //     '/api':''
                // }
            }
        }
    },
}