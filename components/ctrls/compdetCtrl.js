define(['./mod'], function (mod) {
    'use strict';
mod.controller('compdetCtrl', ['$scope','$location','compdetService','$rootScope', function($scope, $location,compdetService,$rootScope) {
    // 股东信息
    console.log(123);
    compdetService.compdet($scope).then(function(data){
        $scope.compdet = data;
        console.log( 321);
    })
 }])
});


