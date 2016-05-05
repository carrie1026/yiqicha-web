define(['./mod'], function (mod) {
    'use strict';
    mod.controller('registerCtrl', ['$scope', '$location', 'UserService','$interval', function($scope, $location, UserService,$interval) {
        // init registerFormData
            $scope.registerFormData = {};
            $scope.submitBtn = function() {
                if (!$scope.registerFormData.phoneNumber || $scope.registerFormData.phoneNumber.length == 0) {
                    layer.open({content: '请输入正确的手机号码!'});
                    return;
                }
                if (!$scope.registerFormData.password || $scope.registerFormData.password.length == 0) {
                    layer.open({content: '请输入密码!'});
                    return;
                }
                if ($scope.registerFormData.password.length < 6 ||  $scope.registerFormData.password.length > 20) {
                    layer.open({content: '密码为6-20位数字或字母'});
                    return;
                }
                $scope.registerFormData.username  = $scope.registerFormData.phoneNumber;
                var promise = UserService.register($scope.registerFormData);
                promise.then(function(data) {
                    layer.open({content: '注册成功'});
                    $location.path('/login');
                });
            };
            $scope.sendMobileCaptchaBtn = function() {
                // console.log('send');
                if (!$scope.registerFormData.phoneNumber || $scope.registerFormData.phoneNumber.length != 11) {
                    layer.open({content: '请输入正确的手机号码!'});
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
