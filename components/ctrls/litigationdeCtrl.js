define(['./mod'], function (mod) {
    'use strict';
mod.controller('LitigationdeCtrl', ['$scope','$location', 'LitigationdeService','$rootScope', function($scope, $location, LitigationdeService,$rootScope) {
    // 企业信息
    var id = $location.search().id;
    LitigationdeService.Litigationde(id).then(function(data){
        $scope.litinfodde = data.data;
    })
 }])
});
