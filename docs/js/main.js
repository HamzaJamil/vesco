/*=========  Services  =========*/
$(function () {
    new WOW().init();
});

/*=========  Work  =========*/
$(function () {

    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*=========  Team  =========*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 400,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        }
    });
});

/*=========  Testimonials  =========*/
$(function () {
    $("#clients-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 400,
        loop: true,
        autoplayHoverPause: true
    });
});
/*=========  Stats  =========*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/*=========  Our Clients  =========*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 400,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 3
            },
            // breakpoint from 768 up
            768 : {
                items: 4
            },
            // breakpoint from 992 up
            992 : {
                items: 5
            }
        }
    });
});

/*=========  Show / Hide Navigation  =========*/

$(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() < 60 ){
            //hide nav
            $("nav").removeClass("vesco-navbar");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("vesco-navbar");
            $("#back-to-top").fadeIn();
        }
            
    });
    
});

/*=========  Smooth Scroll  =========*/
$(function() {
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        
        //  get / return Id like #about, #team, #stats
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop : $(section).offset().top - 65
        }, 1250, "easeInOutExpo");        
    });
});

/*=========  close mobile menu on click  =========*/
$(function() {
    $("ul.navbar-nav li a").on("click touch", function(){
        $(".navbar-toggle").click();
    });
});
 















