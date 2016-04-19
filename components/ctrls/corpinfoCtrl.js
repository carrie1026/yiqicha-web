define(['./mod'], function (mod) {
    'use strict';
mod.controller('CorpinfoCtrl', ['$scope','$location', 'CorpinfoService','$rootScope', function($scope, $location, CorpinfoService,$rootScope) {
    // 企业咨询
    var page = 1;
    var rows = 1;
    var companyId = 12;
    CorpinfoService.Corpinfo(companyId,page,rows).then(function(data){
        $scope.Corpinfo = data.data;
        console.log($scope.Corpinfo);
    })
 }])
});
