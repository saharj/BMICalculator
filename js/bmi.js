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
  $scope.data = {
      selectedIndex: 0,
      bottom: false
    };

  $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
  };
  $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
  };
  
  

  $scope.calculate = function(){
  	var w = $scope.weight;
  	var h = $scope.heightM;

  	if(!w || !h) {
  		return 0;
  	}

  	if($scope.weightTab === 2) {
  		w = w / 2.2046;
  	}
  	if($scope.heightTab === 4){
  		var inch = $scope.heightI;
  		h = ((h * 12) + inch) * 0.0254;
  	}

    h = Math.pow(h, 2);
    return w / h;
  };

  $scope.showTxt = function() {
	var bmi = $scope.calculate();

	if(bmi < 18.5) {
		return 'Underweight';
	}
	if(bmi >= 18.5 && bmi <=24.9) {
		return 'Normal';
	}
	if(bmi >= 25 && bmi <= 29.9) {
		return 'Overweight';
	}
	if (bmi >= 30) {
		return 'Obese';
	}
	else {
		return 'Input Error!';
	}
  };
});