define(['./mod'], function (mod) {
    'use strict';
mod.controller('RetrievepasswordCtrl', ['$scope', '$location', 'UserService', '$interval','RetrieveService', function($scope, $location, UserService, $interval,RetrieveService) {

    $scope.retrieveFormData = {};
    $scope.submitBtn = function(newPassword,captcha) {

        if (!$scope.retrieveFormData.phoneNumber) {
            layer.open({content: '请输入手机号码'});
            return;
        }

        if ($scope.retrieveFormData.phoneNumber.length != 11) {
            layer.open({content: '手机号格式有误'});
            return;
        }

        if (!$scope.retrieveFormData.password) {
            layer.open({content: '请输入密码'});
            return;
        }

        if ($scope.retrieveFormData.password.length < 6 || $scope.retrieveFormData.password.length > 20) {
            layer.open({content: '密码为6-20位数字或字母'});
            return;
        }



        // 提交到后台
        RetrieveService.forgetPassword($scope.retrieveFormData.phoneNumber,$scope.retrieveFormData.captcha,$scope.retrieveFormData.password)
            .then(function(data) {
                layer.open({
                    content: '修改成功',
                    style: 'background-color:#fff; color:#999; border:none;',
                    time: 2
                });
                $location.path('/login');
            });

    };
    $scope.repeatMobileCaptchaBtn = function() {
        // console.log('send');
        $scope.retrieveFormData.phoneNumber = $scope.retrieveFormData.username;
        if (!$scope.retrieveFormData.phoneNumber || $scope.retrieveFormData.username.length != 11) {
            alert('手机号码格式不正确!');
            return;
        }

        var isRegister=false;
        var imageCaptcha=null;
        RetrieveService.forgetPasswordSmsCaptcha($scope.retrieveFormData.phoneNumber,imageCaptcha,isRegister)
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
