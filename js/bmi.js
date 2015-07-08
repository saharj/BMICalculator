angular.module('BMI', ['ngMaterial']);

$(document).ready(function() {
 
	$('.switch_options').each(function() {
 
        //This object
        var obj = jQuery(this);
 
        var lb = obj.children('.lb'); //cache first element, this is equal to ON
        var kg = obj.children('.kg'); //cache first element, this is equal to OFF
        var ft = obj.children('.ft');
        var cm = obj.children('.cm');
        var input = obj.children('input'); //cache the element where we must set the value
        var input_val = obj.children('input').val(); //cache the element where we must set the value
 
        /* Check selected */
        if( 0 == input_val ){
            lb.addClass('selected');
            ft.addClass('selected');
        }
        else if( 1 == input_val ){
            kg.addClass('selected');
            cm.addClass('selected');
        }
 
        //Action on user's click
        lb.on('click', function(){
            $(kg).removeClass('selected'); //remove "selected" from other elements in this object class(OFF)
            $(this).addClass('selected'); //add "selected" to the element which was just clicked in this object class(ON) 
            $(input).val(1).change(); //Finally change the value to 1
        });

        ft.on('click', function(){
            $(cm).removeClass('selected'); //remove "selected" from other elements in this object class(OFF)
            $(this).addClass('selected'); //add "selected" to the element which was just clicked in this object class(ON) 
            $(input).val(1).change(); //Finally change the value to 1
            $('.first').text('ft');
            $('.height_s').removeClass('hide');
            $('.second').removeClass('hide');
        });
 
        //Action on user's click
        kg.on('click', function(){
            $(lb).removeClass('selected'); //remove "selected" from other elements in this object class(ON)
            $(this).addClass('selected'); //add "selected" to the element which was just clicked in this object class(OFF) 
            $(input).val(0).change(); // //Finally change the value to 0
        });

        cm.on('click', function(){
            $(ft).removeClass('selected'); //remove "selected" from other elements in this object class(OFF)
            $(this).addClass('selected'); //add "selected" to the element which was just clicked in this object class(ON) 
            $(input).val(1).change(); //Finally change the value to 1
            $('.first').text('cm');
            $('.height_s').addClass('hide');
            $('.second').addClass('hide');
        });
 
    });

});

var getData = function() {
	var weight;
	var height;

	weight = $('.weight').text();
	height = $('.height_f').text();

	if($('.first').text() === ft) {
		var inch = $('.height_s').text();

		height = (height * 12) + inch;
	}

	return height;
};

var bmiCalc = function(h, w) {
	var height;
	var bmi;

	height = Math.pow(h, 2);
	bmi = w / height;

	return bmi;
};

var status = function(bmi) {
	var statShow = $('.status');
	
	if(bmi < 18.5) {
		statShow.text('Underweight');
	}
	if(bmi >= 18.5 && bmi <=24.9) {
		statShow.text('Normal');
	}
	if(bmi >= 25 && bmi <= 29.9) {
		statShow.text('Overweight');
	}
	else {
		statShow.text('Obese');
	}
};
