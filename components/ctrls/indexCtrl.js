define(['./mod'], function(mod) {
    'use strict';

    var COMPANY_DATA_RELOAD_TIME = 3000;
    var MY_FORCE_PAGE = 1;
    var MY_FORCE_ROWS = 3;
    var CHAR_ARRAY_LENGTH = 9;

    mod.controller('IndexCtrl', ['$scope', '$location', 'hotbusinessService', 'myfocusService', '$interval', '$timeout', 'CompanyService',
        function($scope, $location, hotbusinessService, myfocusService, $interval, $timeout, CompanyService) {
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

            var loadCompanyCount = function() {
                CompanyService.companyCount().then(function(data) {
                    $scope.companyCount = toCharArrray(data);
                    $timeout(function(){
                        $scope.isShowCompanyData = true;
                    }, 10)
                });
            };

            // refresh company data
            $scope.isShowCompanyData = true;
            $interval(function() {
                $scope.isShowCompanyData = false;
                loadCompanyCount($scope);
            }, COMPANY_DATA_RELOAD_TIME);

            loadCompanyCount();
        }
    ]);

    // array length is CHAR_ARRAY_LENGTH
    // if str.length < CHAR_ARRAY_LENGTH, use 0 cover
    var toCharArrray = function(str) {
        str = new String(str);
        var array = [];
        var strLength = str.length;

        for (var i = 0; i < CHAR_ARRAY_LENGTH; i++) {
            if (i < (CHAR_ARRAY_LENGTH - strLength)) {
                array.push(0);
            } else {
                array.push(str.charAt((strLength - CHAR_ARRAY_LENGTH) + i));
            }
        }
        return array;
    };
});
