define(['./mod'], function(mod) {
    'use strict';

    var COMPANY_DATA_RELOAD_TIME = 3000;
    var MY_FORCE_PAGE = 1;
    var MY_FORCE_ROWS = 3;

    mod.controller('IndexCtrl', ['$scope', '$location', 'hotbusinessService', 'myfocusService', '$interval', '$timeout',
        function($scope, $location, hotbusinessService, myfocusService, $interval, $timeout) {
            hotbusinessService.hotbusiness().then(function(data) {
                $scope.hotbusiness = data.data;
                console.log($scope.hotbusiness);
            })

            myfocusService.myfocus(MY_FORCE_PAGE, MY_FORCE_ROWS).then(function(data) {
                $scope.myfocus = data.data;
            });

            $scope.$watch('companyName', function(newValue, oldValue) {
                if (!newValue || newValue.length < 2) {
                    return;
                }
                $location.path('/search_people').search({
                    type: 'qiye',
                    companyName: newValue
                });
            });

            // refresh company data
            $scope.isShowCompanyData = true;
            $interval(function() {
                $scope.isShowCompanyData = false;
                $timeout(function() {
                    $scope.isShowCompanyData = true;
                }, 10);
            }, COMPANY_DATA_RELOAD_TIME);
        }
    ]);
});
