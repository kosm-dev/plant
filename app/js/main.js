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

});


let swiper = new Swiper('.reviews-slider', {
  // Optional parameters
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});





