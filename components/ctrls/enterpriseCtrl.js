define(['./mod'], function (mod) {
    'use strict';

    mod.controller('findEnterpriseInfoOfAnnualCtrl', ['$scope', 'EnterpriseService','$routeParams', function($scope, EnterpriseService, $routeParams){
    	//var id = $routeParams.id;
    	var companyId = 1;
    	EnterpriseService.readData(companyId).then(function(data){
	        $scope.readData = data;
	        //console.log($scope.readData);
    	});
    }]);

    mod.controller('findSonEnterpriseInterMsgCtrl', ['$scope', 'SonEnterpriseInterMsgService',function($scope, SonEnterpriseInterMsgService){
    	var companyId = null;
    	var page = 1;
    	var rows = 10;
    	SonEnterpriseInterMsgService.readData(companyId,page,rows).then(function(data){
	        $scope.readData = data;
	        //console.log($scope.readData);
    	});
    }]);
});