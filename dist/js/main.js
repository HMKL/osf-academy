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
                el: '.swiper-pagination',
                clickable: true,
            },
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
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
  const getYear = document.querySelectorAll('.year > span');
  const getLinks = document.querySelector('.link');

  const getInputs = document.querySelectorAll('.check-radios > input');
  const getHideFilter = document.querySelector('.hide-filter');




  // const changeNameFilter = () => {
  //   getHideFilter.addEventListener('click', () => {
  //     if (getHideFilter.classList.contains('collapsed')) {
  //       getHideFilter.innerHTML = 'Show Filter';
  //     } else if (getHideFilter.classList.contains('hide-filter')) {
  //       getHideFilter.innerHTML = 'Hide Filter';
  //     }
  //   });
  // };
  // changeNameFilter();

  const addColor = () => {
    getInputs.forEach(element => {
      element.addEventListener('click', (e) => {
        console.log(e.target.id)
        if (e.target.id === 'Radios2') {
          getInputs[1].style.backgroundColor = "red";
        }





      });
    });
  }
  addColor();







  const injectYear = () => {
    let year = new Date();
    getYear.forEach(element => {
      element.innerHTML = year.getFullYear();
    });
  }
  injectYear();


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


