describe('default state', function() {


	it('should navigate to page', function() {
		browser.get('http://127.0.0.1:8080');
		expect(browser.getTitle()).toEqual('BMI');
	});
	xit('metric weight should be selected', function() {

	});
});