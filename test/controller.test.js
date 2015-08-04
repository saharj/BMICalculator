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
		it('calculate BMI for metric measures', function() {
			$scope.data.input.metric.weight = 57.4;
			$scope.data.input.metric.height = 164.5;
			$scope.$digest();
			expect($scope.data.output.bmi).toBeCloseTo(21.2, 1);
		});
		it('calculate BMI for imperial measures', function() {
			$scope.tabs.height = 1;
			$scope.tabs.weight = 1;
			$scope.data.input.imperial.weight = 245;
			$scope.data.input.imperial.height.foot = 5;
			$scope.data.input.imperial.height.inch = 9;
			$scope.$digest();
			expect($scope.data.output.bmi).toBeCloseTo(36.2, 1);
		});
	});

	describe('getHeigh()', function() {
		it('height for metric value', function() {
			$scope.tabs.height = 0;
			$scope.data.input.metric.height = 170;
			$scope.getHeight();
			expect($scope.getHeight()).toBeCloseTo(2.89);
		});
	});

	describe('checking desired', function() {
		it('calculate metric desired weight with metric height', function() {
			$scope.tabs.height = 0;
			$scope.tabs.weight = 0;
			$scope.data.input.metric.height = 170;
			$scope.data.input.metric.weight = 89;
			$scope.$digest();
			$scope.data.desired.bmi = 21;
			$scope.$digest();
			expect($scope.data.desired.weight).toBeCloseTo(60.7, 1);
		});
		it('calculate metric desired weight with imperial height', function() {
			$scope.tabs.height = 1;
			$scope.tabs.weight = 0;
			$scope.data.input.imperial.height.foot = 5;
			$scope.data.input.imperial.height.inch = 9;
			$scope.data.input.metric.weight = 65;
			$scope.$digest();
			$scope.data.desired.bmi = 20;
			$scope.$digest();
			expect($scope.data.desired.weight).toBeCloseTo(61.4, 1);
		});
		it('calculate imperial desired weight with imperial height', function() {
			$scope.tabs.height = 1;
			$scope.tabs.weight = 1;
			$scope.data.input.imperial.height.foot = 5;
			$scope.data.input.imperial.height.inch = 9;
			$scope.data.input.imperial.weight = 138;
			$scope.$digest();
			$scope.data.desired.bmi = 20;
			$scope.$digest();
			expect($scope.data.desired.weight).toBeCloseTo(135.4, 1);
		});
		it('calculate imperial desired weight with metric height', function() {
			$scope.tabs.height = 0;
			$scope.tabs.weight = 1;
			$scope.data.input.metric.height = 170;
			$scope.data.input.imperial.weight = 138;
			$scope.$digest();
			$scope.data.desired.bmi = 21;
			$scope.$digest();
			expect($scope.data.desired.weight).toBeCloseTo(133.8, 1);
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
