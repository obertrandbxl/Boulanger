$j(function(){
	console.clear();

	$j('.informations-clients__header__btn').click(function() {
		$j('.informations-clients__overlay').addClass('active');
		$j('.informations-clients__nav').fadeIn();
	});

	$j('.informations-clients__nav__btn').click(function() {
		$j('.informations-clients__overlay').removeClass('active');
		$j('.informations-clients__nav').fadeOut();
	});

	$j('.informations-clients__nav a').live('click', function() {
		$j('.informations-clients__overlay').removeClass('active');
		$j('.informations-clients__nav').fadeOut();
		var target = $j(this).attr('href');
		$j('html, body').animate({
			scrollTop: $j(target).offset().top
		}, 500);
		return false;
	});

});