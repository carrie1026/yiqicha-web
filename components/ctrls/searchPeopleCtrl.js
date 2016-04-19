define(['./mod'], function (mod) {
    'use strict';
mod.controller('SearchpeopleCtrl', ['$scope','$location', 'SearchpeopleService','$rootScope', function($scope, $location, SearchpeopleService,$rootScope) {
    // 企业信息
    var page = 1;
    var rows = 1;
    SearchpeopleService.Searchpeople(page,rows).then(function(data){
        $scope.Searchpeople = data;
        console.log($scope.Searchpeople);
    })
 }])
});
