const lettersSlider = new Swiper(".thanks__slider .swiper", {
  spaceBetween: 0,
  slidesPerView: 4,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    660: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".thanks__slider .swiper-pagination",
    type: "fraction",
    // clickable: true,
  },
  navigation: {
    nextEl: ".thanks__slider .swiper-button-next",
    prevEl: ".thanks__slider .swiper-button-prev",
  },
});
const heroSlider = new Swiper(".hero__slider", {
  spaceBetween: 0,
  slidesPerView: 1,
  // loop: true,
  // breakpoints: {
  //   760: {
  //     slidesPerView: 2.007,
  //   },
  //   320: {
  //     slidesPerView: 1.06,
  //   },
  // },
  pagination: {
    el: ".hero__slider .swiper-pagination",
    type: "fraction",
    // clickable: true,
  },
  navigation: {
    nextEl: ".hero__slider .swiper-button-next",
    prevEl: ".hero__slider .swiper-button-prev",
  },
});
const gallerySlider = new Swiper(".gallery__slider .swiper", {
  spaceBetween: 0,
  slidesPerView: 3,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    560: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".gallery__slider .swiper-pagination",
    type: "fraction",
    // clickable: true,
  },
  navigation: {
    nextEl: ".gallery__slider .swiper-button-next",
    prevEl: ".gallery__slider .swiper-button-prev",
  },
});

var sliderPrev = new Swiper(".product__slider-thumbs", {
  spaceBetween: 0,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    660: {
      slidesPerView: 6,
    },
    320: {
      slidesPerView: 4,
    },
  },
});
var sliderMain = new Swiper(".product__slider-main", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".product__slider-main .swiper-button-next",
    prevEl: ".product__slider-main .swiper-button-prev",
  },
  thumbs: {
    swiper: sliderPrev,
  },
  pagination: {
    el: ".product__slider-main .swiper-pagination",
    // clickable: true,
  },
});
