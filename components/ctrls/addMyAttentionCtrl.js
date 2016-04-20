define(['./mod'], function (mod) {
    'use strict';
mod.controller('addMyAttentionCtrl', ['$scope','$location','addMyAttentionService','$rootScope', function($scope, $location,addMyAttentionService,$rootScope) {
    // 关注企业
    var companyId = 12;
  /*  var accountId = "f271b018c1ad11e5a130eca86ba4ba05";*/
    console.log(123)
    addMyAttentionService.addMyAttention(companyId).then(function(data){
        $scope.addMyAttention = data;
        console.log($scope.addMyAttention);
    })
 }])
});


