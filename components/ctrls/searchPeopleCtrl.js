define(['./mod'], function (mod) {
    'use strict';
mod.controller('SearchpeopleCtrl', ['$scope','$location', 'SearchpeopleService','$rootScope', function($scope, $location, SearchpeopleService,$rootScope) {
    // 企业信息
    var page = 1;
    var rows = 1;
    var company = "李建";
    SearchpeopleService.Searchpeople(page,rows,company).then(function(data){
        $scope.Searchpeople = data;
        console.log($scope.Searchpeople);
    })
 }])
});
