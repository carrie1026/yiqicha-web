define(['./mod'], function (mod) {
    'use strict';
	// 年报详细接口
	mod.factory('EnterpriseInfoOfAnnualService', ['$http', '$q','$interval', function($http, $q,$interval) {
	        var readData = function(companyId) {
	            var defer = $q.defer();
	            $http.post('/yiqicha/annualPortsMsg/findEnterpriseInfoOfAnnual.do',companyId).success(function(data) {
	                if (isRequestSuccess(data)) {
	                    defer.resolve(data);
	                    console.log(data);
	                } else {
	                    defer.reject(data);
	                }
	            });
	            return defer.promise;
	        };

	        return {
	            readData : readData 
	        };
	}])
	// 分支机构接口
	.factory('SonEnterpriseInterMsgService', ['$http', '$q','$interval', function($http, $q,$interval) {
	        var readData = function(companyId, page, rows){
	            var defer = $q.defer();
	            $http.post('/yiqicha/sonEnterpriseInterMsg/findSonEnterpriseInterMsg.do',{companyId: companyId, page: page, rows: rows}).success(function(data) {
	                if (isRequestSuccess(data)) {
	                    defer.resolve(data);
	                    console.log(data);
	                } else {
	                    defer.reject(data);
	                }
	            });
	            return defer.promise;
	        };

	        return {
	            readData : readData 
	        };
	}])

});