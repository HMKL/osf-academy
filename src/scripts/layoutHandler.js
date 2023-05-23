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
            // spaceBetween: 30,
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
            // spaceBetween: 30,
            // effect: 'coverflow',
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






    });
})(jQuery);
