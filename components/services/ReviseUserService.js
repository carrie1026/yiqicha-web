/**
 * 用户服务
 * @author zhanghua
 */
define(['./mod'], function (mod) {
    'use strict';
mod.factory('reviseUserService', ['$http', '$q', function($http, $q) {
    //修改用户信息 服务
    var reviseUser = function(param) {
        console.log("1111122222");
        var defer = $q.defer();
        $http.post('/yiqicha/manager/login/modifyUserInfo.do', param).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };
    return {
        reviseUser: reviseUser
    };
}]);
});