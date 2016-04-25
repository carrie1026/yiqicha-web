define(['./mod'], function(mod){

	'use strict';

	mod.controller('columnBarChartController', ['$scope' ,function ($scope) {

		var setChart = function(index){
			var industryAnalysisChart = echarts.init(document.getElementById('industryAnalysisChart'));
			if(index == 1){
				var getTotalNumberOfIndustryData = function(){
					return {
					    title : {
					        text: '行业企业总数量(年份/总数量)',
					        subtext: '电力电子元器件制造',
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
					            data : ['2014','2013','2012','2011','2010','2009','2008','2007','2006']
					        }
					    ],
					    series : [
					        {
					            type:'bar',
					            data:[5500,5000,3900,3500,3300,2800,2600,2300,2100]
					        },
					      
					    ]
					};    
				};
				industryAnalysisChart.setOption(getTotalNumberOfIndustryData());
			}else if(index == 2){
				var getRegisterTimeDistributeData = function(){
					return {
					    title : {
					        text: '注册时间分布',
					        subtext: '电力电子元器件制造',
					        x:'center'
					    },
					    tooltip : {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					        orient : 'vertical',
					        x : 'left',
					        data:['0-100人','100-200人','200-300人','300-400人','400-500人']
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
					            data:[
					                {value:533, name:'0-100人'},
					                {value:510, name:'100-200人'},
					                {value:633, name:'200-300人'},
					                {value:753, name:'300-400人'},
					                {value:855, name:'400-500人'}
					            ]
					        }
					    ]
					};
				};
				industryAnalysisChart.setOption(getRegisterTimeDistributeData());
			}else if(index == 3){
				var getEnterpriseEmployeeDistributeData = function(){
					return {
					    title : {
					        text: '企业人员规模分布',
					        subtext: '电力电子元器件制造',
					        x:'center'
					    },
					    tooltip : {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					        orient : 'vertical',
					        x : 'left',
					        data:['0-100人','100-200人','200-300人','300-400人','400-500人']
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
					            data:[
					                {value:535, name:'0-100人'},
					                {value:580, name:'100-200人'},
					                {value:733, name:'200-300人'},
					                {value:773, name:'300-400人'},
					                {value:855, name:'400-500人'}
					            ]
					        }
					    ]
					};
				};
				industryAnalysisChart.setOption(getEnterpriseEmployeeDistributeData());
			}else{
				var getEnterpriseRegisteredFoundDistributeData = function(){
					return {
					    title : {
					        text: '企业注册资金分布',
					        subtext: '电力电子元器件制造',
					        x:'center'
					    },
					    tooltip : {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					        orient : 'vertical',
					        x : 'left',
					        data:['0-100人','100-200人','200-300人','300-400人','400-500人']
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
					            data:[
					                {value:335, name:'0-100人'},
					                {value:420, name:'100-200人'},
					                {value:533, name:'200-300人'},
					                {value:673, name:'300-400人'},
					                {value:755, name:'400-500人'}
					            ]
					        }
					    ]
					};
				};
				industryAnalysisChart.setOption(getEnterpriseRegisteredFoundDistributeData());
			}
		};

	
		setChart(1);

		$scope.setActiveItemIndex = function(activeItemIndex){
			setChart(activeItemIndex);
		};
	}]);
});
