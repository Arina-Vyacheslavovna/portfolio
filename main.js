(function($){
	$('.menu-bar').on('click', function() {
		$('header').toggleClass('triggered');
    });
})(jQuery);

(function($){
	$('li').on('click', function(){
		$('header').toggleClass('triggered');
	});
})(jQuery);