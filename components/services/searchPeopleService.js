define(['./mod'], function(mod) {
    'use strict';
    mod.factory('SearchPeopleService', ['$$http', '$q', function($$http, $q) {
        // 企业
        var findEnterpriseInfoUrl = '/yiqicha/companyInfo/findEnterpriseInfo.do';
        // 法人/股东
        var findStockMsgUrl = '/yiqicha/companyInfo/findStockMsg.do';
        // 失信
        var findOccupationListUrl = '/yiqicha/courtitemMsg/findOccupationList.do';

        var enterpriseList, stockMsgList;

        this.findEnterpriseInfo = function(page, rows, isPush) {
            var defer = $q.defer();
            $$http.get(findEnterpriseInfoUrl, {
                page: page,
                rows: rows
            }).then(function(data) {
                if (!enterpriseList || !isPush) {
                    enterpriseList = data;
                } else { // push
                    for (var i in data.rows) {
                        enterpriseList.rows.push(data.rows[i]);
                    }
                    enterpriseList.total = data.total;
                }

                // check is can load more data
                enterpriseList.moreDataCanBeLoaded = (data.rows.length == rows);

                defer.resolve(enterpriseList);
            }, function() {
                defer.reject(data);
            });
            return defer.promise;
        };

        this.findStockMsg = function(page, rows, isPush) {
            var defer = $q.defer();
            $$http.get(findStockMsgUrl, {
                page: page,
                rows: rows
            }).then(function(data) {
                if (!stockMsgList || !isPush) {
                    stockMsgList = data;
                } else { // push
                    for (var i in data.rows) {
                        stockMsgList.rows.push(data.rows[i]);
                    }
                    stockMsgList.total = data.total;
                }

                // check is can load more data
                stockMsgList.moreDataCanBeLoaded = (data.rows.length == rows);

                defer.resolve(stockMsgList);
            }, function() {
                defer.reject(data);
            });
            return defer.promise;
        };

        this.findOccupationList = function(iname) {
            var param = {};
            if (iname) {
                param.iname = iname;
            }
            return $$http.get(findOccupationListUrl, param);
        }

        return this;
    }]);
});
