$(document).ready(function() {


    //Preload
    //$(window).on('load', function() {
    //$('#preLoder').fadeOut(1000);
    //})



    //Bounce animate
    $(window).on('scroll', function() {
        var headerHeight = $('#main-header').height();
        var scrolSize = $(window).scrollTop();
        if (scrolSize > headerHeight) {
            $('#main-header').addClass('bounce-animate');
        } else {
            $('#main-header').removeClass('bounce-animate');
        }
    })



    //Top Bottom
    $(window).on('scroll', function() {
        var scrolTop = $(this).scrollTop();
        if (scrolTop > 600) {
            $('#arrow').fadeIn(300);

        } else {
            $('#arrow').fadeOut(300);
        }
    })
    $('#arrow').on('click', function() {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000)
    })


    //Hash
    $('a').on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        if (this.hash != '') {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500)
        }
    })


    //Countdown
    $('#getting-started').countdown('2022/12/30', function(event) {
        $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));

        $(this).html(event.strftime('<div class="single-counter">%d<span> Days</span></div> <div class="single-counter">%H<span> Hours</span></div> <div class="single-counter">%M<span> Minutes</span></div> <div class="single-counter">%S<span> Seconds</span></div>'));
    });



    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        margin: 15,
        items: 3,
        responsiveTimeout: 3000,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            },

        }

    });






    // init Isotope
    var $grid = $('.single_itemses').isotope({
        // options
    });
    // filter items on button click
    $('.subject_menu').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // Typed Js
    var typed = new Typed('.moving', {
        strings: ["Biggest University", "Biggest Educational Hub"],
        typeSpeed: 100,
        backSpeed: 100
    });



    // Magnific Popup
    $('.image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });








});