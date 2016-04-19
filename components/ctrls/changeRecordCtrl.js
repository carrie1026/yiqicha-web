define(['./mod'], function (mod) {
    'use strict';
mod.controller('changeRecordCtrl', ['$scope','$location', 'changeRecordService','$rootScope', function($scope, $location, changeRecordService,$rootScope) {
    // 企业信息
    var page = 1;
    var rows = 1;
    changeRecordService.changeRecord(page,rows).then(function(data){
        $scope.changeRecord = data;
        console.log($scope.changeRecord);
    })
 }])
});
