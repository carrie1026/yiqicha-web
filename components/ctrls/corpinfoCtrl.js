define(['./mod'], function(mod) {
    'use strict';
    mod.controller('CorpinfoCtrl', ['$scope', '$location', 'CorpinfoService', '$rootScope', function($scope, $location, CorpinfoService, $rootScope) {
        // 企业咨询
        var page = 1;
        var rows = 10;
        var companyId = $location.search().companyId;
        CorpinfoService.Corpinfo(companyId, page, rows).then(function(data) {
            $scope.Corpinfo = data.data;
        })
    }])
});
