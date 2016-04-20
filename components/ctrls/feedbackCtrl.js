define(['./mod'], function (mod) {
    'use strict';

    mod.controller('suggestionFeedbackCtrl',['$scope','SuggestionFeedbackService',function($scope,SuggestionFeedbackService){
    	$scope.submitSuggestion = function(){
    		if($scope.content == undefined || $scope.mobileNo == undefined){
				alert("内容或联系电话不能为空！");
    		}else{
    			SuggestionFeedbackService.submitSuggestion($scope.content, $scope.mobileNo).then(function(data){
			        $scope.readData = data;
			        console.log(data.message);
			        $scope.content = "";
	    			$scope.mobileNo = "";
	    			alert(data.message);
		    	});
    		}
    	}
    }]);

});