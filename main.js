// ----lazy-loading
document.querySelectorAll('img').forEach(img => {
  img.setAttribute('loading', 'lazy');
});


// slider
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

  // sidebar ---
  document.addEventListener('DOMContentLoaded', initSlider); 
  const toggleMenu = document.querySelector('.sidebar');
  const navControl = document.querySelector('.header__nav-control');
  
  navControl.addEventListener('click', () => {
    toggleMenu.classList.toggle('sidebar--open');
  
    const menuIcon = document.querySelector('.header__burger-icon');
    const iconClose = document.querySelector('.header__burger-close');
  
    menuIcon.classList.toggle('burger-icon--hidden');
    iconClose.classList.toggle('burger-icon--hidden'); 
  });
  

  //light bulb switcher---
  const Switcher = document.querySelector('.banner__light-switcher');
  const lightBulb = document.querySelector('.banner__light-bulb-icon');

  Switcher.addEventListener('click', () =>
    { lightBulb.classList.toggle('light-bulb__active');

      const switcherOff = document.querySelector('.switcher-on');
      const switcherOn = document.querySelector('.switcher-off');

      switcherOn.classList.toggle('switcher-icon__hidden');
      switcherOff.classList.toggle('switcher-icon__hidden');


    }
  )


// --------------Arrows

 //  для всех стрелок
document.querySelectorAll('.arrow-icon, .sidebar__arrow-icon').forEach(arrow => {
  arrow.addEventListener('click', function() {
    //  Вращение стрелки
    this.classList.toggle('rotated');
    
    if (this.classList.contains('sidebar__arrow-icon')) {
      // Для сайдбар-меню
      const submenu = this.closest('li').querySelector('.sidebar__submenu-list');
      if (submenu) submenu.classList.toggle('sidebar__submenu--open');
    } 
    else if (this.closest('.footer__grid-item')) {
      // Для футера
      const footerMenu = this.closest('.footer__grid-item').querySelector('.footer__nav-list');
      if (footerMenu) footerMenu.classList.toggle('navigation__list--active');
    }

  });
});

//// --------------Preloader

window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preloader--loaded');
  
  setTimeout(() => {
    preloader.remove();
  }, 500);
});


//--open form
const openButton = document.getElementById('openForm');
const closeButton = document.getElementById('closeForm');
const overlay = document.getElementById('overlay');
const body = document.body;

body.classList.add('no-scroll');

openButton.addEventListener('click', () => {
  overlay.style.display = 'block';
  body.classList.add('no-scroll');
});

// Закрыть форму
closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  body.classList.remove('no-scroll'); 
});
