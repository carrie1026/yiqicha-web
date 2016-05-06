//我关注的企业列表 服务
define(['./mod'], function(mod) {
    mod.factory('myfocusService', ['$$http', '$q', function($$http, $q) {
        var myfocusList;

        this.myfocus = function(page, rows, isPush) {
            var defer = $q.defer();
            $$http.get('/yiqicha/myAttenttionMsg/findMyAttenttionMsg.do.do', {
                page: page,
                rows: rows
            }, true).then(function(data) {
                if (!myfocusList || !isPush) {
                    myfocusList = data;
                } else { // push
                    for (var i in data.rows) {
                        myfocusList.rows.push(data.rows[i]);
                    }
                    myfocusList.total = data.total;
                }

                // check is can load more data
                myfocusList.moreDataCanBeLoaded = (data.rows.length == rows);

                defer.resolve(myfocusList);
            }, function(data) {
                defer.reject(data);
            });
            return defer.promise;
        };

        return this;
    }])
});
