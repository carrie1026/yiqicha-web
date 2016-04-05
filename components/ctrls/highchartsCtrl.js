define(['./mod'], function(mod){

	'use strict';

	mod.controller('columnBarChartController', ['$scope', function ($scope) {
		 $scope.highchartsNG = {
		    options: {
		        chart: {
		            type: 'bar'
		        }
		    },
		   title: {
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
    	}

	}]);

});
