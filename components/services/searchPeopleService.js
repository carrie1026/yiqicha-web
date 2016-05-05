define(['./mod'], function(mod) {
    'use strict';
    mod.factory('SearchPeopleService', ['$$http', '$q', function($$http, $q) {
        // 企业
        var findEnterpriseInfoUrl = '/yiqicha/companyInfo/findEnterpriseInfo.do';
        // 法人/股东
        var findStockMsgUrl = '/yiqicha/companyInfo/unLogin/findStockMsg.do';
        // 失信
        var findOccupationListUrl = '/yiqicha/courtitemMsg/unLogin/findOccupationList.do';
        // 根据股东姓名精确查找
        var findStockMsgByNameUrl = '/yiqicha/companyInfo/unLogin/findStockMsgByName.do';

        var enterpriseList, stockMsgList, farenList, shixinList;

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
            $$http.get(findStockMsgUrl, {
                page: page,
                rows: rows,
                companyId: companyId
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
            }, function(data) {
                defer.reject(data);
            });
            return defer.promise;
        };

        this.findOccupationList = function(page, rows, isPush, iname, areaname) {
            var defer = $q.defer();
            $$http.get(findOccupationListUrl, {
                page: page,
                rows: rows,
                iname: iname,
                areaname: areaname
            }).then(function(data) {
                if (!shixinList || !isPush) {
                    shixinList = data;
                } else { // push
                    for (var i in data.rows) {
                        shixinList.rows.push(data.rows[i]);
                    }
                    shixinList.total = data.total;
                }

                // check is can load more data
                shixinList.moreDataCanBeLoaded = (data.rows.length == rows);

                defer.resolve(shixinList);
            }, function(data) {
                defer.reject(data);
            });
            return defer.promise;
        }

        this.findStockMsgByName = function(page, rows, isPush, name, address) {
            var defer = $q.defer();
            $$http.get(findStockMsgByNameUrl, {
                page: page,
                rows: rows,
                name: name,
                address: address
            }).then(function(data) {
                if (!farenList || !isPush) {
                    farenList = data;
                } else { // push
                    for (var i in data.rows) {
                        farenList.rows.push(data.rows[i]);
                    }
                    farenList.total = data.total;
                }

                // check is can load more data
                farenList.moreDataCanBeLoaded = (data.rows.length == rows);

                defer.resolve(farenList);
            }, function(data) {
                defer.reject(data);
            });
            return defer.promise;
        };

        return this;
    }]);
});
