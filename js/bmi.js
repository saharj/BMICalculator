'use strict';
var app = angular.module('BMI', ['ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal', {
      'default': '800', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '500', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': 'A700', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('orange', {
      'default': '500' // use shade 200 for default, and keep all other shades the same
    });
 });

app.controller('BMICtrl', function($scope){
  
  $scope.tabs = {
  	weight: 0,
  	height: 0
   };

  $scope.data = {
  	input: {
  		metric: {
  			weight: '',
  			height: ''
  		},
  		imperial: {
  			weight: '',
  			height: {
  				foot: '',
  				inch: ''
  			}
  		}
  	},
  	output: {
  		bmi: 0,
  		status: 0,
  		show: false
  	},
  	desired: {
  		bmi: 0,
  		weight: 0,
  		weightUnit: 'kg'
  	}
  };

  $scope.STATUS = [
  	'Underweight',
  	'Normal',
  	'Overweight',
  	'Obese',
  	'Morbid Obese'
  ];
  
  $scope.getHeight = function() {
  	var height;
  	if($scope.tabs.height === 0) {
  		height = ($scope.data.input.metric.height) / 100;
  	}
  	else {
  		var foot = $scope.data.input.imperial.height.foot;
  		var inch = $scope.data.input.imperial.height.inch;
  		height = ((foot * 12) + inch) * 0.0254;
  	}
  	height = Math.pow(height, 2);
  	return height;
  };

  $scope.$watch('data.input', function(){
  	var weight;
  	var height = $scope.getHeight();

  	if($scope.tabs.weight === 0) {
  		weight = $scope.data.input.metric.weight;
  	}
  	else {
  		weight = $scope.data.input.imperial.weight;
  		weight = weight / 2.2046;
  	}

  	$scope.data.output.bmi = weight / height;

  	var bmi = $scope.data.output.bmi;
  	$scope.data.desired.bmi = bmi;

  	if(isNaN(bmi) || !Number.isFinite(bmi) || bmi <= 0 || bmi > 100) {
  		$scope.data.output.show = false;
  	} else {
  		$scope.data.output.show = true;
  	}

  	if(bmi < 18.5) {
  		$scope.data.output.status = 0;
  	}
    else if(bmi >= 18.5 && bmi <=24.9) {
		$scope.data.output.status = 1;
    }
    else if(bmi >= 25 && bmi <= 29.9) {
        $scope.data.output.status = 2;
    }
    else if (bmi >= 30 && bmi <= 35) {
        $scope.data.output.status = 3;
    }
    else {
    	$scope.data.output.status = 4;
    }

  }, true);

	$scope.$watch('data.desired.bmi', function(){
		var weight;

		var bmi = $scope.data.desired.bmi;
		var height = $scope.getHeight();
		weight = bmi * height;

		$scope.data.desired.weight = weight;
		
		if($scope.tabs.weight === 0) {
			$scope.data.desired.weightUnit = 'kg';
  		} else {
			$scope.data.desired.weightUnit = 'lbs';
  		}
	});

});