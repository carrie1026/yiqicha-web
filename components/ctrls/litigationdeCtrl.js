define(['./mod'], function (mod) {
    'use strict';
mod.controller('LitigationdeCtrl', ['$scope','$location', 'LitigationdeService','$rootScope', function($scope, $location, LitigationdeService,$rootScope) {
    // 企业信息
    var id = 1;
    LitigationdeService.Litigationde(id).then(function(data){
        $scope.litinfodde = data;
        console.log($scope.litinfodde);
    })
 }])
});
