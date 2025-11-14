$(function(){


    // Gallery Slider
    if ($('gallery-container').length) {
        var gallery = $('.gallery-container').slick({
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});