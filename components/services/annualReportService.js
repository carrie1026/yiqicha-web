/**
 * 年报服务
 *
 * @author zhanghua on 4/27/16
 */
define(['./mod'], function(mod) {
    mod.factory('AnnualReportService', ['$$http', 'compdetService', 'SearchPeopleService', 'InvestAbroadService', 'changeRecordService',
        function($$http, compdetService, SearchPeopleService, InvestAbroadService, changeRecordService) {
            // 企业基本信息
            this.companyBase = function(id) {
                return compdetService.compdet(id);
            };

            // 网站或网店信息
            this.website = function() {
                // TODO wait interface
            };

            // 股东信息
            this.shareHolder = function(page, rows, isPush, companyId) {
                return SearchPeopleService.findStockMsg(page, rows, isPush, companyId);
            };

            // 对外投资
            this.invest = function(companyId, page, rows) {
                return InvestAbroadService.quesyInvestAbroad(companyId, page, rows);
            };

            // 企业资产状况信息
            this.assets = function() {
                // TODO wait interface
            };

            // 对外提供保证担保信息
            this.promise = function() {
                // TODO wait interface
            };

            // 股权变更信息
            this.shareModifyHistory = function() {
                // TODO wait interface
            };

            // 修改记录
            this.modifyHistory = function(companyId, page, rows) {
                return changeRecordService.changeRecord(companyId, page, rows);
            };

            return this;
        }
    ]);

    var urls = {
        companyBase: 'companyInfo/login/findEnterpriseInfoMsgById.do',
        website: '',
        shareHolder: 'companyInfo/findStockMsg.do',
        invest: 'companyInfo/findAbroadInvestment.do',
        assets: '',
        promise: '',
        shareModifyHistory: '',
        modifyHistory: 'editRecordMsg/findEditRecord.do'
    };
});
