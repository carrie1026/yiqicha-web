define(['./mod'], function (mod) {
    'use strict';
    mod.controller('compdetctrl', ['$scope', function ($scope,$http) {
    	 /*$scope.compdetData = {};
	     var isSuccessRedirect = function() {
	         var search = $location.search();
	         if (search && search.success_redirect) {
	             return search.success_redirect;
	         }*/


	     };
        $http.post('/yiqicha/companyInfo/findStockMsg.do')
        .success(function(data){
        	console.log(data);
        	console.log(message);
        	console.log(status);
        	$scope.names=response.data;});

    }]);
});


