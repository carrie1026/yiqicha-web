define(['./mod'], function (mod) {
    'use strict';
    mod.controller('registerCtrl', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
        // init registerFormData
            $scope.registerFormData = {};
            $scope.submitBtn = function() {
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
                UserService.sendSmsCaptcha($scope.registerFormData.phoneNumber,imageCaptcha,isRegister);
            };
      }])
});
