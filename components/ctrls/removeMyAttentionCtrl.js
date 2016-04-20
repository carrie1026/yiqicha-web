define(['./mod'], function (mod) {
    'use strict';
mod.controller('removeMyAttentionCtrl', ['$scope','$location','removeMyAttentionService','$rootScope', function($scope, $location,removeMyAttentionService,$rootScope) {
    // 关注企业
    var companyId = 12;
    /*var accountId = 'f271b018c1ad11e5a130eca86ba4ba05';*/
    removeMyAttentionService.removeMyAttention(companyId).then(function(data){
        $scope.removeMyAttention = data;
        console.log($scope.removeMyAttention);
    })
 }])
});


