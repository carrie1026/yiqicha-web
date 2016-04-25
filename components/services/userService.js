/**
 * 用户服务
 * @author zhanghua
 */
define(['./mod'], function (mod) {
    'use strict';
mod.factory('UserService', ['$http', '$q','$interval','$$http', function($http, $q,$interval, $$http) {
        // 注册
        var register = function(param) {
            var defer = $q.defer();
            $http.post('/yiqicha/manager/unLogin/register.do', param).success(function(data) {
                if (isRequestSuccess(data)) {
                    defer.resolve(data);
                    findUserInfo();
                } else {
                    defer.reject();
                }
            });
            return defer.promise;
        };
        // 启动倒计时
        var startCountDown = function($scope) {
            var count = 60
            $scope.countdown = count;
            $interval(function() {
                $scope.countdown--;
            }, 1000, count)
        };
        // 发送短信验证码
        var sendSmsCaptcha = function(phoneNumber,imageCaptcha,isRegister) {
                var defer = $q.defer();
                $http.post('/yiqicha/manager/unLogin/sendSmsCaptcha.do', {
                    phoneNumber: phoneNumber,
                    imageCaptcha:imageCaptcha,
                    isRegister: isRegister
                }).success(function(data) {
                    if (isRequestSuccess(data)) {
                        defer.resolve(data);
                    }
                });
                return defer.promise;
        };
         // 登录
        var login = function(param) {
                var defer = $q.defer();
                $http.post('/yiqicha/manager/unLogin/login.do',param).success(function(data) {
                    if (isRequestSuccess(data)) {
                        defer.resolve(data);
                    } else {
                        defer.reject(data);
                    }
                });
                return defer.promise;
        };
        // 登出
        var logout = function(request) {
            var defer = $q.defer();
            $http.post('/yiqicha/manager/unLogin/logout.do',request).success(function(data) {
                if (isRequestSuccess(data)) {
                    defer.resolve(data);
                    location.reload(); // 登出成功，刷新页面
                }
            });
            return defer.promise;
        };

        var findUserInfo = function() {
            return $$http.get('/yiqicha/manager/findUserInfo.do', {}, true);
        };
        return {
            register: register,
            sendSmsCaptcha:sendSmsCaptcha,
            login:login,
            logout:logout,
            findUserInfo: findUserInfo
        };
    }
])

//忘记密码 服务
.factory('RetrieveService', ['$http', '$q', function($http, $q) {
    // find Dict by key
    var forgetPasswordSmsCaptcha = function(phoneNumber,imageCaptcha,isRegister) {
        var defer = $q.defer();
        $http.post('/yiqicha/manager/unLogin/sendSmsCaptcha.do', {
            phoneNumber: phoneNumber,
            imageCaptcha:imageCaptcha,
            isRegister: isRegister
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data.data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    var forgetPassword = function(newPassword,captcha) {
        var defer = $q.defer();
        $http.post('/yiqicha/manager/unLogin/forgetPassword.do', {newPassword: newPassword, captcha: captcha }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data.data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        forgetPasswordSmsCaptcha: forgetPasswordSmsCaptcha,
        forgetPassword: forgetPassword
    };
}])
//查询企业列表信息 服务
.factory('SearchpeopleService', ['$http', '$q', function($http, $q) {
    var Searchpeople = function(page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/findEnterpriseInfo.do',{
           page:page,
           rows:rows
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        Searchpeople: Searchpeople
    };
}])
//查询诉讼信息 服务
.factory('LitigationService', ['$http', '$q', function($http, $q) {
    var Litigation = function(page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/findLawsuitMsg.do',{
           page:page,
           rows:rows
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        Litigation: Litigation
    };
}])
//查询诉讼详情信息 服务
.factory('LitigationdeService', ['$http', '$q', function($http, $q) {
    var Litigationde = function(id) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/findLawsuitMsgById.do',id).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        Litigationde: Litigationde
    };
}])
//查询企业咨询信息 服务
.factory('CorpinfoService', ['$http', '$q', function($http, $q) {
    var Corpinfo = function(companyId,page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/enterpriseNews/findEnterpriseNewsList.do',{
            companyId:companyId,
            page:page,
            rows:rows
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        Corpinfo: Corpinfo
    };
}])
//查询企业咨询详情信息 服务
.factory('CorpinfodeService', ['$http', '$q', function($http, $q) {
    var Corpinfode = function(companyId,page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/enterpriseNews/findEnterpriseNewsById.do',{
            companyId:companyId,
            page:page,
            rows:rows
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        Corpinfode: Corpinfode
    };
}])
//查询股东信息 服务
.factory('ShareholderService', ['$http', '$q', function($http, $q) {
    var Shareholder = function(page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/findStockMsg.do',{
            page:page,
            rows:rows
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        Shareholder: Shareholder
    };
}])

//纠错提交 服务
.factory('ErrorService', ['$http', '$q', function($http, $q) {
    var Error = function(param) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/addCorrectionManage.do', param).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };
     var Errortype = function(key) {
        var defer = $q.defer();
        $http.post('/yiqicha/manager/unLogin/findTypesByKey.do',{key:key}).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };
    return {
        Error: Error,
        Errortype:Errortype
    };
}])
//查询年报列表信息 服务
.factory('ReportdetService', ['$http', '$q', function($http, $q) {
    var Reportdet = function(page,rows,companyId) {
        var defer = $q.defer();
        $http.post('/yiqicha/annualPortsMsg/findAnnualPortsMsg.do',{
            page:page,
            rows:rows,
            companyId:companyId
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        Reportdet: Reportdet
    };
}])
//查询企业信息 服务
.factory('compdetService', ['$http', '$q', function($http, $q) {
    var compdet = function(id) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/findEnterpriseInfoMsgById.do',{
            id:id
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    var addMyAttention = function(companyId){
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/addMyAttention.do',{
            companyId:companyId
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    var removeMyAttention = function(companyId){
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/removeMyAttention.do',{
            companyId:companyId
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        compdet: compdet,
        addMyAttention: addMyAttention,
        removeMyAttention: removeMyAttention
    };
}])

//关注企业 服务
//.factory('addMyAttentionService', ['$http', '$q', function($http, $q) {
//    var addMyAttention = function(companyId) {
//        var defer = $q.defer();
//        $http.post('/yiqicha/companyInfo/addMyAttention.do',companyId).success(function(data) {
//            if (isRequestSuccess(data)) {
//                defer.resolve(data);
//            } else {
//                defer.reject(data);
//            }
//        });
//        return defer.promise;
//    };
//
//    return {
//        addMyAttention: addMyAttention
//    };
//}])

//取消关注 服务
//.factory('removeMyAttentionService', ['$http', '$q', function($http, $q) {
//    var removeMyAttention = function(companyId) {
//        var defer = $q.defer();
//        $http.post('/yiqicha/companyInfo/removeMyAttention.do',companyId).success(function(data) {
//            if (isRequestSuccess(data)) {
//                defer.resolve(data);
//            } else {
//                defer.reject(data);
//            }
//        });
//        return defer.promise;
//    };
//
//    return {
//        removeMyAttention: removeMyAttention
//    };
//}])

//我关注的企业列表 服务
.factory('myfocusService', ['$http', '$q', function($http, $q) {
    var myfocus = function(page,rows,accountId) {
        var defer = $q.defer();
        $http.post('/yiqicha/myAttenttionMsg/findMyAttenttionMsg.do',{
            page:page,
            rows:rows,
            accountId:accountId
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        myfocus: myfocus
    };
}])
//热门企业 服务
.factory('hotbusinessService', ['$http', '$q', function($http, $q) {
    var hotbusiness = function() {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/hotEnterprise.do').success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        hotbusiness: hotbusiness
    };
}])

//查询主要成员 服务
.factory('leadpeopleService', ['$http', '$q', function($http, $q) {
    var leadpeople = function(companyId,page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/mainMemberMsg/findMainMemberMsg.do',{
            companyId:companyId,
            page:page,
            rows:rows
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        leadpeople: leadpeople
    };
}])

//查询变更记录 服务
.factory('changeRecordService', ['$http', '$q', function($http, $q) {
    var changeRecord = function(companyId,page,rows) {
        var defer = $q.defer();
        $http.post('/yiqicha/editRecordMsg/findEditRecord.do',{
            companyId:companyId,
            page:page,
            rows:rows
        }).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        changeRecord: changeRecord
    };
}])
// 分支机构接口
.factory('SonEnterpriseInterMsgService', ['$http', '$q','$interval', function($http, $q,$interval) {
        var readData = function(companyId, page, rows){
            var defer = $q.defer();
            $http.post('/yiqicha/sonEnterpriseInterMsg/findSonEnterpriseInterMsg.do',{companyId: companyId, page: page, rows: rows}).success(function(data) {
                if (isRequestSuccess(data)) {
                    defer.resolve(data);
                    console.log(data);
                } else {
                    defer.reject(data);
                }
            });
            return defer.promise;
        };

        return {
            readData : readData
        };
}])
// 获取工商信息
mod.factory('businessInformationService',['$http', '$q','$interval', function($http, $q,$interval) {
    	var businessInformation = function(companyId){
    		var defer = $q.defer();
            $http.post('/yiqicha/companyInfo/findVietinbanhInfoByCompanyId.do',{companyId: companyId}).success(function(data){
                if (isRequestSuccess(data)) {
                    defer.resolve(data);
                    console.log(data);
                } else {
                    defer.reject(data);
                }
            });
            return defer.promise;
    	}
    	return {
    		businessInformation : businessInformation
    	};
}]);
// 获取失信信息
mod.factory('dishonestyService',['$http', '$q','$interval', function($http, $q,$interval) {
    	var dishonesty = function(iname){
    		var defer = $q.defer();
            $http.post('/yiqicha/courtitemMsg/findOccupationList.do',{iname: iname}).success(function(data){
                if (isRequestSuccess(data)) {
                    defer.resolve(data);
                } else {
                    defer.reject(data);
                }
            });
            return defer.promise;
    	}
    	return {
    		dishonesty : dishonesty
    	};
}]);
});
