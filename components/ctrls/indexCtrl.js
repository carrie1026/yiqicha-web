define(['./mod'], function (mod) {
    'use strict';
mod.controller('indexCtrl', ['$scope','$location', 'myfocusService','$rootScope', function($scope, $location,myfocusService,$rootScope) {
    // 我关注的企业列表详情
    /*var accountId = 'f271b018c1ad11e5a130eca86ba4ba05';*/
    var page = 1;
    var rows = 1;
    var accountId = 1;
    console.log(1);
    myfocusService.myfocus(page,rows,accountId).then(function(data){
        $scope.myfocus = data.data;
        console.log($scope.myfocus);
    });  
 }])
});