define(['./mod'], function (mod) {
    'use strict';
mod.controller('leadpeopleCtrl', ['$scope','$location', 'leadpeopleService','$rootScope', function($scope, $location, leadpeopleService,$rootScope) {
    // 企业信息
    var page = 1;
    var rows = 1;
    leadpeopleService.leadpeople(page,rows).then(function(data){
        $scope.leadpeople = data;
        console.log($scope.leadpeople);
    })
 }])
});
