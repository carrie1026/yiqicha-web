define(['./mod'], function(mod) {
    'use strict';
    mod.controller('mycenterCtrl', ['$scope', '$location', 'UserService', '$rootScope','hotbusinessService','myfocusService', function($scope, $location, UserService, $rootScope,hotbusinessService,myfocusService) {
        // login button
        $scope.logout = function(request) {
            UserService.logout().then(function(data) {
                alert("成功");
                $location.path('/login');
            }, function(data) {
                alert(data.data.message);
            });
        };
        hotbusinessService.hotbusiness().then(function(data){
        $scope.hotbusiness = data.data;
        })
        var page = 1;
        var rows = 1;
        var accountId = 1;
        myfocusService.myfocus(page,rows,accountId).then(function(data){
            $scope.myfocus = data.data;
            console.log($scope.myfocus);
        });  
    }])
});
