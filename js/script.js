/* ============================================
|   |   |   |   Preloader  
=============================================== */
$(window).on('load', function () { //make sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ============================================
|   |   |   |   Team 
=============================================== */

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }

        }

    });

});

/* ============================================
|   |   |   |   Progress Bars
=============================================== */

$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);

        });

        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });

    /* */

});

/* ============================================
|   |   |   |   Responsive Tabs
=============================================== */
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});


/* ============================================
|   |   |   |   Portfolio
=============================================== */
$(window).on('load', function () {

    //initialize Isotope
    $("#isotope-container").isotope({

    });

    // filter items on button click 
    $('#isotope-filters').on('click', 'button', function () {

        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio 
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');


    });

});


/* ============================================
|   |   |   |   Magnific PopUp
=============================================== */

$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* ============================================
|   |   |   |   Testimonial
=============================================== */

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

});

/* ============================================
|   |   |   |   Stats
=============================================== */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});

/* ============================================
|   |   |   |   Clients
=============================================== */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }

        }
    });

});

/* ============================================
|   |   |   |   Navigation
=============================================== */

$(document).ready(function () {
    $(window).scroll(function () {

        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show white nav
            $("nav").addClass("white-nav-top");
            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            //show to back to top
            $("#back-to-top").fadeIn();
        } else {
            //Hide white nav
            $("nav").removeClass("white-nav-top");
            //hide dark logo & show white one
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            //hide to back to top
            $("#back-to-top").fadeOut();
        }

    }
});

/* ============================================
|   |   |   |   Mobile Menu
=============================================== */

$(document).ready(function () {

    // show mobile nav
    $("#mobile-nav-open-btn").click(function () { 
        $("#mobile-nav").css("height","100%");      
    });

    // hide mobile nav 
    $("#mobile-nav-close-btn,#mobile-nav a").click(function () { 
        $("#mobile-nav").css("height","0%");      
    });
});


/* ============================================
|   |   |   |   Animation
=============================================== */
//animation on scroll
$(document).ready(function () {
    new WOW().init();
});

$(window).on('load',function() {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});

/* ============================================
|   |   |   |   Google MAps
=============================================== */
$(window).on('load', function () {

    //Map Variables
    var addressString = '23.601244, 90.623531';
    var mylatlng = {
        lat: 3.601244,
        lng: 90.623531
    };

    //1. Render Google Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: mylatlng
    });

    var marker = new google.maps.Marker({
        position: mylatlng,
        map: map
    });

    // resize function
    google.maps.addDomListener(window, 'resize',function(){
        var center = map.getCenter();
        google.maps.event.trigger(map,'resize');
        map.setCenter(center);
    });



});