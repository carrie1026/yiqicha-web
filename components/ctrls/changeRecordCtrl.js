define(['./mod'], function (mod) {
    'use strict';
mod.controller('changeRecordCtrl', ['$scope','$location', 'changeRecordService','$rootScope', function($scope, $location,changeRecordService,$rootScope){
    // 更改信息
    var changeRecordid = $location.search();
    var companyId = changeRecordid.companyId;
    var page = 1;
    var rows = 1;
    changeRecordService.changeRecord(companyId,page,rows).then(function(data){
        $scope.changeRecord = data.data;
        console.log($scope.changeRecord);  
    })
 }])
});
