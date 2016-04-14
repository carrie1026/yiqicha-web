define(['./mod'], function (mod) {
    'use strict';
    mod.controller('registerCtrl', ['$scope', '$location', 'UserService','$interval', function($scope, $location, UserService,$interval) {
        // init registerFormData
            $scope.registerFormData = {};
            $scope.submitBtn = function() {
                if (!$scope.registerFormData.password || $scope.registerFormData.password.length == 0) {
                    alert('请输入密码!');
                    return;
                }
                $scope.registerFormData.username  = $scope.registerFormData.phoneNumber;
                var promise = UserService.register($scope.registerFormData);
                promise.then(function(data) {
                    $location.path('/login');
                }, function(data) {
                     
                });
            };
            $scope.sendMobileCaptchaBtn = function() {
                // console.log('send');
                if (!$scope.registerFormData.phoneNumber || $scope.registerFormData.phoneNumber.length != 11) {
                    alert('手机号码格式不正确!');
                    return;
                }
                var isRegister=true;
                var imageCaptcha=null;
                UserService.sendSmsCaptcha($scope.registerFormData.phoneNumber,imageCaptcha,isRegister)
                .then(function(data) {
                    // 启动倒计时
                    var count = 60
                    $scope.countdown = count;
                    $interval(function() {
                        $scope.countdown--;
                    }, 1000, count)
                }, function(data) {
                    alert("系统异常");
                });
            };
      }])
});
