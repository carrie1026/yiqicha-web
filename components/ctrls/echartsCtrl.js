define(['./mod'], function(mod){

	'use strict';

	mod.controller('columnBarChartController', ['$scope', '$location', 'IndustryEnterpriseTotalNumberService' ,'RegisterTimeDistributeService', 'EnterpriseEmployeeDistributeService', 'EnterpriseRegisteredFoundDistributeService', 
		function ($scope, $location, IndustryEnterpriseTotalNumberService, RegisterTimeDistributeService, EnterpriseEmployeeDistributeService, EnterpriseRegisteredFoundDistributeService) {
		var requestParam = $location.search();

		var setChart = function(index){
			var industryAnalysisChart = echarts.init(document.getElementById('industryAnalysisChart'));
			if(index == 1){
				
				IndustryEnterpriseTotalNumberService.queryIndustryEnterpriseTotalNumber(requestParam.industry).then(function(data){
					//console.log(data);
					var rows = data.data;
					var types = [], values = [];
					$.each(rows, function(index, value){
						types.push(value.year);
						values.push({value: value.count, name: value.year});
					});
					
					var getTotalNumberOfIndustryData = function(){
						
						return {

						    title : {
						        text: '行业企业总数量(年份/总数量)',
						        subtext: requestParam.industry,
						        x:'center'
						    },
						    tooltip : {
						        trigger: 'axis'
						    },

						    toolbox: {
						        show : true,
						        feature : {
						           // mark : {show: true},
						            dataView : {show: true, readOnly: false},
						            //magicType: {show: true, type: ['line', 'bar']},
						           // restore : {show: true},
						           // saveAsImage : {show: true}
						        }
						    },
						    calculable : true,
						    xAxis : [
						        {
						            type : 'value',
						        }
						    ],
						    yAxis : [
						        {
						            type : 'category',
						            data : types
						        }
						    ],
						    series : [
						        {
						            type:'bar',
						            data:values
						        },
						      
						    ]
						};    
					};
					industryAnalysisChart.setOption(getTotalNumberOfIndustryData());
				});
			}else if(index == 2){

				RegisterTimeDistributeService.queryRegisterTimeDistribute(requestParam.industry).then(function(data){
					//console.log(data);
					var rows = data.data.rows;
					var types = [], values = [];
					$.each(rows, function(index, value){
						types.push(value.key);
						values.push({value: value.count, name: value.key});
					});
					var getRegisterTimeDistributeData = function(){
						return {
						    title : {
						        text: '注册时间分布(年份区间/总数量)',
						        subtext: requestParam.industry,
						        x:'center'
						    },
						    tooltip : {
						        trigger: 'item',
						        formatter: "{a} <br/>{b} : {c} ({d}%)"
						    },
						    legend: {
						        orient : 'vertical',
						        x : 'left',
						        data: types
						    },
						    toolbox: {
						        show : true,
						        feature : {
						            //mark : {show: true},
						           dataView : {show: true, readOnly: false},
						           
						           // restore : {show: true},
						          //  saveAsImage : {show: true}
						        }
						    },
						    calculable : true,
						    series : [
						        {
						 			name:'注册时间分布',
						            type:'pie',
						            radius : '55%',
						            center: ['50%', '60%'],
						            data: values
						        }
						    ]
						};
					};
					industryAnalysisChart.setOption(getRegisterTimeDistributeData());
				});
			}else if(index == 3){
				console.log(requestParam.industry);
				EnterpriseEmployeeDistributeService.queryEnterpriseEmployeeDistribute(requestParam.industry).then(function(data){
					//console.log(data);
					var rows = data.data.rows;
					var types = [], values = [];
					$.each(rows, function(index, value){
						types.push(value.key);
						values.push({value: value.count, name: value.key});
					});
					var getEnterpriseEmployeeDistributeData = function(){
						return {
						    title : {
						        text: '企业人员规模分布(规模/总数量)',
						        subtext: requestParam.industry,
						        x:'center'
						    },
						    tooltip : {
						        trigger: 'item',
						        formatter: "{a} <br/>{b} : {c} ({d}%)"
						    },
						    legend: {
						        orient : 'vertical',
						        x : 'left',
						        data:types
						    },
						    toolbox: {
						        show : true,
						        feature : {
						            //mark : {show: true},
						           dataView : {show: true, readOnly: false},
						           
						           // restore : {show: true},
						          //  saveAsImage : {show: true}
						        }
						    },
						    calculable : true,
						    series : [
						        {
						            name:'企业人员规模分布',
						            type:'pie',
						            radius : '55%',
						            center: ['50%', '60%'],
						            data: values
						        }
						    ]
						};
					};
					industryAnalysisChart.setOption(getEnterpriseEmployeeDistributeData());
				});
			}else{
				EnterpriseRegisteredFoundDistributeService.queryEnterpriseRegisteredFoundDistribute(requestParam.industry).then(function(data){
					//console.log(data);
					var rows = data.data.rows;
					var types = [], values = [];
					$.each(rows, function(index, value){
						types.push(value.key);
						values.push({value: value.count, name: value.key});
					});
					var getEnterpriseRegisteredFoundDistributeData = function(){
						return {
						    title : {
						        text: '企业注册资金分布(资金规模/总数量)',
						        subtext: requestParam.industry,
						        x:'center'
						    },
						    tooltip : {
						        trigger: 'item',
						        formatter: "{a} <br/>{b} : {c} ({d}%)"
						    },
						    legend: {
						        orient : 'vertical',
						        x : 'left',
						        data:types
						    },
						    toolbox: {
						        show : true,
						        feature : {
						            //mark : {show: true},
						           dataView : {show: true, readOnly: false},
						           
						           // restore : {show: true},
						          //  saveAsImage : {show: true}
						        }
						    },
						    calculable : true,
						    series : [
						        {
						            name:'企业注册资金分布',
						            type:'pie',
						            radius : '55%',
						            center: ['50%', '60%'],
						            data: values
						        }
						    ]
						};
					};
					industryAnalysisChart.setOption(getEnterpriseRegisteredFoundDistributeData());
				});
			}
		};

	
		setChart(1);

		$scope.setActiveItemIndex = function(activeItemIndex){
			setChart(activeItemIndex);
		};
	}]);
});
