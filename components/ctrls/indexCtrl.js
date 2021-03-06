define(['./mod'], function(mod) {
    'use strict';

    var COMPANY_DATA_RELOAD_TIME = 10000;
    var page = 1;
    var rows = 5;
    var CHAR_ARRAY_LENGTH = 8;

    mod.controller('IndexCtrl', ['$scope', '$location', 'hotbusinessService', 'myfocusService', '$interval', '$timeout', 'CompanyService',
        function($scope, $location, hotbusinessService, myfocusService, $interval, $timeout, CompanyService) {
            hotbusinessService.hotbusiness().then(function(data) {
                $scope.hotbusiness = data.data;
//                console.log($scope.hotbusiness);
                $timeout(function() {
                    jQuery(".picMarquee-top").slide({
                        mainCell: ".bd ul",
                        autoPlay: true,
                        effect: "topMarquee",
                        vis: 5,
                        interTime: 50
                    });
                    //                    jQuery(".picMarquee-top").slide({mainCell:".bd ul",effect:"topLoop",autoPlay:true,delayTime:2000});
                }, 100)
            })

            myfocusService.myfocus(page,rows).then(function(data) {
                $scope.myfocus = data;
                $timeout(function() {
                    jQuery(".slideBox").slide({
                        mainCell: ".bd ul",
                        effect: "topLoop",
                        autoPlay: true,
                        delayTime: 2000
                    });
                }, 100);
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
                    $scope.isShowCompanyData = true;
                });
            };

            // refresh company data
            $scope.isShowCompanyData = true;
            var intervaler = $interval(function() {
                $scope.isShowCompanyData = false;
                loadCompanyCount($scope);
            }, COMPANY_DATA_RELOAD_TIME);

            loadCompanyCount();

            // cancel intervaler when ctrl destroy
            $scope.$on("$destroy", function() {
                if (intervaler) {
                    $interval.cancel(intervaler);
                }
            });
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
