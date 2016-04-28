/**
 * 年报服务
 *
 * @author zhanghua on 4/27/16
 */
define(['./mod'], function(mod) {
    mod.factory('AnnualReportService', ['$$http',
        function($$http) {

            // 根据企业id查询年报信息
            this.annualReport = function(page, rows, companyId) {
                return $$http.get(urls.annualReport, {
                    page: page,
                    rows: rows,
                    companyId: companyId
                });
            };

            // 根据年报id查询年报股东信息和企业基本信息
            this.annualReportDetail = function(annualPortsId) {
                return $$http.get(urls.annualReportDetail, {
                    annualPortsId: annualPortsId
                });
            };

            return this;
        }
    ]);

    var urls = {
        annualReport: '/yiqicha/annualPortsMsg/findAnnualPortsMsgByCompanyid.do',
        annualReportDetail: '/yiqicha/annualPortsMsg/findAnnualByAnnualPortsId.do'
    };
});
