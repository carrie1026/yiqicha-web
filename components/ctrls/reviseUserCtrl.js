define(['./mod'], function (mod) {
    'use strict';
    mod.controller('reviseUserCtrl', ['$scope', '$location', 'reviseUserService', function($scope, $location, reviseUserService) {
        // init registerFormData
            $scope.reviseUserFormData = {};
            $scope.submitBtn = function() {
                if (!$scope.reviseUserFormData.name || $scope.reviseUserFormData.name.length == 0) {
                    alert('sb!');
                    return;
                }
                var promise = reviseUserService.reviseUser($scope.registerFormData);
                promise.then(function(data) {
                    alert('注册成功');
                    $location.path('/login');
                }, function(data) {
                     
                });
            };
      }])
});
