define(['./mod'], function (mod) {
    'use strict';
mod.controller('LoginCtrl', ['$scope','$location', 'UserService','$rootScope', function($scope, $location, UserService,$rootScope) {
    
    $scope.loginFormData = {};
    var isSuccessRedirect = function() {
        var search = $location.search();
        if (search && search.success_redirect) {
            return search.success_redirect;
        }
    };

    // login button
    $scope.submitBtn = function() {
        if (!$scope.loginFormData.username || $scope.loginFormData.username.length != 11) {
            alert('手机号码格式不正确!');
            return;
        }
        if (!$scope.loginFormData.password || $scope.loginFormData.password.length == 0) {
            alert('请输入密码!');
            return;
        }
        var promise = UserService.login( $scope.loginFormData);
        promise.then(function(data) {
            var redirectUrl = isSuccessRedirect();
            if (redirectUrl) {
                $location.path(redirectUrl);
            } else {
                $location.path('/mycenter_home');
                $rootScope.user = data.data;
            }
        }, function(data) {
            // login error
            // alert(data.data.message);
        });
    };
 }])
});
