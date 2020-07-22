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
        ]
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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

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

});

/* ============================================
|   |   |   |   Navigation
=============================================== */

$(document).ready(function () {
    $(window).scroll(function () { 
        
        showHideNav();
    });

    function showHideNav(){
        if ($(window).scrollTop()>50) {

            //Show white nav
            $("nav").addClass("white-nav-top");

            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png")

        } else {
            //Hide white nav
            $("nav").removeClass("white-nav-top");
            //hide dark logo & show white one
            $(".navbar-brand img").attr("src", "img/logo/logo.png")
        }

    }
});