function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.arrow-previous');
    const nextBtn = document.querySelector('.arrow-next');
    let slideIndex = 0;
    let autoSlideInterval;
  
    function showSlide(index) {
      index = (index + slides.length) % slides.length;
      slides.forEach(slide => slide.classList.remove('_active'));
      slides[index].classList.add('_active');
      slideIndex = index;
    }
  
    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        showSlide(slideIndex + 1);
      }, 4000);
    }

    function handleManualChange(direction) {
      clearInterval(autoSlideInterval);
      showSlide(slideIndex + direction);
      autoSlideInterval = setInterval(() => {
        showSlide(slideIndex + 1);
      }, 4000);
    }

    prevBtn.addEventListener('click', () => handleManualChange(-1));
    nextBtn.addEventListener('click', () => handleManualChange(1));
  
    showSlide(0);
    startAutoSlide();
  }
  //light sidebar below---
  document.addEventListener('DOMContentLoaded', initSlider); 
  const toggleMenu = document.querySelector('.header-nav');
  const navControl = document.querySelector('.nav-control');
  
  navControl.addEventListener('click', () => {
    toggleMenu.classList.toggle('header-nav--active');
  
    const menuIcon = document.querySelector('.menu-icon');
    const iconClose = document.querySelector('.menu-icon--close');
  
    menuIcon.classList.toggle('burger-icon--hidden');
    iconClose.classList.toggle('burger-icon--hidden'); 
  });
  
  //light bulb below---
  const Switcher = document.querySelector('.light__switcher');
  const lightBulb = document.querySelector('.light-bulb__icon');

  Switcher.addEventListener('click', () =>
    { lightBulb.classList.toggle('light-bulb__active');

      const switcherOff = document.querySelector('.switcher-on');
      const switcherOn = document.querySelector('.switcher-off');

      switcherOn.classList.toggle('switcher-icon__hidden');
      switcherOff.classList.toggle('switcher-icon__hidden');


    }
  )

  document.querySelectorAll('.arrow-icon').forEach(arrow => {
    arrow.addEventListener('click', function () {
      this.classList.toggle('rotated');
    });
  });


  

  /*const arrowMove = document.querySelectorAll('.arrow-icon');
  arrowMove.forEach(arrow => {
      arrow.addEventListener('click', ()=> {
      const footerTitle = document.querySelector('.navigation__list');
      footerTitle.classList.toggle('navigation__list--active');
      });
  }); */


  const arrowMove = document.querySelectorAll('.arrow-icon'); 
    arrowMove.forEach(arrow => {
    arrow.addEventListener('click', () => {
    const footerTitle = arrow.closest('.footer__grid-item').querySelector('.navigation__list');
    footerTitle.classList.toggle('navigation__list--active');
  });
});
