define(['./mod'], function(mod) {
    'use strict';
    mod.controller('mycenterCtrl', ['$scope', '$location', 'UserService', '$rootScope','hotbusinessService','myfocusService', function($scope, $location, UserService, $rootScope,hotbusinessService,myfocusService) {
        // login button
        $scope.logout = function(request) {
            UserService.logout().then(function(data) {
                alert("成功");
                $location.path('/login');
            }, function(data) {
                alert(data.data.message);
            });
        };
        hotbusinessService.hotbusiness().then(function(data){
            $scope.hotbusiness = data.data;
            console.log($scope.hotbusiness);
        })
        var page = 1;
        var rows = 1;
        var accountId = 1;
        myfocusService.myfocus(page,rows,accountId).then(function(data){
            $scope.myfocus = data.data;
<<<<<<< HEAD
//            console.log($scope.myfocus);
        });  
=======
            console.log($scope.myfocus);
        });

        $scope.$watch('companyName', function(newValue, oldValue) {
            if (!newValue || newValue.length < 2)
                return;

            $location.path('/search_people').search({type: 'qiye', companyName: newValue});
        });
>>>>>>> 902b63dd039baf4a3b9b2948192b5a9fce694ff9
    }])
});
