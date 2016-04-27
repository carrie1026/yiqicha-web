/**
 * 权限服务
 *
 * @author zhanghua on 4/25/16
 */
define(['./mod'], function(mod) {
    'use strict';
    mod.factory('AuthService', ['$$http', 'UserService', '$q', 'Auths', function($$http, UserService, $q, Auths) {

        this.doAuth = function(next, current) {
            next.$$route = next.$$route || {};// catch error
            var nextPath = next.$$route.originalPath;
            var isAuth = false;
            // check is auth
            for (var i = 0; i < Auths.length; i++) {
                if (nextPath == Auths[i]){
                    isAuth = true;
                    break;
                }
            }

            var defer = $q.defer();// define promise

            UserService.findUserInfo().then(function(data){// logined
                defer.resolve(data);
            }, function(data) {// no login
                if (isAuth){
                    defer.reject();
                } else {
                    defer.resolve();// no auth
                }
            });

            return defer.promise;
        };

        return this;
    }]);
});
