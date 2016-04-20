define(['./mod'], function (mod) {
    'use strict';

    mod.controller('userImageCtrl',['$scope','$rootScope', function($scope, $rootScope){
    	console.log("$rootScope");
    	console.log($rootScope.user);

    	$scope.imageUrl = '/images/morentoux.png';

    	
    }]);

});