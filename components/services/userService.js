/**
 * 用户服务
 * @author zhanghua
 */
define(['./mod'], function (mod) {
    'use strict';
mod.factory('UserService', ['$http', '$q','$interval', function($http, $q,$interval) {
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
        // 启动倒计时
        var startCountDown = function($scope) {
            var count = 60
            $scope.countdown = count;
            $interval(function() {
                $scope.countdown--;
            }, 1000, count)
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
         // 登录
        var login = function(param) {
                var defer = $q.defer();
                $http.post('/yiqicha/manager/unLogin/login.do',param).success(function(data) {
                    if (isRequestSuccess(data)) {
                        defer.resolve(data);
                    } else {
                        defer.reject(data);
                    }
                });
                return defer.promise;
        };
        // 登出
        var logout = function(request) {
            var defer = $q.defer();
            $http.post('/yiqicha/manager/unLogin/logout.do',request).success(function(data) {
                if (isRequestSuccess(data)) {
                    defer.resolve(data);
                    location.reload(); // 登出成功，刷新页面
                }
            });
            return defer.promise;
        };
        return {
            register: register,
            sendSmsCaptcha:sendSmsCaptcha,
            login:login,
            logout:logout,
        };
    }
])

//忘记密码 服务
.factory('RetrieveService', ['$http', '$q', function($http, $q) {
    // find Dict by key
    var forgetPasswordSmsCaptcha = function(phoneNumber,imageCaptcha,isRegister) {
        var defer = $q.defer();
        $http.post('/yiqicha/manager/unLogin/sendSmsCaptcha.do', {
            phoneNumber: phoneNumber,
            imageCaptcha:imageCaptcha,
            isRegister: isRegister
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data.data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    var forgetPassword = function(newPassword,captcha) {
        var defer = $q.defer();
        $http.post('/yiqicha/manager/unLogin/forgetPassword.do', {newPassword: newPassword, captcha: captcha }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data.data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        forgetPasswordSmsCaptcha: forgetPasswordSmsCaptcha,
        forgetPassword: forgetPassword
    };
}])
//查询企业详情信息 服务
.factory('SearchpeopleService', ['$http', '$q', function($http, $q) {
    var Searchpeople = function(page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/login/findEnterpriseInfo.do',{
           page:page,
           rows:rows 
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        Searchpeople: Searchpeople
    };
}])
//查询诉讼信息 服务
.factory('LitigationService', ['$http', '$q', function($http, $q) {
    var Litigation = function(page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/findLawsuitMsg.do',{
           page:page,
           rows:rows 
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        Litigation: Litigation
    };
}])
//查询诉讼详情信息 服务
.factory('LitigationdeService', ['$http', '$q', function($http, $q) {
    var Litigationde = function(id) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/findLawsuitMsgById.do',id).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        Litigationde: Litigationde
    };
}])
//查询股东信息 服务
.factory('ShareholderService', ['$http', '$q', function($http, $q) {
    var Shareholder = function(page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/findStockMsg.do',{
            page:page,
            rows:rows
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        Shareholder: Shareholder
    };
}])

//查询股东信息 服务
.factory('compdetService', ['$http', '$q', function($http, $q) {
    var compdet = function(page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/findStockMsg.do',{
            page:page,
            rows:rows
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        compdet: compdet
    };
}])


//查询主要成员 服务
.factory('leadpeopleService', ['$http', '$q', function($http, $q) {
    var leadpeople = function(page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/mainMemberMsg/findMainMemberMsg.do',{
            page:page,
            rows:rows
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        leadpeople: leadpeople
    };
}])

//查询变更记录 服务
.factory('changeRecordService', ['$http', '$q', function($http, $q) {
    var changeRecord = function(page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/editRecordMsg/findEditRecord.do',{
           page:page,
           rows:rows 
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        changeRecord: changeRecord
    };
}])


//mod.factory('UserService', ['$http', '$q', function($http, $q) {
//        // 登录
//        var login = function() {
//            var defer = $q.defer();
//            $http.post('/yiqicha/manager/unLogin/login.do').success(function(data) {
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
//])
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