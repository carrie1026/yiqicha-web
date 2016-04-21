define(['./mod'], function (mod) {
    'use strict';
mod.controller('SearchpeopleCtrl', ['$scope','$location', 'SearchpeopleService','$rootScope','ShareholderService', function($scope, $location, SearchpeopleService,$rootScope,ShareholderService) {
    // 企业信息
    var page = 1;
    var rows = 1;
    var company = "李建";
    SearchpeopleService.Searchpeople(page,rows,company).then(function(data){
        $scope.Searchpeople = data.data;
        console.log($scope.Searchpeople);
    })
    // 股东信息
    var page = 1;
    var rows = 2;
    ShareholderService.Shareholder(page,rows).then(function(data){
        $scope.Shareholder = data.data;
        console.log($scope.Shareholder);
    })
 }])
//mod.controller('ShareholderCtrl', ['$scope','$location', 'ShareholderService','$rootScope', function($scope, $location, ShareholderService,$rootScope) {
//    
//    // 企业信息
//    var page = 1;
//    var rows = 2;
//    ShareholderService.Shareholder(page,rows).then(function(data){
//        $scope.Shareholder = data.data;
//        console.log($scope.Shareholder);
//    })
// }])
});
