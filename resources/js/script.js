$(document).ready(function(){

    /* For the Sticky Navigation */
    $('.js--section-features').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '30px'
    });

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    
    /* Animations on scroll */
    $('.js--1').waypoint(function(direction){
        $('.js--1').addClass("animated").addClass("fadeIn");
    },{
        offset: '500px'
    });
    
    $('.js--2').waypoint(function(direction){
        $('.js--2').addClass("animated").addClass("shake");
    },{
        offset: '200px'
    });
    
    $('.js--3').waypoint(function(direction){
        $('.js--3').addClass("animated").addClass("slideInUp");
    },{
        offset: '400px'
    });
    
    $('.js--4').waypoint(function(direction){
        $('.js--4').addClass("animated").addClass("slideInLeft");
    },{
        offset: '500px'
    });
    
    $('.js--5').waypoint(function(direction){
        $('.js--5').addClass("animated").addClass("slideInRight");
    },{
        offset: '500px'
    });

});
