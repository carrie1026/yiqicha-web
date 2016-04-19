define(['./mod'], function (mod) {
    'use strict';
mod.controller('leadpeopleCtrl', ['$scope','$location', 'leadpeopleService','$rootScope', function($scope, $location, leadpeopleService,$rootScope) {
    // 企业信息
    var companyId
    leadpeopleService.leadpeople(companyId).then(function(data){
        $scope.leadpeople = data;
        console.log($scope.leadpeople);
    })
 }])
});
