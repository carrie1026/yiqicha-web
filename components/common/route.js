define(['angular'], function (angular) {
    'use strict';
    return angular.module('app.route', []).config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/foo', {
                templateUrl: '/templates/foo.html'
            })
            .when('/mycenter_home', {
                templateUrl: '/templates/mycenter/mycenter_home.html'
            })
             .when('/questions', {
                templateUrl: '/templates/mycenter/questions.html'
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
              .when('/myfocus', {
                templateUrl: '/templates/mycenter/myfocus.html'
            })
              .when('/xiugai_info', {
                templateUrl: '/templates/mycenter/xiugai_info.html'
            })
              .when('/nopromise_details', {
                templateUrl: '/templates/nopromise/nopromise_details.html'
            })
              .when('/nopromise_business', {
                templateUrl: '/templates/nopromise/nopromise_business.html'
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
                templateUrl: '/templates/search/search_people.html'
            })
                 .when('/search_business', {
                templateUrl: '/templates/search/search_business.html'
            })
                 .when('/law_book', {
                templateUrl: '/templates/search/law_book.html'
            })
                 .when('/search_shixin', {
                templateUrl: '/templates/search/search_shixin.html'
				 })

                 .when('/shixin_details', {
                templateUrl: '/templates/search/shixin_details.html'
                 })
                 .when('/search_first', {
                templateUrl: '/templates/search/search_first.html'
                 })
                  .when('/search_shixinbs', {
                templateUrl: '/templates/search/search_shixinbs.html'
                 })
              .when('/index', {
                templateUrl: '/templates/home/index.html'
            })
              .when('/changeRecord', {
                templateUrl: '/templates/compinfo/changeRecord/changeRecord.html'
            })
              .when('/investAbroad', {
                templateUrl: '/templates/compinfo/changeRecord/investAbroad.html'
            })
              .when('/compadd',{
                templateUrl: '/templates/compinfo/compdet/compadd.html'
            })
              .when('/indana',{
                templateUrl: '/templates/compinfo/indana/indana.html',
                controller: 'columnBarChartController'
            })
              .when('/login',{
                templateUrl: '/templates/loginAndRegister/login.html',
                controller: ''
            })
                .when('/register',{
                        templateUrl: '/templates/loginAndRegister/register.html',
                        controller: ''
            })
                .when('/search_company',{
                        templateUrl: '/templates/search/search_company.html',
                        controller: ''
            })
            // 默认路由-首页
            .otherwise({
                redirectTo: '/index'
            });
    }]);
});
