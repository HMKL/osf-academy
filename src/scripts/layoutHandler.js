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
            speed: 600,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.swiper-pagination.one',
                clickable: true,
            },
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },

        });



        let swiperSecond = new Swiper('#second-swiper', {
            effect: 'coverflow',
            rewind: true,
            speed: 600,
            paginationClickable: true,
            pagination: {
                el: '.swiper-pagination-two',
                clickable: true,
            },
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },

        });







        let swiperThird = new Swiper("#swiper-third", {
            speed: 1000,

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






        let swiperThumbs = new Swiper(".swiper-thumbs", {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: false,
            watchSlidesProgress: true,
            direction: 'horizontal',
            breakpoints: {
                768: {
                    direction: 'vertical',
                    slidesPerView: 4,
                }
            },
            pagination: {
                el: ".swiper-pagination",
            },
        });
        let swiperPhoto = new Swiper(".swiper-photo", {
            spaceBetween: 10,
            direction: "horizontal",
            zoom: true,
            // navigation: {
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            // },
            thumbs: {
                swiper: swiperThumbs,
            },
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
        });


        new PureCounter({
            selector: ".count",


            start: 0,
            end: 12391,
            duration: 1.5,
            delay: 10,
            once: true,
            pulse: true,
            legacy: false,
            separator: true,
        });


    });
})(jQuery);
