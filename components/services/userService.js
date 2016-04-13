/**
 * 用户服务
 * @author zhanghua
 */
define(['./mod'], function (mod) {
    'use strict';
mod.factory('UserService', ['$http', '$q', function($http, $q) {
        // 注册
        var register = function(param) {
            var defer = $q.defer();
            $http.post('/yiqicha/manager/unLogin/register.do', param).success(function(data) {
                if (isRequestSuccess(data)) {
                    defer.resolve(data);
                    findUserInfo();
                } else {
                    defer.reject();
                }
            });
            return defer.promise;
        };
        // 发送短信验证码
        var sendSmsCaptcha = function(phoneNumber,imageCaptcha,isRegister) {
                var defer = $q.defer();
                $http.post('/yiqicha/manager/unLogin/sendSmsCaptcha.do', {
                    phoneNumber: phoneNumber,
                    imageCaptcha:imageCaptcha,
                    isRegister: isRegister
                }).success(function(data) {
                    if (isRequestSuccess(data)) {
                        defer.resolve(data);
                    }
                });
                return defer.promise;
        };
        return {
            register: register,
            sendSmsCaptcha:sendSmsCaptcha,
        };
    }
])

//    mod.factory('UserService', ['$http', '$q', function($http, $q) {
//        // 登录
//        var login = function() {
//            var defer = $q.defer();
//            $http.post('/easyplay/manager/unLogin/login.do').success(function(data) {
//                if (isRequestSuccess(data)) {
//                    defer.resolve(data);
//                } else {
//                    defer.reject(data);
//                }
//            });
//            return defer.promise;
//        };
//
//        return {
//            login: login,
//        };
//      }
//    ])
    // mod.factory('UserService', [
    //     '$$http', '$rootScope', '$location', 'Roles', 'LoginTemplateUrl', 'LoginSuccessRedirctUrl', 'HomeUrl', '$interval', '$q',
    //     function ($$http, $rootScope, $location, Roles, LoginTemplateUrl, LoginSuccessRedirctUrl, HomeUrl, $interval, $q) {
    //         var validateImageCaptchaUrl = '/easyplay/manager/unLogin/validateImageCaptcha.do';
    //         var findJSESSIONIDUrl = '/easyplay/manager/login/findJSESSIONID.do';
    //         var findUserInfoUrl = '/easyplay/manager/login/findUserInfo.do';
    //         var registerUrl = '/easyplay/manager/unLogin/register.do';
    //         var loginUrl = '/easyplay/manager/unLogin/login.do';
    //         var logoutUrl = '/easyplay/manager/unLogin/logout.do';
    //         var sendSmsCaptchaUrl = '/easyplay/manager/unLogin/registerSmsCaptcha.do';

    //         this.validateImageCaptcha = function (imageCaptcha) {
    //             return $$http.post(validateImageCaptchaUrl, {
    //                 captcha: imageCaptcha
    //             });
    //         };

    //         // 获得当前会话的JSESSIONID
    //         this.findJSESSIONID = function () {
    //             return $$http.get(findJSESSIONIDUrl);
    //         };

    //         // 获得用户信息, 将用户信息放入$rootScope.user中,
    //         this.findUserInfo = function () {
    //             var defer = $q.defer();
    //             // 已经加载过用户信息的标识
    //             $rootScope.loadedUserInfo = true;
    //             $$http.get(findUserInfoUrl).then(function (data) {
    //                 $rootScope.user = data;
    //                 defer.resolve(data);
    //             }, function (data) {
    //                 delete $rootScope.user;
    //                 defer.reject(data);
    //             });
    //             return defer.promise;
    //         };
    //         var findUserInfoFn = this.findUserInfo;
    //         // 普通用户注册, 注册成功后重定向至LoginSuccessRedirctUrl[Roles.COMMON_CLIENT]
    //         this.register = function (param) {
    //             $$http.post(registerUrl, param).then(function (data) {
    //                 layer.msg("注册成功!");
    //                 findUserInfoFn();
    //                 // 重定向至指定的url
    //                 $location.path(LoginSuccessRedirctUrl[Roles.COMMON_CLIENT]);
    //             });
    //         };

    //         /**
    //          * 登录信息
    //          * @param  {Roles} role  要登录的角色 (已过时)
    //          * @param  {[type]} param 登录信息
    //          * @param  {[type]} key
    //          */
    //         this.login = function (role, param, key) {
    //             $$http.post(loginUrl, param).then(function (data) {
    //                 // 重定向至指定的url
    //                 if (key == 1) {
    //                     $location.path('/credit/secondStep');
    //                 } else {
    //                     var url = LoginSuccessRedirctUrl[data.roleName];
    //                     if (url === '/home') {
    //                         location.href = '/';
    //                     } else {
    //                         $location.path(url);
    //                     }
    //                 }
    //             });
    //         };

    //         // 登出, 登出成功后刷新当前页面
    //         this.logout = function () {
    //             $$http.post(logoutUrl).then(function (data) {
    //                 location.reload(); // 登出成功，刷新页面
    //             });
    //         };

    //         // 回到我的主页HomeUrl
    //         this.goHome = function () {
    //             if ($rootScope.user) {
    //                 var roleName = $rootScope.user.roleName;
    //                 location.href = HomeUrl[roleName];
    //             }
    //         };

    //         // 启动倒计时
    //         var startCountDown = function ($scope) {
    //             var count = 60;
    //             $scope.countdown = count;
    //             $interval(function () {
    //                 $scope.countdown--;
    //             }, 1000, count);
    //         };

    //         // 发送短信验证码
    //         this.sendSmsCaptcha = function (imageCaptcha, phoneNumber, $scope) {
    //             $$http.post(sendSmsCaptchaUrl, {
    //                 phoneNumber: phoneNumber
    //             }).then(function (data) {
    //                 startCountDown($scope);
    //             });
    //         };
    //         return this;
    // }]);
});