define(['./mod'], function (mod) {
    'use strict';
    mod.controller('ErrorCtrl', ['$scope', '$location', 'ErrorService','$rootScope', function($scope, $location, ErrorService,$rootScope) {
        // init registerFormData
            $scope.ErrorFormData = {};
            $scope.submitBtn = function() {
                console.log($scope.ErrorFormData);
                var promise = ErrorService.Error($scope.ErrorFormData);
                promise.then(function(data) {
                    alert('提交成功');
                }, function(data) {
                     
                });
            };
      }])
});
