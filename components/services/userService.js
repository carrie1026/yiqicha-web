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
    // find Dict by key 验证
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

    var forgetPassword = function(phoneNumber,captcha,newPassword) {
        var defer = $q.defer();
        $http.post('/yiqicha/manager/unLogin/forgetPassword.do', {phoneNumber:phoneNumber,captcha:captcha,newPassword: newPassword}).success(function(data) {
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
//修改密码 服务
.factory('ModifyService', ['$http', '$q', function($http, $q) {
    var ModifyPassword = function(password,newPassword) {
        var defer = $q.defer();
        $http.post('/yiqicha/manager/login/modifyUserPassword.do', {password:password,newPassword:newPassword}).success(function(data) {
            if (isRequestSuccess(data)) {
                defer.resolve(data.data);
            } else {
                defer.reject(data);
            }
        });
        return defer.promise;
    };

    return {
        ModifyPassword: ModifyPassword
    };
}])

//查询诉讼信息 服务
.factory('LitigationService', ['$http', '$q', function($http, $q) {
    var Litigation = function(page,rows, companyId) {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/unLogin/findLawsuitMsg.do',{
           page:page,
           rows:rows,
           companyId: companyId
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
        $http.post('/yiqicha/companyInfo/unLogin/findLawsuitMsgById.do',{id: id}).success(function(data) {
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
        $http.post('/yiqicha/enterpriseNews/unLogin/findEnterpriseNewsList.do',{
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
    var Corpinfode = function(id) {
        var defer = $q.defer();
        $http.post('/yiqicha/enterpriseNews/unLogin/findEnterpriseNewsById.do',{
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

    return {
        Corpinfode: Corpinfode
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
        $http.post('/yiqicha/annualPortsMsg/unLogin/findAnnualPortsMsg.do',{
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
        $http.post('/yiqicha/companyInfo/unLogin/findEnterpriseInfoMsgById.do',{
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
//热门企业 服务
.factory('hotbusinessService', ['$http', '$q', function($http, $q) {
    var hotbusiness = function() {
        var defer = $q.defer();
        $http.post('/yiqicha/companyInfo/unLogin/hotEnterprise.do').success(function(data) {
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
        $http.post('/yiqicha/mainMemberMsg/unLogin/findMainMemberMsg.do',{
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
        $http.post('/yiqicha/editRecordMsg/unLogin/findEditRecord.do',{
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
            $http.post('/yiqicha/sonEnterpriseInterMsg/unLogin/findSonEnterpriseInterMsg.do',{companyId: companyId, page: page, rows: rows}).success(function(data) {
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
            $http.post('/yiqicha/companyInfo/unLogin/findVietinbanhInfoByCompanyId.do',{companyId: companyId}).success(function(data){
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
});
