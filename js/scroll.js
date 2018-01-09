$(function() {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.smooth-scroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 30
                }, 800); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    });

    window.sr = ScrollReveal({ duration: 750 });
    sr.reveal('.reveal');
    sr.reveal('.reveal-i', 200);
    sr.reveal('.reveal-service', 200);
    sr.reveal('.reveal-team', 200);
    sr.reveal('.reveal-contact');


});

