define(['./mod'], function (mod) {
    'use strict';
mod.controller('LitigationCtrl', ['$scope','$location', 'LitigationService','$rootScope', function($scope, $location, LitigationService,$rootScope) {
    // 企业信息
    console.log(123);
    LitigationService.Litigation($scope).then(function(data){
        $scope.Litigation = data;
        console.log( 321);
    })
 }])
});
