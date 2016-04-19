define(['./mod'], function (mod) {
    'use strict';
mod.controller('compdetCtrl', ['$scope','$location','compdetService','$rootScope', function($scope, $location,compdetService,$rootScope) {
    // 股东信息
    var page = 1;
    var rows = 1;
    compdetService.compdet(page,rows).then(function(data){
        $scope.compdet = data;
        console.log($scope.compdet);
    })
 }])
});


