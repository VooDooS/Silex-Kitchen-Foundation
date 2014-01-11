$(document).foundation();


function resizeOffCanvas() {
    $('.inner-wrap').css('min-height', $(window).height() - $('footer').outerHeight() + 'px');
}

resizeOffCanvas();
$(window).resize(resizeOffCanvas());
