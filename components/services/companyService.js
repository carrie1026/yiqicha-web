/**
 * 企业服务
 *
 * @author zhanghua on 4/28/16
 */
define(['./mod'], function(mod) {
    'use strict';

    mod.factory('CompanyService', ['$$http', '$q',
        function($$http, $q) {

            this.companyCount = function() {
                var defer = $q.defer();
                defer.resolve(Math.ceil(Math.random() * 1000000000));
                return defer.promise;
            };

            return this;
        }
    ]);
});
