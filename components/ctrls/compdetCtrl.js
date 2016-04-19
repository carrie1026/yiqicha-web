define(['./mod'], function (mod) {
    'use strict';
    mod.controller('compdetCtrl', ['$scope','PdetService', function ($scope,PdetService,$http) {
    	 /*$scope.compdetData = {};
	     var isSuccessRedirect = function() {
	         var search = $location.search();
	         if (search && search.success_redirect) {
	             return search.success_redirect;
	         }
	     };*/
         
        //调用服务层
        $scope.submitBtn = function() {
            var promise = PdetService.compdet($scope.companyId);
            promise.then(function(data) {
                $location.path('/login');
            }, function(data) {
                 
            });
        };

    }]);
});


