define(['./mod'], function (mod) {
    'use strict';
mod.controller('SearchpeopleCtrl', ['$scope','$location', 'SearchpeopleService','$rootScope', function($scope, $location, SearchpeopleService,$rootScope) {
    // 企业信息
    console.log(123);
    SearchpeopleService.Searchpeople().then(function(data){
        $scope.Searchpeople = data;
        console.log($scope.Searchpeople);
    })
 }])
});
