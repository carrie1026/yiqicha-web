define(['./mod'], function (mod) {
    'use strict';
mod.controller('RecommendCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.recommend = function(){
       layer.open({
            content: '通过style设置你想要的样式',
            btn: ['OK']
        });
  }
}])
});
