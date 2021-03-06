define(['angular'], function(angular) {
    'use strict';
    return angular.module('app.route', []).config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/index', {
                templateUrl: '/templates/home/index.html',
                controller: 'IndexCtrl'
            })
            .when('/home', {
                templateUrl: '/templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/foo', {
                templateUrl: '/templates/foo.html'
            })
            .when('/mycenter_home', {
                templateUrl: '/templates/mycenter/mycenter_home.html',
                controller: 'mycenterCtrl'
            })
            .when('/questions', {
                templateUrl: '/templates/mycenter/questions.html'
            })
            .when('/implant', {
                templateUrl: '/templates/mycenter/implant.html'
            })
            .when('/settings', {
                templateUrl: '/templates/mycenter/settings.html'
            })
            .when('/ideas', {
                templateUrl: '/templates/mycenter/ideas.html'
            })
            .when('/system_info', {
                templateUrl: '/templates/mycenter/system_info.html'
            })
            .when('/job', {
                templateUrl: '/templates/mycenter/job.html'
            })
            .when('/job_2', {
                templateUrl: '/templates/mycenter/job_2.html'
            })
            .when('/aboutUs', {
                templateUrl: '/templates/mycenter/aboutUs.html'
            })
            .when('/sets', {
                templateUrl: '/templates/mycenter/sets.html',
                controller:'RecommendCtrl'
            })
            .when('/xiugai_mima', {
                templateUrl: '/templates/mycenter/xiugai_mima.html',
                controller:'ModifypasswordCtrl'
            })
            //我关注的企业列表详情
            .when('/myfocus', {
                templateUrl: '/templates/mycenter/myfocus.html',
                controller: 'myfocusCtrl'
            })
            //修改用户信息
            .when('/xiugai_info', {
                templateUrl: '/templates/mycenter/xiugai_info.html',
                controller: 'reviseUserCtrl'
            })
            .when('/nopromise_details', {
                templateUrl: '/templates/nopromise/nopromise_details.html'
            })
            .when('/nopromise_business', {
                templateUrl: '/templates/nopromise/nopromise_business.html',
                controller: 'nopromisebusinessCtrl'
            })
            .when('/nopromise_inquire', {
                templateUrl: '/templates/nopromise/nopromise_inquire.html'
            })
            .when('/nopromise_all', {
                templateUrl: '/templates/nopromise/nopromise_all.html'
            })
            .when('/search_area', {
                templateUrl: '/templates/search/search_area.html'
            })
            .when('/search_record', {
                templateUrl: '/templates/search/search_record.html'
            })
            .when('/search_people', {
                templateUrl: '/templates/search/search_people.html',
                controller: 'SearchpeopleCtrl'
            })
            .when('/search_business', {
                templateUrl: '/templates/search/search_business.html'
            })
            .when('/prompt', {
                templateUrl: '/templates/search/prompt.html'
            })
            .when('/law_book', {
                templateUrl: '/templates/search/law_book.html'
            })
            .when('/search_shixin', {
                templateUrl: '/templates/search/search_shixin.html'
            })
            .when('/shixin_details', {
                templateUrl: '/templates/search/shixin_details.html',
                controller: 'ShiXinDetailsCtrl'
            })
            .when('/search_first', {
                templateUrl: '/templates/search/search_first.html'
            })
            .when('/search_shixinbs', {
                templateUrl: '/templates/search/search_shixinbs.html'
            })
            .when('/search_nopromise', {
                templateUrl: '/templates/search/search_nopromise.html'
            })
            // 对外投资企业列表
            .when('/investAbroad', {
                templateUrl: '/templates/compinfo/investabroad/investAbroad.html',
                controller: 'queryInvestAbroadCtrl'
            })
            .when('/compadd', {
                templateUrl: '/templates/compinfo/compdet/compadd.html'
            })
            //热门企业
            .when('/hot_business', {
                templateUrl: '/templates/compinfo/compdet/hot_business.html',
                controller: 'HotbusinessCtrl'
            })
            .when('/share', {
                templateUrl: '/templates/compinfo/compdet/share.html'
            })
            .when('/telephone', {
                templateUrl: '/templates/compinfo/compdet/telephone.html'
            })
            //股东信息
            .when('/compdet', {
                templateUrl: '/templates/compinfo/compdet/compdet.html',
                controller: 'compdetCtrl'
            })
            //纠错
            .when('/errorcorrect', {
                templateUrl: '/templates/compinfo/compdet/errorcorrect.html',
                controller: 'ErrorCtrl'
            })
            //主要成员
            .when('/leadpeople', {
                templateUrl: '/templates/compinfo/leadpeople/leadpeople.html',
                controller: 'leadpeopleCtrl'
            })
            //变更信息
            .when('/changeRecord', {
                templateUrl: '/templates/compinfo/changeRecord/changeRecord.html',
                controller: 'changeRecordCtrl'
            })
            //工商信息
            .when('/industryinfo', {
                templateUrl: '/templates/compinfo/compdet/industryinfo.html',
                controller: 'businessInformationCtrl'
            })
            //股东信息
            .when('/shareholderinfo', {
                templateUrl: '/templates/compinfo/shareholderinfo/shareholderinfo.html',
                controller: 'ShareholderCtrl'
            })
            .when('/indana', {
                templateUrl: '/templates/compinfo/indana/indana.html',
                controller: 'columnBarChartController'
            })
            .when('/login', {
                templateUrl: '/templates/loginAndRegister/login.html',
                controller: 'LoginCtrl'
            })
            .when('/register', {
                templateUrl: '/templates/loginAndRegister/register.html',
                controller: 'registerCtrl'
            })
            .when('/retrievepassword', {
                templateUrl: '/templates/loginAndRegister/retrievepassword.html',
                controller: 'RetrievepasswordCtrl'
            })
            .when('/xiugai_password', {
                templateUrl: '/templates/loginAndRegister/xiugai_password.html' 
            })
            .when('/serve_deal', {
                templateUrl: '/templates/loginAndRegister/serve_deal.html' 
            })
            .when('/search_company', {
                templateUrl: '/templates/search/search_company.html',
                controller: ''
            })
            //诉讼列表
            .when('/litiinfo', {
                templateUrl: '/templates/compinfo/litiinfo/litiinfo.html',
                controller: 'LitigationCtrl'
            })
            //诉讼列表详情
            .when('/litiinfod', {
                templateUrl: '/templates/compinfo/litiinfo/litiinfod.html',
                controller: 'LitigationdeCtrl'
            })
            //企业咨询列表
            .when('/corpinfo', {
                templateUrl: '/templates/compinfo/corpinfo/corpinfo.html',
                controller: 'CorpinfoCtrl'
            })
            //企业咨询列表详情
            .when('/corpinfod', {
                templateUrl: '/templates/compinfo/corpinfo/corpinfod.html',
                controller: 'CorpinfodeCtrl'
            })
            //企业年报列表
            .when('/reportdet', {
                templateUrl: '/templates/compinfo/reportdet/reportdet.html',
                controller: 'ReportdetCtrl'
            })
            //年报详情
            .when('/reportdetl', {
                templateUrl: '/templates/compinfo/reportdet/reportdetl.html',
                controller: 'ReportDetlCtrl'
            })
            .when('/shareholderInfoDetail', {
                templateUrl: '/templates/compinfo/shareholderinfo/shareholderinfod.html',
                controller: 'ShareholderDetailCtrl'
            })
            // 年报详细
            .when('/annualReportDetails', {
                templateUrl: '/templates/compinfo/reportdet/reportdetl.html',
                controller: 'findEnterpriseInfoOfAnnualCtrl'
            })
            // 分支机构
            .when('/branchStructure', {
                templateUrl: 'templates/compinfo/branchStructure/branchStructure.html',
                controller: 'findSonEnterpriseInterMsgCtrl'
            })
            // 意见反馈
            .when('/suggestionFeedback', {
                templateUrl: 'templates/mycenter/suggestionFeedback.html',
                controller: 'suggestionFeedbackCtrl'
            })
            // 获取行业接口
            .when('/obtainIndustryInfo', {
                templateUrl: 'templates/compinfo/industry/obtainIndustryInfo.html',
                controller: 'obtainIndustryInfoCtrl'
            }).when('/businessMap', {
                templateUrl: 'templates/compinfo/indana/businessMap.html',
                controller: 'businessMapCtrl'
            })
            .when('/amap', {
                templateUrl: 'templates/common/amap.html',
                controller: 'AMapCtrl'
            })
            // 默认路由-首页
            .otherwise({
                redirectTo: '/index'
            });
    }]);
});
