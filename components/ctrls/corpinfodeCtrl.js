define(['./mod'], function(mod) {
    'use strict';
    mod.controller('CorpinfodeCtrl', ['$scope', '$location', 'CorpinfodeService', '$rootScope', function($scope, $location, CorpinfodeService, $rootScope) {
        // 企业咨询详情
        var id = $location.search().id;
        CorpinfodeService.Corpinfode(id).then(function(data) {
            $scope.Corpinfode = data.data;
        })
    }])
});
