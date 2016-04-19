define(['./mod'], function (mod) {
    'use strict';
mod.controller('ShareholderCtrl', ['$scope','$location', 'ShareholderService','$rootScope', function($scope, $location, ShareholderService,$rootScope) {
    // 企业信息
    console.log(123);
    ShareholderService.Shareholder($scope).then(function(data){
        $scope.Shareholder = data;
        // console.log($scope.Shareholder);
    })
 }])
});
