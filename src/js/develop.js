function menuOpen() {
    $(document).on('click', '.green-zone__cross', function () {
        if ($(this).hasClass('active')) {
            $('.green-zone__menu').removeClass('show-menu');
            $('.green-zone__chapter').css('display', 'flex');
            $(this).removeClass('active');
            $('.main-slider').slick('slickPlay');
            $('.main-slider').find('.slick-dots').css('display', 'block');
            $('.green-zone__header').removeClass('plus-height');
        } else {
            $(this).addClass('active');
            $('.green-zone__menu').addClass('show-menu');
            $('.green-zone__chapter').css('display', 'none');
            $('.main-slider').slick('slickPause');
            $('.main-slider').find('.slick-dots').css('display', 'none');
            $('.green-zone__header').addClass('plus-height');
        }
    });
}



function mouseOn() {
    $(document).on('mouseover', '.green-zone__menu li a', function () {
        var data_position = $(this).attr('data-pos');
        var stick = $('.green-zone__hoverer');
            if (data_position == 1) {
                var pos = $(this).offset();
                var left_pos = pos.left;
                stick.animate({opacity: 1},{duration: 10});
                stick.animate({left: left_pos-14},{duration: 200, width: "linear"});

                stick.css('display','block');
            } else if (data_position == 2){
                var pos = $(this).offset();
                var left_pos = pos.left;
                stick.animate({opacity: 1},{duration: 10});
                stick.animate({left: left_pos-9},{duration: 200, width: "linear"});

                stick.css('display','block');
            } else if (data_position == 3){
                var pos = $(this).offset();
                var left_pos = pos.left;
                stick.animate({opacity: 1},{duration: 10});
                stick.animate({left: left_pos-18},{duration: 200, width: "linear"});
                stick.css('display','block');
            }
    });
}

function mouseLeave() {
    $(document).on('mouseleave', '.green-zone__menu', function () {
        var stick = $('.green-zone__hoverer');
        stick.animate({left: '50.5%'},{duration: 200, width: "linear"});
        stick.animate({opacity: 0},{duration: 50});
    });
}





function resizer() {
    $( window ).resize(function() {
        var atrebut = $('.green-zone__cross').css('display');
        if (atrebut == 'none') {
            $('.green-zone__chapter').css('display', 'flex');
            $('.green-zone__menu').removeClass('show-menu');
            $('.green-zone__cross').removeClass('active');
            $('.green-zone__header').removeClass('plus-height');
        }
        if ((atrebut == 'none') & $('.green-zone__menu').hasClass('show-menu')) {
            $('.green-zone__chapter').css('display', 'none');
        }
    });
}


function tabsClick() {
    $(document).on('click', '.quests-zone__radios label', function () {
        var data_radio = $(this).attr('data-radio');
        var stick = $('.green-zone__hoverer');
        if (data_radio == 1) {
            $('.js-cource').addClass('show-ivent');
            $('.js-ivents').removeClass('show-ivent');
        } else if (data_radio == 2){
            $('.js-cource').removeClass('show-ivent');
            $('.js-ivents').addClass('show-ivent');
        }
    });
}

$(window).on('load', function(){
    $('.green-zone>img').addClass('start');
    setTimeout(function () {
        $('.green-zone__menu').animate({opacity: 1},{duration: 800, width: "linear"});
        $('.green-zone__phone').animate({opacity: 1},{duration: 800, width: "linear"});
        $('.green-zone__chapter').addClass('animate-chapter');
        $('.main-slider').find('.slick-dots').css('display', 'block');
    }, 2000);
    setTimeout(function () {
        $('.slick-dots').addClass('sh-dots');
    },3000);
});
function openMap() {
    $(document).on('click', '.js-sh-map', function (e) {
        e.preventDefault();
        if ($(this).hasClass('tapped')) {
            $(this).removeClass('tapped');
            $(this).parents('.contacts').find('.js-map').removeClass('display-map');
        } else {
            $(this).addClass('tapped');
            $(this).parents('.contacts').find('.js-map').addClass('display-map');
        }
    });
}
function closeMap() {
    $(document).on('click', '.js-map-close', function () {
        $('.js-sh-map').removeClass('tapped');
        $('.js-map').removeClass('display-map');
        $('.scrollto').removeClass('moved');
    });
}
function scrollingTo() {
    $(document).on('click', '.scrollto', function () {
        if ($(this).hasClass('moved')) {
            $(this).removeClass('moved');
        } else {
            $(this).addClass('moved');
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top - 47;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
            return false;

        }
    });
}

$(document).ready(function () {

    resizer();
    menuOpen()
    mouseOn();
    mouseLeave();
    tabsClick();
    openMap();
    closeMap();
    scrollingTo();
    $( window ).resize(function() {
        $('.green-zone__hoverer').css('display','none');
    });
    $('.friends__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.cources__colls').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.white-string__sections').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.main-slider').slick({
        pauseOnHover: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});