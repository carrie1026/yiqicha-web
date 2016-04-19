define(['./mod'], function (mod) {
    'use strict';
mod.controller('CorpinfodeCtrl', ['$scope','$location', 'CorpinfodeService','$rootScope', function($scope, $location, CorpinfodeService,$rootScope) {
    // 企业咨询详情
    var companyId = 1;
    CorpinfodeService.Corpinfode(companyId).then(function(data){
        $scope.Corpinfode = data;
        console.log($scope.Corpinfode);
        console.log(123);
    })
 }])
});
