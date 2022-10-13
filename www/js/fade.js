$(document).ready(function () {
    $('.link').click(function (event) {
    	$('.link a').css('display', 'none');
        event.preventDefault();   	
    	new Audio('audio/intro.mp3').play();
        newLocation = $('.link a').attr("href");
        $('body').fadeOut(5000, newpage);
    });
    function newpage() {
        window.location = newLocation;
    }
});