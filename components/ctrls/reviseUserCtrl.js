define(['./mod'], function(mod) {
    'use strict';
    mod.controller('reviseUserCtrl', ['$scope', '$location', 'reviseUserService', '$rootScope', 'UserService', 'JobService',
        function($scope, $location, reviseUserService, $rootScope, UserService, JobService) {
            // init registerFormData
            $scope.reviseUserFormData = {};
            UserService.findUserInfo().then(function(data) {
                $scope.user = data;
                $scope.reviseUserFormData.name = data.name;
                $scope.reviseUserFormData.companyName = data.companyName;
                $scope.reviseUserFormData.job = data.job;
            });

            $scope.loadJob = function() {
                JobService.jobList().then(function(data) {
                    $scope.jobList = data;
                })
            };

            $scope.loadSubJob = function(id) {
                JobService.jobList(id).then(function(data) {
                    $scope.subJobList = data;
                })
            };

            $scope.submitBtn = function() {
                if (!$scope.reviseUserFormData.name || $scope.reviseUserFormData.name.length == 0) {
                    alert('内容为空!');
                    return;
                }
                var promise = reviseUserService.reviseUser($scope.reviseUserFormData);
                promise.then(function(data) {
                    alert('修改成功');
                    $location.path('/mycenter_home');
                }, function(data) {

                });
            };

            $scope.loadJob();
        }
    ])
});
