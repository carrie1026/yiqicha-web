define(['./mod'], function (mod) {
    'use strict';

    mod.controller('suggestionFeedbackCtrl',['$scope','SuggestionFeedbackService',function($scope,SuggestionFeedbackService){

        $scope.mobileNoPlaceholder = "您的联系电话";

    	$scope.submitSuggestion = function(){
    		if($scope.content == undefined || $scope.mobileNo == undefined){
				alert("内容或联系电话不能为空！");
    		}else{
                var phoneNo = $scope.mobileNo.trim();
                var partten = /^1[3,4,5,7,8]\d{9}$/;

                if(partten.test(phoneNo)) {
                    SuggestionFeedbackService.submitSuggestion($scope.content.trim(), phoneNo).then(function(data){
                        $scope.readData = data;
                        // console.log(data.message);
                        $scope.content = "";
                        $scope.mobileNo = "";
                        $scope.mobileNoPlaceholder = "您的联系电话";
                        alert(data.message);
                    });
                }else{
                    $scope.mobileNo = "";
                    $scope.mobileNoPlaceholder = "请输入正确的手机号码";
                }
    		}
    	}
    }]);
});
