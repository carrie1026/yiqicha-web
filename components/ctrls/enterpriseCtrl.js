define(['./mod'], function (mod) {
    'use strict';

    mod.controller('findEnterpriseInfoOfAnnualCtrl', ['$scope', 'EnterpriseInfoOfAnnualService','$routeParams', function($scope, EnterpriseInfoOfAnnualService, $routeParams){
    	//var id = $routeParams.id;
    	var companyId = 12;
    	EnterpriseInfoOfAnnualService.readData(companyId).then(function(data){
	        $scope.readData = data;
	        //console.log($scope.readData);
    	});
    }]);

    mod.controller('findSonEnterpriseInterMsgCtrl', ['$scope', 'SonEnterpriseInterMsgService',function($scope, SonEnterpriseInterMsgService){
    	var companyId = null;
    	var page = 1;
    	var rows = 10;
    	SonEnterpriseInterMsgService.readData(companyId,page,rows).then(function(data){
	        $scope.sonEnterpriseMsgArray = data.data.rows;
            console.log(data.data.rows);
	        //console.log($scope.readData);
    	});
    }]);
});