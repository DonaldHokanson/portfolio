var main = function(){

	if(($(window).width())>=768){

	/* .about */
		$('.about').hover(function(){
			$('.about p').show();
			$(this).fadeTo('fast',1);
			$(this).stop(true,true).animate({ "right":"+=10px", "bottom":"+=10px"}, 300);
	/* try setting up a class with display: none for the new <p> and then removing the class on hover and adding it back on leave */
		}, function(){
			$('.about p').hide();
			$(this).fadeTo('slow',0.75);
			$(this).stop(true,true).animate({ "right":"-=10px", "bottom":"-=10px"}, 400)
		});

		$('.about').click(function(){
			$(this).stop(true,true).animate({ "right":"-=10px", "bottom":"-=10px"}, 400)
		});


	/* .projects */
		$('.projects').hover(function(){
			$('.projects p').show();
			$(this).stop(true,true).animate({ "left":"+=10px", "bottom":"+=10px"}, 300);

		}, function(){
			$('.projects p').hide();
			$(this).stop(true,true).animate({ "left":"-=10px", "bottom":"-=10px"}, 400)
		});

		$('.projects').click(function(){
			$(this).stop(true,true).animate({ "left":"-=10px", "bottom":"-=10px"}, 400)
		});


	/* .resume */
		$('.resume').hover(function(){
			$('.resume p').show();
			$(this).stop(true,true).animate({ "right":"+=10px", "top":"+=10px"}, 300);

		}, function(){
			$('.resume p').hide();
			$(this).stop(true,true).animate({ "right":"-=10px", "top":"-=10px"}, 400)
		});

		$('.resume').click(function(){
			$(this).stop(true,true).animate({ "right":"-=10px", "top":"-=10px"}, 400)
		});		



	/* .contact */
		$('.contact').hover(function(){
			$('.contact p').show();
			$(this).stop(true,true).animate({ "left":"+=10px", "top":"+=10px"}, 300);
		}, function(){
			$('.contact p').hide();
			$(this).stop(true,true).animate({ "left":"-=10px", "top":"-=10px"}, 400)
		});

		$('.contact').click(function(){
			$(this).stop(true,true).animate({ "left":"-=10px", "top":"-=10px"}, 400)
		});
	};/* end of first argument in the if statement */
};

$(document).ready(main)
$(document).on('page:load', main)