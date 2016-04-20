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
                console.log($scope.reviseUserFormData);
                var promise = reviseUserService.reviseUser($scope.reviseUserFormData);
                promise.then(function(data) {
                    alert('修改成功');
                }, function(data) {
                     
                });
            };
      }])
});
