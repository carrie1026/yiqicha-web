/**
 * 年报详情
 *
 * @author zhanghua on 4/27/16
 */
define(['./mod'], function(mod) {

    mod.controller('ReportDetlCtrl', ['$scope', '$location',function($scope, $location) {
        var search = $location.search();

        $scope.$watch('companyBaseShow', function(newValue, oldValue) {
            if (newValue) {
                console.log('load companyBase');
            }
        });
    }]);
});
