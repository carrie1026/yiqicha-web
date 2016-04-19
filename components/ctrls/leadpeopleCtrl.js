define(['./mod'], function (mod) {
    'use strict';
mod.controller('leadpeopleCtrl', ['$scope','$location', 'leadpeopleService','$rootScope', function($scope, $location,leadpeopleService,$rootScope) {
    // 企业信息
    var companyId = 12;
    var page = 1;
    var rows = 10;
    console.log(123)
    leadpeopleService.leadpeople(companyId,page,rows).then(function(data){
        $scope.leadpeople = data;
        console.log($scope.leadpeople);
    })
 }])
});
