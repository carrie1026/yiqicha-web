// 编译支持 amd 规范
// npm install -g fis3-hook-amd
fis.hook('amd');
// 依赖组件加载支持
// npm install -g fis3-postpackager-loader
fis.match('::package', {
    postpackager: fis.plugin('loader', {})
});

fis.match('**.{md}', { //所有md后缀的文件
    release: false //不发布
});

fis.match('/components/**', {
    isMod: true
});

// 生产环境
// fis.media('pro').match('/components/**.js', {
//     packTo: '/static/app.js',
//     optimizer: fis.plugin('uglify-js')
// }).match('/css/**', {
//     packTo: '/static/style.css',
//     optimizer: fis.plugin('clean-css')
// }).match('/static/**', {
//     useHash: true
// })
fis.media('pro').match('/components/ctrls/**.js', {
    packTo: '/static/ctrl.js'
}).match('/components/services/*.js', {
    packTo: '/static/service.js'
}).match('/components/directives/*.js', {
    packTo: '/static/directive.js'
}).match('/components/constants/*.js', {
    packTo: '/static/constant.js'
});

// 开发环境
fis.media('dev').match('/components/ctrls/**.js', {
    packTo: '/static/ctrl.js'
}).match('/components/services/*.js', {
    packTo: '/static/service.js'
}).match('/components/directives/*.js', {
    packTo: '/static/directive.js'
}).match('/components/constants/*.js', {
    packTo: '/static/constant.js'
});

// 测试环境
fis.media('test').match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://bigdata.boyuanitsm.com:8999/receiver',
    to: '/usr/share/nginx/yiqicha-web' // 注意这个是指的是测试机器的路径，而非本地机器
  })
}).match('/components/ctrls/**.js', {
    packTo: '/static/ctrl.js'
}).match('/components/services/*.js', {
    packTo: '/static/service.js'
}).match('/components/directives/*.js', {
    packTo: '/static/directive.js'
}).match('/components/constants/*.js', {
    packTo: '/static/constant.js'
});
