define(['./mod'], function (mod) {
    'use strict';
mod.factory('compdetService', ['$http', '$q','$interval', function($http, $q,$interval) {
        // 注册
        var compdet = function(param) {
            var defer = $q.defer();
            $http.post('/yiqicha/companyInfo/findStockMsg.do', param).success(function(data) {
                if (isRequestSuccess(data)) {
//                    console.log(data.message);
//                    console.log(data.data);
//                    console.log(data.status);
                    defer.resolve(data);
                    findUserInfo();
                } else {
                    defer.reject();
                }
            });
            return defer.promise;
        };