$(function () {
  // rateyo
  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "transparent",
    ratedFill: "#F4C300",
    spacing: "4px",
    readOnly: true,
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00002 12.1735L3.29802 14.8055L4.34802 9.52016L0.391357 5.8615L5.74269 5.22683L8.00002 0.333496L10.2574 5.22683L15.6087 5.8615L11.652 9.52016L12.702 14.8055L8.00002 12.1735Z"/></svg>'
  });
  // mix
  var mixer = mixitup('.product__items');

  // tabs

  $('.item-dot').on('click', function () {
    $(this).toggleClass('active');
  });

});


let swiper = new Swiper('.reviews-slider', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      navigation: {
        enabled: false
      }
    },

  }

});
// tabs
const dots = document.querySelectorAll(".item-dot__icon");
dots.forEach(function (dot) {
  dot.addEventListener("click", dotClick);
});
function dotClick() {
  this.nextElementSibling.classList.toggle("item-dot__content--active");
}


// burger

const burger = document.querySelector('.burger'),
  menu = document.querySelector('.header__menu'),
  body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__menu--active');
  body.classList.toggle('lock');
});


wow = new WOW(
  {
    boxClass: 'wow',      // default
    animateClass: 'animate__animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  }
);
wow.init();
