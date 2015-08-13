describe('default state', function() {
	it('should navigate to page', function() {
		browser.get('/');
		expect(browser.getTitle()).toEqual('BMI');
	});
});