let layoutHandler;

(function ($) {
    'use strict';
    let LayoutHandler = function () {
        let self = this;

        this.ready = function () {
            this.handleDOM();
            this.handleEvents();
        };

        this.handleDOM = function () {

        };

        this.handleEvents = function () {

        };
    };

    layoutHandler = new LayoutHandler();

    $(document).ready(function () {
        layoutHandler.ready();






        let swiperMain = new Swiper('#main-swiper', {
            effect: 'coverflow',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });



        let swiperSecond = new Swiper('#second-swiper', {
            effect: 'coverflow',
            rewind: true,
            speed: 600,
            paginationClickable: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },
            navigation: {
                nextEl: '.forward',
                prevEl: '.backward',
            },
        });







        let swiperThird = new Swiper("#swiper-third", {
            // loop: true,
            speed: 1000,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".right",
                prevEl: ".left",
            },

            breakpoints: {

                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }
        });



        new PureCounter({
            selector: ".counter",

            start: 0,
            end: 55,
            duration: 1.5,
            delay: 10,
            once: true,
            pulse: true,
            legacy: false,
            formater: "us-US",
        });


    });
})(jQuery);
