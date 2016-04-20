define(['./mod'], function (mod) {
    'use strict';
    // 意见反馈提交接口
	mod.factory('SuggestionFeedbackService',['$http', '$q','$interval', function($http, $q,$interval) {
        var submitSuggestion = function(content, mobileNo){
            var defer = $q.defer();
            $http.post('/yiqicha/ideaTicking/addIdeaTicking.do',{content: content, mobileNo: mobileNo}).success(function(data){
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
            submitSuggestion : submitSuggestion
        };
}])

});