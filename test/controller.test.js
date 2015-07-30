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


	describe('check $scope.data', function() {
		it('output.show should be false', function() {
			expect($scope.data.output.show).toBe(false);
		});
		it('desire.show should be false', function() {
			expect($scope.data.desired.show).toBe(false);
		});
	})

	describe('the BMI', function() {
		it('BMI for metric measures', function() {
			$scope.data.input.metric.weight = 57.4;
			$scope.data.input.metric.height = 164.5;
			$scope.$digest();
			expect($scope.data.output.bmi).toBeCloseTo(21.2, 1);
		});
	});

	describe('$scope.STATUS', function() {
		it('Overweight should be gold color', function() {
			$scope.data.output.status = 2;
			expect($scope.STATUS[$scope.data.output.status]).toBe('Overweight');
		});
	});
});
