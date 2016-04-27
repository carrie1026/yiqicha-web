define(['./mod'], function (mod) {
    'use strict';
mod.controller('ReportdetCtrl', ['$scope','$location', 'ReportdetService','$rootScope', function($scope, $location, ReportdetService,$rootScope) {
    // 企业咨询
    var page = 1;
    var rows = 10;
    var companyId = $location.search().companyId;
    ReportdetService.Reportdet(page,rows,companyId).then(function(data){
        $scope.Reportdet = data.data;
    })
 }])
});
