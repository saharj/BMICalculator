describe('default state', function() {
	it('should navigate to page', function() {
		browser.get('http://127.0.0.1:8080');
		expect(browser.getTitle()).toEqual('BMI');
	});
	xit('metric weight should be selected', function() {
		expect($scope.tabs.weight).toEqual(0);
	});
});
describe('output check', function() {
	it('should return 21.2', function() {
		element(by.model('data.input.metric.weight')).sendKeys(57);
		element(by.model('data.input.metric.height')).sendKeys(164);
		expect(element(by.id('bmi')).getText()).toEqual('21.2');
	});
});