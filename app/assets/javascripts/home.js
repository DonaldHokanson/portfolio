var main = function(){
	if(($(window).width())>=768){

/* .about */
	$('.about').hover(function(){
		$(this).fadeTo('fast',1);
		$(this).stop(true,true).animate({ "right":"+=10px", "bottom":"+=10px"}, 300);
	}, function(){
		$(this).stop(true,true).animate({ "right":"-=10px", "bottom":"-=10px", "opacity":"1"}, 400)
	});

	$('.about').click(function(){
		$(this).stop(true,true).animate({ "right":"-=10px", "bottom":"-=10px", "opacity":"1"}, 400)
	});


/* .projects */
	$('.projects').hover(function(){
		$(this).stop(true,true).animate({ "left":"+=10px", "bottom":"+=10px", "opacity":"1.25"}, 300);

	}, function(){
		$(this).stop(true,true).animate({ "left":"-=10px", "bottom":"-=10px", "opacity":"1"}, 400)
	});

	$('.projects').click(function(){
		$(this).stop(true,true).animate({ "left":"-=10px", "bottom":"-=10px", "opacity":"1"}, 400)
	});


/* .resume */
	$('.resume').hover(function(){
		$(this).stop(true,true).animate({ "right":"+=10px", "top":"+=10px", "opacity":"1.25"}, 300);

	}, function(){
		$(this).stop(true,true).animate({ "right":"-=10px", "top":"-=10px", "opacity":"1"}, 400)
	});

	$('.resume').click(function(){
		$(this).stop(true,true).animate({ "right":"-=10px", "top":"-=10px", "opacity":"1"}, 400)
	});		



/* .contact */
	$('.contact').hover(function(){
		$(this).stop(true,true).animate({ "left":"+=10px", "top":"+=10px", "opacity":"1.25"}, 300);

	}, function(){
		$(this).stop(true,true).animate({ "left":"-=10px", "top":"-=10px", "opacity":"1"}, 400)
	});

	$('.contact').click(function(){
		$(this).stop(true,true).animate({ "left":"-=10px", "top":"-=10px", "opacity":"1"}, 400)
	});
};/* end of first argument in the if statement */
};

$(document).ready(main)
$(document).on('page:load', main)