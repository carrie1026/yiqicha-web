define(['./mod'], function (mod) {
    'use strict';
mod.controller('ReportdetCtrl', ['$scope','$location', 'ReportdetService','$rootScope', function($scope, $location, ReportdetService,$rootScope) {
    // 企业咨询
    var page = 1;
    var rows = 3;
    var companyId = 12;
    ReportdetService.Reportdet(page,rows,companyId).then(function(data){
        $scope.Reportdet = data.data;
        console.log($scope.Reportdet);
    })
 }])
});
