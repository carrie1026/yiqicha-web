define(['./mod'], function (mod) {
    'use strict';
    mod.controller('queryInvestAbroadCtrl',['$scope','InvestAbroadService','$location', function($scope, InvestAbroadService, $location){
    	var companyId = $location.search().companyId;
    	var page = 1;
    	var rows = 10;
    	InvestAbroadService.quesyInvestAbroad(companyId, page, rows).then(function(data){
    		$scope.investAbroadArray = data.data.rows;
    		console.log(data.data.rows);
    	});
    }]);
});