//**********
// 不注入HTTP拦截器的URL
//**********
define(['./mod'], function(mod) {
    'use strict';
    mod.constant('NoHttpInjectUrl', [
        // 上传文件
        '/easyplay/common/commonAPI/login/upLoadFile.do',
        '/yiqicha/manager/login/modifyUserIcon.do'
    ])
});
