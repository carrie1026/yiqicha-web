/**
 * 年报详情
 *
 * @author zhanghua on 4/27/16
 */
define(['./mod'], function(mod) {

    mod.controller('ReportDetlCtrl', ['$scope', '$location', 'AnnualReportService',
        function($scope, $location, AnnualReportService) {
            var search = $location.search();

            $scope.reportName = search.reportName;

            AnnualReportService.annualReportDetail(search.reportId).then(function (data) {
                $scope.companyBase = data.企业基本信息;
                $scope.holder = data.股东信息;

                $scope.companyBase = eval('(' + $scope.companyBase + ')');
                $scope.holder = eval('(' + $scope.holder + ')');
            });
        }
    ]);
});
