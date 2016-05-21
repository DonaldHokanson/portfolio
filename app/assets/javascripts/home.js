var main = function(){
	$('.about').hover(

	function(){
		$(this).animate({
			right: '10px',
			bottom: '10px'
		}, 200);
	},

	function(){
		$(this).animate({
			left: '0px',
			top: '0px'
		}, 400);
	});

};

$(document).ready(main)