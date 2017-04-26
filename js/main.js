$(document).ready(function () {
	$('.slick-box').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 1,
		centerMode: true,
		variableWidth: true,
		focusOnSelect: true,
		infinite: true,
		arrows: true,
		appendArrows: ".box-for__arrow",
		prevArrow: ".arrow__left",
		nextArrow: ".arrow__right"
	});


	$('.slick-box__reviews').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: true,
		appendArrows: ".box-for__play-opacity",
		prevArrow: ".play-opacity__left",
		nextArrow: ".play-opacity__right"
	});
});
