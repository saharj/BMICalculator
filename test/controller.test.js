describe('BMIcalc', function() {
	var $scope;
	var controller;

	beforeEach(window.angular.mock.module('BMI'));

	beforeEach(function() {
		inject(function(_$rootScope_, $controller) {
            $scope = _$rootScope_.$new();
            controller = $controller("BMICtrl", {$scope: $scope});
        });
	});


	describe('show-value defaults', function() {
		it('output.show should be false', function() {
			expect($scope.data.output.show).toBe(false);
		});
		it('desire.show should be false', function() {
			expect($scope.data.desired.show).toBe(false);
		});
	})

	describe('basic output', function() {
		it('BMI for metric measures', function() {
			$scope.data.input.metric.weight = 57.4;
			$scope.data.input.metric.height = 164.5;
			$scope.$digest();
			expect($scope.data.output.bmi).toBeCloseTo(21.2, 1);
		});
		it('BMI for imperial measures', function(){
			$scope.tabs.height = 1;
			$scope.tabs.weight = 1;
			$scope.data.input.imperial.weight = 245;
			$scope.data.input.imperial.height.foot = 5;
			$scope.data.input.imperial.height.inch = 9;
			$scope.$digest();
			expect($scope.data.output.bmi).toBeCloseTo(36.2, 1);
		});
	});

	describe('status', function() {
		it('Overweight should be gold color', function() {
			$scope.data.input.metric.weight = 70;
			$scope.data.input.metric.height = 164.5;
			$scope.$digest();
			expect($scope.STATUS[$scope.data.output.status]).toBe('Overweight');
		});
	});
});
