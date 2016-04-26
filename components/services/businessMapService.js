define(['./mod'], function (mod) {
    'use strict';

    mod.factory('BusinessMapService', ['$http', '$q','$interval', function($http, $q,$interval) {
    	var queryBusinessMap = function(companyId){
            var defer = $q.defer();
            $http.post('/yiqicha/companyInfo/findAtlas.do',{companyId: companyId}).success(function(data){
                if (isRequestSuccess(data)) {
                    defer.resolve(data);
                    //console.log(data);
                } else {
                    defer.reject(data);
                }
            });
            return defer.promise;
        };
        return {
            queryBusinessMap : queryBusinessMap
        };

    }]);

});