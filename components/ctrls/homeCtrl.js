define(['./mod'], function (mod) {
    'use strict';
    mod.controller('HomeCtrl', ['$scope', function ($scope) {
        $scope.hello = "angular";
    }]);
});