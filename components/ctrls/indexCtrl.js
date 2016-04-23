define(['./mod'], function (mod) {
    'use strict';
mod.controller('HotbusinessCtrl', ['$scope','$location', 'hotbusinessService','$rootScope', function($scope, $location, hotbusinessService,$rootScope) {
    // 热门企业
    console.log(123);
    hotbusinessService.hotbusiness().then(function(data){
        $scope.hotbusiness = data.data;
        console.log($scope.hotbusiness);
        console.log(123);
    })
 }])
});
