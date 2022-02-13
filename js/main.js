$(document).ready(function() {
	$('.burger').click(function(event){
        $('.menu__body').toggleClass('active');
        $('.burger').toggleClass('active');
    });
});