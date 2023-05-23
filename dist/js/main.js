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

/* eslint-disable linebreak-style */
(function () {
  'use strict';
  // Your custom JavaScript goes here


  const getHamburger = document.querySelector('.hamburger');
  const getHamburgerSpan = document.querySelector('.hamburger > span');
  const getNav = document.querySelector('.main-nav');
  const getMega = document.querySelector('.mega-menu');
  const getUl = document.querySelectorAll('.main-ul > li');
  const getHeaderText = document.querySelectorAll('.header-text');
  const getSubmenu = document.querySelectorAll('.sub-menu');
  const getA = document.querySelectorAll('.target');




  const addLines = () => {
    getHamburger.addEventListener('click', () => {
      getNav.classList.toggle('show');
      getHamburgerSpan.classList.toggle('lines');
    });
  }
  addLines();


  const get = () => {
    getHeaderText.forEach(element => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
    let count = 0;
    getHeaderText[0].addEventListener('click', () => {
      count += 1
      if (count === 1) {
        getSubmenu[0].classList.toggle('d-flex');
      }
      count -= 1;
    });
    getHeaderText[1].addEventListener('click', () => {
      count += 1
      if (count === 1) {
        getSubmenu[1].classList.toggle('d-flex');
      }
      count -= 1;
    });

  }
  get();







})();


