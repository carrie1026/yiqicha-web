/**
 * 企业服务
 *
 * @author zhanghua on 4/28/16
 */
define(['./mod'], function(mod) {
    'use strict';

    var btnStatusUrl = '/yiqicha/companyInfo/selectStatus.do'
    var companyCountUrl = '/yiqicha/companyInfo/countEnterpriseInfo.do';

    mod.factory('CompanyService', ['$$http', '$q',
        function($$http, $q) {

            this.companyCount = function() {
                return $$http.get(companyCountUrl);
            };

            this.btnStatus = function (companyId) {
                return $$http.get(btnStatusUrl, {companyId: companyId});
            };

            return this;
        }
    ]);
});
