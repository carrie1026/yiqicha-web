define(['./mod'], function (mod) {
    'use strict';
mod.controller('leadpeopleCtrl', ['$scope','$location', 'leadpeopleService','$rootScope', function($scope, $location,leadpeopleService,$rootScope) {
    // 企业信息
    var leadpeopleed = $location.search();
    var companyId = leadpeopleed.id;
    var page = 1;
    var rows = 10;
    leadpeopleService.leadpeople(companyId,page,rows).then(function(data){
        $scope.leadpeople = data.data;
        console.log($scope.leadpeople);
    })
 }])
});
