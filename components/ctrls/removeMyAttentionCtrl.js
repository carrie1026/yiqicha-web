define(['./mod'], function (mod) {
    'use strict';
mod.controller('removeMyAttentionCtrl', ['$scope','$location','removeMyAttentionService','$rootScope', function($scope, $location,removeMyAttentionService,$rootScope) {
    // 取消关注企业
    var companyId = 12;
    removeMyAttentionService.removeMyAttention(companyId).then(function(data){
        $scope.removeMyAttention = data;
        console.log($scope.removeMyAttention);
    })
 }])
});


