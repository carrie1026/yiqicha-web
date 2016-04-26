define(['./mod'], function (mod) {
    'use strict';

    mod.controller('obtainIndustryInfoCtrl',['$scope', 'ObtainIndustryInfoService', function($scope, ObtainIndustryInfoService){
    	var fatherSectorId = '1';
    	ObtainIndustryInfoService.queryIndustryInfo(fatherSectorId).then(function(data){
	        $scope.industryInfo = data;
    	});
    }])

});
