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

	describe('$scope.STATUS', function() {
		it('Underweight should be grey color', function() {
			$scope.data.output.status = 2;
			expect($scope.STATUS[$scope.data.output.status]).toBe('Overweight');
		});
	});
});
