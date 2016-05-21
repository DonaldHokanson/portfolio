var main = function(){

/* .about */
	$('.about').mouseenter(function(){
		$(this).stop(true,true).animate({ "right":"+=10px", "bottom":"+=10px", "opacity":".75"}, 300);
	});
	$('.about').mouseleave(function(){
		$(this).stop(true,true).animate({ "right":"-=10px", "bottom":"-=10px", "opacity":"1"}, 400)
	});

/* .projects */
	$('.projects').mouseenter(function(){
		$(this).stop(true,true).animate({ "left":"+=10px", "bottom":"+=10px", "opacity":".75"}, 300);

	});
	$('.projects').mouseleave(function(){
		$(this).stop(true,true).animate({ "left":"-=10px", "bottom":"-=10px", "opacity":"1"}, 400)
	});

/* .resume */
	$('.resume').mouseenter(function(){
		$(this).stop(true,true).animate({ "right":"+=10px", "top":"+=10px", "opacity":".75"}, 300);

	});
	$('.resume').mouseleave(function(){
		$(this).stop(true,true).animate({ "right":"-=10px", "top":"-=10px", "opacity":"1"}, 400)
	});

/* .contact */
	$('.contact').mouseenter(function(){
		$(this).stop(true,true).animate({ "left":"+=10px", "top":"+=10px", "opacity":".75"}, 300);

	});
	$('.contact').mouseleave(function(){
		$(this).stop(true,true).animate({ "left":"-=10px", "top":"-=10px", "opacity":"1"}, 400)
	});

















};

$(document).ready(main)