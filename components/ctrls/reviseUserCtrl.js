define(['./mod'], function (mod) {
    'use strict';
    mod.controller('reviseUserCtrl', ['$scope', '$location', 'reviseUserService', function($scope, $location, reviseUserService) {
        // init registerFormData
            $scope.registerFormData = {};
            $scope.submitBtn = function() {
                if (!$scope.registerFormData.phoneNumber || $scope.registerFormData.phoneNumber.length == 0) {
                    alert('请输入手机号!');
                    return;
                }
                if (!$scope.registerFormData.password || $scope.registerFormData.password.length == 0) {
                    alert('请输入密码!');
                    return;
                }
                $scope.registerFormData.username  = $scope.registerFormData.phoneNumber;
                var promise = reviseUserService.reviseUser($scope.registerFormData);
                promise.then(function(data) {
                    alert('注册成功');
                    $location.path('/login');
                }, function(data) {
                     
                });
            };
      }])
});
