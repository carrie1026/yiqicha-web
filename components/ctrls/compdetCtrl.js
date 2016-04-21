define(['./mod'], function (mod) {
    'use strict';
mod.controller('compdetCtrl', ['$scope','$location','compdetService','$rootScope', function($scope, $location,compdetService,$rootScope) {
    // 股东信息
    var id = 2;
    console.log(123);
    compdetService.compdet(id).then(function(data){
        $scope.compdet = data;
        console.log($scope.compdet);
    })
 }])
});


