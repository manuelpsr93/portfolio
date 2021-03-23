$(document).ready(function(){

	var sobremi = $('#sobremi').offset().top,
		portfolio = $('#portfolio').offset().top,
		contacto = $('#contacto').offset().top;

	$('#btn-sobremi').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: sobremi
		},500);
	});

	$('#btn-portfolio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: portfolio
		},500);
	});

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto
		},500);
	});
});