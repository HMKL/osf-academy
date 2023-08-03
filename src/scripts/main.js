/* eslint-disable linebreak-style */
(function () {
  'use strict';
  // Your custom JavaScript goes here


  const getHamburger = document.querySelector('.hamburger');
  const getHamburgerSpan = document.querySelector('.hamburger > span');

  const getHeaderText = document.querySelectorAll('.header-text');
  const getSubmenu = document.querySelectorAll('.sub-menu');
  const getYear = document.querySelectorAll('.year > span');




  const getInputs = document.querySelectorAll('.check-radios > input');
  const getHideFilter = document.querySelector('.hide-filter');
  const getSecond = document.querySelector('.osf-mobile-menu')





  const changeNameFilter = () => {
    // NOTE: This "if" is checking if element exists before calling addEventListener(), else JS will trow an error in the page that element does not exist
    if (getHideFilter) {
      getHideFilter.addEventListener('click', () => {
        if (getHideFilter.classList.contains('collapsed')) {
          getHideFilter.innerHTML = 'Show Filter';
        } else if (getHideFilter.classList.contains('hide-filter')) {
          getHideFilter.innerHTML = 'Hide Filter';
        }
      });
    }
  };
  changeNameFilter();




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
      // getNav.classList.toggle('show');
      getHamburgerSpan.classList.toggle('lines');
      getSecond.classList.toggle('show-mobile');

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


  console.log(getHeaderText)












})();


