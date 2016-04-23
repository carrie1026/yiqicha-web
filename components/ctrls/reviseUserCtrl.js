define(['./mod'], function (mod) {
    'use strict';
    mod.controller('reviseUserCtrl', ['$scope', '$location', 'reviseUserService','$rootScope', function($scope, $location, reviseUserService,$rootScope) {
        // init registerFormData
            $scope.reviseUserFormData = {};
            $scope.submitBtn = function() {
                if (!$scope.reviseUserFormData.name || $scope.reviseUserFormData.name.length == 0) {
                    alert('内容为空!');
                    return;
                }
                console.log($scope.reviseUserFormData);
                var promise = reviseUserService.reviseUser($scope.reviseUserFormData);
                promise.then(function(data) {
                    alert('修改成功');
                    $location.path('/mycenter_home');
                }, function(data) {
                     
                });
            };
            //信息
            console.log($rootScope.user);
      }])
});
