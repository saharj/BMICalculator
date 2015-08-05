describe('default state', function() {
	it('should navigate to page', function() {
		browser.get('http://127.0.0.1:8080');
		expect(browser.getTitle()).toEqual('BMI');
	});
});

describe('output check', function() {
	it('should return 21.2', function() {
		element(by.model('data.input.metric.weight')).sendKeys(57);
		element(by.model('data.input.metric.height')).sendKeys(164);
		expect(element(by.id('bmi')).getText()).toEqual('21.2');
	});
	it('should return Normal', function() {
		expect(element(by.id('status')).getText()).toEqual('Normal');
	});
});