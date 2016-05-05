/**
 * 职业服务
 *
 * @author zhanghua on 4/27/16
 */
define(['./mod'], function(mod) {

    var jobListUrl = '/yiqicha/courtitemMsg/unLogin/findOccupationList.do';

    mod.factory('JobService', ['$$http', function($$http) {

        this.jobList = function(id) {
            return $$http.get(jobListUrl, {id: id});
        };

        return this;
    }]);
});
