define(['./mod'], function(mod) {
    'use strict';
    mod.factory('SearchPeopleService', ['$$http', '$q', function($$http, $q) {
        // 企业
        var findEnterpriseInfoUrl = '/yiqicha/companyInfo/findEnterpriseInfo.do';
        // 法人/股东
        var findStockMsgUrl = '/yiqicha/companyInfo/findStockMsg.do';
        // 失信
        var findOccupationListUrl = '/yiqicha/courtitemMsg/findOccupationList.do';
        // 根据股东姓名精确查找
        var findStockMsgByNameUrl = '/yiqicha/companyInfo/findStockMsgByName.do';

        var enterpriseList, stockMsgList;

        this.findEnterpriseInfo = function(page, rows, isPush, companyName, address) {
            var defer = $q.defer();
            $$http.get(findEnterpriseInfoUrl, {
                page: page,
                rows: rows,
                companyName: companyName,
                address: address
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
            }, function(data) {
                defer.reject(data);
            });
            return defer.promise;
        };

        this.findStockMsg = function(page, rows, isPush, companyId) {
            var defer = $q.defer();
            var param = {
                page: page,
                rows: rows
            };
            if (companyId) {
                param.companyId = companyId;
            }
            $$http.get(findStockMsgUrl, param).then(function(data) {
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
            }, function(data) {
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

        this.findStockMsgByName = function(name, address) {
            return $$http.get(findStockMsgByNameUrl, {name: name, address: address});
        };

        return this;
    }]);
});
