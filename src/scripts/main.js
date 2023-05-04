/* eslint-disable linebreak-style */
(function () {
  'use strict';
  // Your custom JavaScript goes here


  const getHamburger = document.querySelector('.hamburger');
  const getNav = document.querySelector('.main-nav');
  const getMega = document.querySelector('.mega-menu');
  const getUl = document.querySelectorAll('.main-ul > li > a');
  const getHeaderText = document.querySelectorAll('.header-text');
  const getSubmenu = document.querySelectorAll('.sub-menu');
  const getA = document.querySelectorAll('.target');

  // const addClass = () => {
  //   getA.forEach(element => {
  //     element.addEventListener('click', () => {
  //       element.classList.toggle('reverse-arrow');
  //     })
  //   });
  // }
  // addClass();



  // const ceva = () => {
  //   let count = 0;
  //   getUl[0].addEventListener('click', () => {
  //     count += 1
  //     if (count === 1) {
  //       getMega.classList.add('zxc');
  //       getUl[0].classList.add('reverse-arrow')
  //     } else {
  //       getMega.classList.remove('zxc');
  //       getUl[0].classList.remove('reverse-arrow')

  //       count -= 2;
  //     }
  //   });
  // }
  // ceva();



  // const addClassSubMenu = () => {
  //   getHeaderText[0].addEventListener('click', () => {
  //     getSubmenu[0].classList.toggle('d-flex');
  //   });

  //   getHeaderText[1].addEventListener('click', () => {
  //     getSubmenu[1].classList.toggle('d-flex');
  //   });
  // }
  // addClassSubMenu();






  getHamburger.addEventListener('click', () => {
    getNav.classList.toggle('show');
  })




  // const zxc = () => {
  //   let count = 0;
  //   getHeaderText[0].addEventListener('click', () => {
  //     count += 1
  //     if (count === 1) {
  //       getSubmenu[0].classList.toggle('d-flex');
  //     }
  //     count -= 1;
  //   })
  // }
  // zxc();



  const get = () => {
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


