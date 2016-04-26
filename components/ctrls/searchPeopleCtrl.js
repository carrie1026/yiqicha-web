define(['./mod'], function(mod) {
    'use strict';
    mod.controller('SearchpeopleCtrl', ['$scope', '$location', 'SearchPeopleService',
        function($scope, $location, SearchPeopleService) {
            var enterpriseCurrentPage = 1;
            var stockMsgPage = 1;
            var rows = 5;

            var loadEnterpriseInfo = function(isPush) {
                SearchPeopleService.findEnterpriseInfo(enterpriseCurrentPage, rows, isPush)
                    .then(function(data) {
                        $scope.enterpriseList = data;
                        console.log($scope.enterpriseList);
                    });
            };

            var loadStockMsg = function(isPush) {
                SearchPeopleService.findStockMsg(stockMsgPage, rows, isPush)
                    .then(function(data) {
                        $scope.stockMsgList = data;
                    });
            };

            var loadOccupation = function(iname) {
                SearchPeopleService.findOccupationList(iname)
                    .then(function(data) {
                        $scope.occupationList = data;
                    });
            };

            $scope.enterpriseLoadMore = function() {
                enterpriseCurrentPage++;
                loadEnterpriseInfo(true);
            };

            $scope.stockMsgLoadMore = function() {
                stockMsgPage++;
                loadStockMsg(true);
            };

            loadEnterpriseInfo(false);
            loadStockMsg(false);
            loadOccupation();

            var search = $location.search();
            switch (search.type) {
                case 'qiye':
                    $('.searcharea_con ul li:eq(0)').click();
                    break;
                case 'faren':
                    $('.searcharea_con ul li:eq(1)').click();
                    break;
                case 'shixin':
                    $('.searcharea_con ul li:eq(2)').click();
                    break;
                default:
            }
        }
    ])
});
