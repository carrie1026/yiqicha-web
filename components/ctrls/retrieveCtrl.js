define(['./mod'], function (mod) {
    'use strict';
mod.controller('RetrievepasswordCtrl', ['$scope', '$location', 'UserService', '$interval','RetrieveService', function($scope, $location, UserService, $interval,RetrieveService) {

    $scope.retrieveFormData = {};
    $scope.submitBtn = function() {
        // 提交到后台
        RetrieveService.forgetPassword($scope.retrieveFormData.password, $scope.retrieveFormData.captcha)
            .then(function(data) {
                $location.path('/login');
                alert("成功");
            }, function(data) {
                alert(data.message);
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