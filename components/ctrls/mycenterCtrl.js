define(['./mod'], function(mod) {
    'use strict';
    mod.controller('mycenterCtrl', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
        // login button
        $scope.logout = function(request) {
            UserService.logout().then(function(data) {
                layer.open({
                    content: '退出登录',
                    style: 'background-color:#fff; color:#000; border:none;',
                    time: 2
                });
                $location.path('/login');
            }, function(data) {
                alert(data.data.message);
            });
        };
    }])
});
