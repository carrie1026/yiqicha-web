define(['./mod'], function (mod) {
    'use strict';
mod.controller('ModifypasswordCtrl', ['$scope', '$location', 'ModifyService', '$interval',function($scope, $location, ModifyService, $interval) {

    $scope.ModifyFormData = {};
    $scope.submitBtn = function(password,newPassword) {
        // 提交到后台
       if (!$scope.ModifyFormData.password || $scope.ModifyFormData.password.length == 0) {
           layer.open({
                content: '请输入密码',
                style: 'background-color:#fff; color:#999; border:none;',
                time: 2
            });
            return;
        }
        if (!$scope.ModifyFormData.newPassword != $scope.ModifyFormData.confirmnewPassword) {
           layer.open({
                content: '请输入密码',
                style: 'background-color:#fff; color:#999; border:none;',
                time: 2
            });
            return;
        }
        ModifyService.ModifyPassword($scope.ModifyFormData.password,$scope.ModifyFormData.newpassword)
            .then(function(data) {
                layer.open({
                    content: '修改成功',
                    style: 'background-color:#fff; color:#999; border:none;',
                    time: 2
                });
                $location.path('/login');
            }, function(data) {
                alert(data.message);
            });

    };
}])
});
