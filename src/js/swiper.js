const swiper1 = new Swiper('.hot-tours__slider', {
  direction: 'horizontal',
  autoHeight: true,
  loop: true,
  autoplay: {
    delay: 20000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  navigation: {
    nextEl: '.hot-tours__slider-button--next',
    prevEl: '.hot-tours__slider-button--prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
});