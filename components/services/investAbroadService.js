define(['./mod'], function (mod) {
    'use strict';
    // 意见反馈提交接口
	mod.factory('InvestAbroadService',['$http', '$q','$interval', function($http, $q,$interval) {
        var quesyInvestAbroad = function(companyId, page, rows){
            var defer = $q.defer();
            $http.post('/yiqicha/companyInfo/findAbroadInvestment.do',{companyId: companyId, page: page, rows: rows}).success(function(data){
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
            quesyInvestAbroad : quesyInvestAbroad
        };
}])

});