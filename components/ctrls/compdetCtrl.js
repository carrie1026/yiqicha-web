define(['./mod'], function (mod) {
    'use strict';
mod.controller('compdetCtrl', ['$scope','$location','compdetService','$rootScope', function($scope, $location,compdetService,$rootScope) {

	$scope.isAlreadyFocus = false;
    // 股东信息
    var compdeted = $location.search();
    var id =compdeted.id;
    var companyId = compdeted.id||compdeted.companyId;

    var sts = compdeted.sts;
    if(sts == 1 || sts == "1"){
    	$scope.isAlreadyFocus=true;
    }
    compdetService.compdet(id).then(function(data){
        $scope.compdet = data.data;
        console.log($scope.compdet);
    });

    // 添加关注
    $scope.addMyAttention = function(){
    	compdetService.addMyAttention(companyId).then(function(data){
	    	$scope.isAlreadyFocus = true;
	    	console.log(data);
	    });
    };    

    // 取消关注
    $scope.removeMyAttention = function(){
    	compdetService.removeMyAttention(companyId).then(function(data){
	    	$scope.isAlreadyFocus = false;
	    	console.log(data);
	    });
    };
 }])
});


