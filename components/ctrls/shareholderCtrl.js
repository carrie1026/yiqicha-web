define(['./mod'], function (mod) {
    'use strict';
mod.controller('ShareholderCtrl', ['$scope','$location', 'ShareholderService','$rootScope', function($scope, $location, ShareholderService,$rootScope) {
    // 股东信息
    var page = 1;
    var rows = 4;
    ShareholderService.Shareholder(page,rows).then(function(data){
        $scope.Shareholder = data.data;
        console.log($scope.Shareholder);
    })
 }])
});

