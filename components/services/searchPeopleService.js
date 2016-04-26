define(['./mod'], function(mod) {
    'use strict';
    //查询企业列表信息 服务
    mod.factory('SearchpeopleService', ['$http', '$q', function($http, $q) {
            var Searchpeople = function(page, rows) {
                var defer = $q.defer();
                $http.post('/yiqicha/companyInfo/findEnterpriseInfo.do', {
                    page: page,
                    rows: rows
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
        //查询股东信息 服务
        .factory('ShareholderService', ['$http', '$q', function($http, $q) {
            var Shareholder = function(page, rows) {
                var defer = $q.defer();
                $http.post('/yiqicha/companyInfo/findStockMsg.do', {
                    page: page,
                    rows: rows
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
        }]);
    // 获取失信信息
    mod.factory('dishonestyService', ['$http', '$q', '$interval', function($http, $q, $interval) {
        var dishonesty = function(iname) {
            var defer = $q.defer();
            $http.post('/yiqicha/courtitemMsg/findOccupationList.do', {
                iname: iname
            }).success(function(data) {
                if (isRequestSuccess(data)) {
                    defer.resolve(data);
                } else {
                    defer.reject(data);
                }
            });
            return defer.promise;
        }
        return {
            dishonesty: dishonesty
        };
    }]);
});
