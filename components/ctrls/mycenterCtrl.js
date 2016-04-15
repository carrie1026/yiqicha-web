define(['./mod'], function (mod) {
    'use strict';
    mod.controller('mycenterCtrl', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {

    // login button
    $scope.logout = function(request) {
    UserService.logout().then(function(data) {
         alert("成功");
        }, function(data) {
            alert(data.data.message);
        });
    };
 }])
});
