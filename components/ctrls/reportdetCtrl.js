define(['./mod'], function(mod) {
    'use strict';
    mod.controller('ReportdetCtrl', ['$scope', '$location', 'AnnualReportService',
        function($scope, $location, AnnualReportService) {
            // 企业咨询
            var companyId = $location.search().companyId;
            $scope.companyId = companyId;
            AnnualReportService.annualReport(-1, -1, companyId).then(function (data) {
                $scope.reportList = data;
            });
        }
    ])
});
