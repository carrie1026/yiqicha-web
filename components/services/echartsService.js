define(['./mod'], function (mod) {
    'use strict';
    // 获取行业企业总数量接口
    mod.factory('IndustryEnterpriseTotalNumberService',['$http', '$q','$interval', function($http, $q,$interval) {
    	var queryIndustryEnterpriseTotalNumber = function(industryId){
    		var defer = $q.defer();
            console.log(industryId);
            $http.post('/yiqicha/industryMsg/findInDustryListByCreateYear.do',{industryId: industryId}).success(function(data){
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
    		queryIndustryEnterpriseTotalNumber : queryIndustryEnterpriseTotalNumber
    	};
    }])
    // 注册时间分布
    .factory('RegisterTimeDistributeService',['$http', '$q','$interval', function($http, $q,$interval) {
        var queryRegisterTimeDistribute = function(industryId){
            var defer = $q.defer();
            console.log(industryId);
            $http.post('/yiqicha/industryMsg/findInDustryListByCreatTime.do',{industryId: industryId}).success(function(data){
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
            queryRegisterTimeDistribute : queryRegisterTimeDistribute
        };
    }])

    // 企业人员规模分布
    .factory('EnterpriseEmployeeDistributeService',['$http', '$q','$interval', function($http, $q,$interval) {
        var queryEnterpriseEmployeeDistribute = function(industryId){
            var defer = $q.defer();
            console.log(industryId);
            $http.post('/yiqicha/industryMsg/findInDustryListByEmployeeCount.do',{industryId: industryId}).success(function(data){
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
            queryEnterpriseEmployeeDistribute : queryEnterpriseEmployeeDistribute
        };
    }])

    // 企业注册资金分布
    .factory('EnterpriseRegisteredFoundDistributeService',['$http', '$q','$interval', function($http, $q,$interval) {
        var queryEnterpriseRegisteredFoundDistribute = function(industryId){
            var defer = $q.defer();
            console.log(industryId);
            $http.post('/yiqicha/industryMsg/findInDustryListByRegistCapital.do',{industryId: industryId}).success(function(data){
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
            queryEnterpriseRegisteredFoundDistribute : queryEnterpriseRegisteredFoundDistribute
        };
    }])

});