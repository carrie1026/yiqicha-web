define(['./mod'], function (mod) {
    'use strict';
mod.controller('changeRecordCtrl', ['$scope','$location', 'changeRecordService','$rootScope', function($scope, $location, changeRecordService,$rootScope) {
    // 变更记录
    var companyId
    changeRecordService.changeRecord(companyId).then(function(data){
        $scope.changeRecord = data;
        console.log($scope.changeRecord);
    })
 }])
});
