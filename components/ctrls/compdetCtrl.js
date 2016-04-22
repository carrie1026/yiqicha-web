define(['./mod'], function (mod) {
    'use strict';
mod.controller('compdetCtrl', ['$scope','$location','compdetService','$rootScope', function($scope, $location,compdetService,$rootScope) {
    // 股东信息
    var compdeted = $location.search();
    var id =compdeted.id;
    compdetService.compdet(id).then(function(data){
        $scope.compdet = data.data;
        console.log($scope.compdet);
    })
 }])
});


