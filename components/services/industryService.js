define(['./mod'], function (mod) {
    'use strict';
    // 获取行业接口
    mod.factory('ObtainIndustryInfoService',['$http', '$q','$interval', function($http, $q,$interval) {
    	var queryIndustryInfo = function(fatherSectorId){
    		var defer = $q.defer();
            $http.post('/yiqicha/industryMsg/unLogin/findIndustryByFatherId.do',{fatherSectorId: fatherSectorId}).success(function(data){
                if (isRequestSuccess(data)) {
                    defer.resolve(data);
                    console.log(data);
                } else {
                    defer.reject(data);
                }
            });
            return defer.promise;
    	}

    	return {
    		queryIndustryInfo : queryIndustryInfo
    	};
    }]);
});