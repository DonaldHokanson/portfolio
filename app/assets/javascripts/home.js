var main = function(){


/* .about */
	$('.about').hover(
		function(){
			$('.about p').show();
	}, function(){
			$('.about p').hide();
	});


/* .projects */
	$('.projects').hover(
		function(){
			$('.projects p').show();
	}, function(){
			$('.projects p').hide();
	});


/* .resume */
	$('.resume').hover(
		function(){
			$('.resume p').show();
	}, function(){
			$('.resume p').hide();
	});


/* .contact */
	$('.contact').hover(
		function(){
			$('.contact p').show();
	}, function(){
			$('.contact p').hide();
	});
};

$(document).ready(main)
$(document).on('page:load', main)