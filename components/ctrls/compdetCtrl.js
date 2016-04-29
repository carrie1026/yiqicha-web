define(['./mod'], function(mod) {
    'use strict';
    mod.controller('compdetCtrl', ['$scope', '$location', 'compdetService', '$rootScope', 'UserService', 'CompanyService',
        function($scope, $location, compdetService, $rootScope, UserService, CompanyService) {

            UserService.findUserInfo().then(function(data) { // logined
                $rootScope.userInfo = data;
            });

            $scope.isAlreadyFocus = false;
            // 股东信息
            var compdeted = $location.search();
            var id = compdeted.id;
            var companyId = compdeted.id || compdeted.companyId;
            $scope.companyId = id;

            compdetService.compdet(id).then(function(data) {
                $scope.compdet = data.data;

                $scope.industry = data.data.industry;
            });

            // 添加关注
            $scope.addMyAttention = function() {
                if ($rootScope.userInfo) {
                    compdetService.addMyAttention(companyId).then(function(data) {
                        $scope.compdet.sts = 1;
                        $scope.compdet.focus++;
                    });
                } else {
                    var path = $location.path();
                    var search = $location.search();
                    $.extend(search, {
                        success_redirect: path
                    });
                    $location.path('/login').search(search);
                }
            };

            // 取消关注
            $scope.removeMyAttention = function() {
                compdetService.removeMyAttention(companyId).then(function(data) {
                    $scope.compdet.sts = 0;
                    $scope.compdet.focus--;
                });
            };

            CompanyService.btnStatus(id).then(function (data) {
                $scope.bs = data;
            });
        }
    ])
});
