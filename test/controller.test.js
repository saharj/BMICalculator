var capital = function(name){
	return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
};



describe('capitalize', function(){
	it('capitalize the word', function() {
		var name = "mohsen";
		var result = capital(name);
		expect(result).toBe("Mohsen");
		
	});
	it('does nothing', function(){
		var name = '';
		var result = capital(name);
		expect(result).toBe(result);
	});
	it('captalize the capital word', function(){
		var name = 'SAHAR';
		var result = capital(name);
		expect(result).toBe('Sahar');
	});
});