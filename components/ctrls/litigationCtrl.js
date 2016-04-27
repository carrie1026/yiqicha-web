define(['./mod'], function (mod) {
    'use strict';
mod.controller('LitigationCtrl', ['$scope','$location', 'LitigationService','$rootScope', function($scope, $location, LitigationService,$rootScope) {
    // 企业信息
    var page = 1;
    var rows = 10;
    var companyId = $location.search().companyId;
    LitigationService.Litigation(page,rows, companyId).then(function(data){
        $scope.litinfod = data.data;
        console.log($scope.litinfod);
    })
 }])
});
