define(['./mod'], function (mod) {
    'use strict';
mod.controller('ShareholderCtrl', ['$scope','$location', 'ShareholderService','$rootScope', function($scope, $location, ShareholderService,$rootScope) {
    // 企业信息
    var page = 1;
    var rows = 2;
     console.log(1);
    ShareholderService.Shareholder(page,rows).then(function(data){
        $scope.Shareholder = data;
        console.log($scope.Shareholder);
    })
 }])
});
