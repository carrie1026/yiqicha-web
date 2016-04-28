define(['./mod'], function(mod) {
    'use strict';
    mod.controller('leadpeopleCtrl', ['$scope', '$location', 'leadpeopleService', '$rootScope', function($scope, $location, leadpeopleService, $rootScope) {
        // 企业信息
        var leadpeopleed = $location.search();
        var companyId = leadpeopleed.companyId;
        leadpeopleService.leadpeople(companyId, -1, -1).then(function(data) {
            $scope.leadpeople = data.data;
            console.log($scope.leadpeople);
        })
    }])
});
