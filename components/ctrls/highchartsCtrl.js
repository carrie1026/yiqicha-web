define(['./mod'], function(mod){

	'use strict';

	mod.controller('columnBarChartController', ['$scope', function ($scope) {

		$scope.selectItemIndex = 1;

		$scope.setActiveItemIndex = function(activeItemIndex){
			$scope.selectItemIndex = activeItemIndex;
		};

		$scope.totalNumberOfIndustryChart = {
		    options: {
		        chart: {
		            type: 'bar'
		        }
		    },
		   title: {
		        text: '行业企业总数量'
		    },
		    subtitle:{
		    	text: '电力电子元器件制造'
		    },
		    
		    xAxis: {
		        type: 'category',
		        title: {
		            text: '年份',
		            align: 'middle'
		        },
		       
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: '数量',
		            align: 'middle'
		        },
		        labels: {
		            overflow: 'justify'
		        }
		    },
		    tooltip: {
		        valueSuffix: ' millions'
		    },
		    plotOptions: {
	            bar: {
	                dataLabels: {
	                    enabled: true
	                }
	            }
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'top',
	            x: -40,
	            y: 80,
	            floating: true,
	            borderWidth: 1,
	            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
	            shadow: true
	        },
	        credits: {
	            enabled: false
	        },
	        series: [{
	            name: '年份/数量',
	            data: [
	                ['2006', 2300],
	                ['2007', 2700],
	                ['2008', 2800],
	                ['2009', 3300],
	                ['2010', 3800],
	                ['2011', 4300],
	                ['2012', 4800],
	                ['2013', 5200],
	                ['2014', 5800]
	            ],
	            dataLabels: {
	                enabled: false,
	                rotation: -90,
	                color: '#FFFFFF',
	                align: 'right',
	                style: {
	                    fontSize: '13px',
	                    fontFamily: 'Verdana, sans-serif'
	                }
	            }
	        }]
    	};

		$scope.numberOfEnterpriseForYearsChart = {
		    options: {
		        chart: {
		            type: 'bar'
		        }
		    },
		   title: {
		        text: '历年注册企业数量'
		    },
		    subtitle:{
		    	text: '电力电子元器件制造'
		    },
		    
		    xAxis: {
		        type: 'category',
		        title: {
		            text: '年份',
		            align: 'middle'
		        },
		       
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: '数量',
		            align: 'middle'
		        },
		        labels: {
		            overflow: 'justify'
		        }
		    },
		    tooltip: {
		        valueSuffix: ' millions'
		    },
		    plotOptions: {
	            bar: {
	                dataLabels: {
	                    enabled: true
	                }
	            }
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'top',
	            x: -40,
	            y: 80,
	            floating: true,
	            borderWidth: 1,
	            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
	            shadow: true
	        },
	        credits: {
	            enabled: false
	        },
	        series: [{
	            name: '年份/数量',
	            data: [
	                ['2006', 2300],
	                ['2007', 2500],
	                ['2008', 2700],
	                ['2009', 3000],
	                ['2010', 3300],
	                ['2011', 4000],
	                ['2012', 4200],
	                ['2013', 5000],
	                ['2014', 5500]
	            ],
	            dataLabels: {
	                enabled: false,
	                rotation: -90,
	                color: '#FFFFFF',
	                align: 'right',
	                style: {
	                    fontSize: '13px',
	                    fontFamily: 'Verdana, sans-serif'
	                }
	            }
	        }]
    	};

    	$scope.registerTimeDistributeChart = {
    		options: {
		        chart: {
	                plotBackgroundColor: null,
	                plotBorderWidth: null,
	                plotShadow: false,
	                type: 'pie'
	            },
		    },
            title: {
                text: '注册时间分布'
            },
            subtitle:{
		    	text: '电力电子元器件制造'
		    },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            series: [{
                name: '注册时间分布',
                colorByPoint: true,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                     enabled: true,
                	 format: '{point.name}: {point.y:.1f}%'
                },
                showInLegend: true,
                
                data: [{
                    name: '0 - 50 人',
                    y: 0.2
                },{
                    name: '50 - 100 人',
                    y: 0.91
                },{
                    name: '100 - 200 人',
                    y: 56.33
                }, {
                    name: '200 - 300 人',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: '300 - 400 人',
                    y: 10.38
                }, {
                    name: '400 - 500 人',
                    y: 4.77
                }]
            }]
    	};

    	$scope.enterpriseEmployeeDistributeChart = {
    		options: {
		        chart: {
	                plotBackgroundColor: null,
	                plotBorderWidth: null,
	                plotShadow: false,
	                type: 'pie'
	            },
		    },
            title: {
                text: '企业人员规模分布'
            },
            subtitle:{
		    	text: '电力电子元器件制造'
		    },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            series: [{
                name: '企业人员规模分布',
                colorByPoint: true,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                     enabled: true,
                	 format: '{point.name}: {point.y:.1f}%'
                },
                showInLegend: true,
                
                data: [{
                    name: '0 - 50 人',
                    y: 0.21
                },{
                    name: '50 - 100 人',
                    y: 0.7
                },{
                    name: '100 - 200 人',
                    y: 60.33
                }, {
                    name: '200 - 300 人',
                    y: 20.03,
                    sliced: true,
                    selected: true
                }, {
                    name: '300 - 400 人',
                    y: 14.38
                }, {
                    name: '400 - 500 人',
                    y: 0.97
                }]
            }]
    	};

    	$scope.enterpriseRegisteredFoundDistributeChart = {
    		options: {
		        chart: {
	                plotBackgroundColor: null,
	                plotBorderWidth: null,
	                plotShadow: false,
	                type: 'pie'
	            },
		    },
            title: {
                text: '企业注册资金分布'
            },
            subtitle:{
		    	text: '电力电子元器件制造'
		    },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            series: [{
                name: '企业注册资金分布',
                colorByPoint: true,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                     enabled: true,
                	 format: '{point.name}: {point.y:.1f}%'
                },
                showInLegend: true,
                
                data: [{
                    name: '0 - 50 人',
                    y: 0.21
                },{
                    name: '50 - 100 人',
                    y: 0.7
                },{
                    name: '100 - 200 人',
                    y: 68.36
                }, {
                    name: '200 - 300 人',
                    y: 12,
                    sliced: true,
                    selected: true
                }, {
                    name: '300 - 400 人',
                    y: 14.38
                }, {
                    name: '400 - 500 人',
                    y: 0.97
                }]
            }]
    	};

    	$scope.enterpriseProductAnalysisChart = {
    		options: {
		        chart: {
	                plotBackgroundColor: null,
	                plotBorderWidth: null,
	                plotShadow: false,
	                type: 'pie'
	            },
		    },
            title: {
                text: '企业产品多样化分析'
            },
            subtitle:{
		    	text: '电力电子元器件制造'
		    },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            series: [{
                name: '企业产品多样化分析',
                colorByPoint: true,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                     enabled: true,
                	 format: '{point.name}: {point.y:.1f}%'
                },
                showInLegend: true,
                
                data: [{
                    name: '0 - 50 人',
                    y: 6.21
                },{
                    name: '50 - 100 人',
                    y: 3.7
                },{
                    name: '100 - 200 人',
                    y: 58.36
                }, {
                    name: '200 - 300 人',
                    y: 12,
                    sliced: true,
                    selected: true
                }, {
                    name: '300 - 400 人',
                    y: 14.38
                }, {
                    name: '400 - 500 人',
                    y: 1.97
                }]
            }]
    	};
	}]);

});
