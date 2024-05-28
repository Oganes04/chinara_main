$(document).ready(function() {

//===================== Выпадающий список в header =======================


    // Скрываем слайдер при загрузке страницы
    $('.header__nav-dropdown--inner').slideUp();

    // Обработчик клика по элементу с классом .header__nav-dropdown
    $('.header__nav-dropdown').click(function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события клика
        var $currentAnswer = $(this).find('.header__nav-dropdown--inner');
     
        if ($currentAnswer.is(':visible')) {
            $('.dropdown__row').removeClass('rotate_row');
            $currentAnswer.slideUp();
        } else {
            $('.dropdown__row').addClass('rotate_row');
            $currentAnswer.slideDown();
        }
    });

    // Обработчик клика по ссылкам внутри .header__nav-dropdown--inner
    $('.header__nav-dropdown--inner a').click(function() {
        $('.header__nav-dropdown--inner').slideUp();
        $('.dropdown__row').removeClass('rotate_row');
    });

    // Обработчик клика вне области .header__nav-dropdown
    $(document).click(function() {
        $('.header__nav-dropdown--inner').slideUp();
        $('.dropdown__row').removeClass('rotate_row');
    });


//====================== Маска номер телефона ============================
$('.tel').inputmask({
    "mask": "+7 (999) 999 - 99 - 99",
    "placeholder": "",
    "showMaskOnHover": false,
    "showMaskOnFocus": true
});

//=================== Слайдер в оффере ============
var swiper = new Swiper(".stockSwiper", {
    grabCursor: true,
    effect: "creative",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    creativeEffect: {
        prev: {
          shadow: true,
          translate: ["100%", 0, 0], // Инвертируем перемещение для предыдущего слайда
        },
        next: {
          translate: [0, 0, -1], // Инвертируем перемещение для следующего слайда
        },
     },
    navigation: {
        nextEl: '.stockSwiper-next',
        prevEl: '.stockSwiper-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    initialSlide: 0,
    speed: 600,
    on: {
        slideChangeTransitionStart: function () {
            $('.offer__stock-description--text').animate({opacity: 0}, 300);
        },
        transitionEnd: function () {
            var activeSlideText = this.slides[this.activeIndex].querySelector('p').innerText;
            $('.offer__stock-description--text').text(activeSlideText).animate({opacity: 1}, 300);
            
        },
    },
});
var firstSlideText = swiper.slides[0].querySelector('p').innerText;
$('.offer__stock-description--text').text(firstSlideText);

});





document.addEventListener('DOMContentLoaded', function() {
//=================== Анимация у checkbox ============

$(".check-label").on("click", function () {
    let isChecked = $(this).children("input").prop("checked");
    if (isChecked) {
        $(this).find(".fakecheck").addClass("checked");
    } else {
        $(this).find(".fakecheck").removeClass("checked");
    }
  });


//=================== Слайдер в акциях ============

var swiper = new Swiper(".stockSwiper-second", {
    grabCursor: true,
    effect: "creative",
    loop: true,
    speed: 600,
    creativeEffect: {
        prev: {
          shadow: true,
          translate: ["100%", 0, 0], // Инвертируем перемещение для предыдущего слайда
        },
        next: {
          translate: [0, 0, -1], // Инвертируем перемещение для следующего слайда
        },
     },
    navigation: {
        nextEl: '.stockSwiper-second-next',
        prevEl: '.stockSwiper-second-prev',
    },
    pagination: {
        el: ".stockSwiper-second-pagination",
        clickable: true,
    },
    on: {
        slideChangeTransitionStart: function () {
            $('.stocks__card--info-text h3, .stocks__card--info-text p').animate({opacity: 0}, 300);
        },
        transitionEnd: function () {
            var activeSlideH3 = this.slides[this.activeIndex].querySelector('h3').innerText;
            var activeSlideText = this.slides[this.activeIndex].querySelector('p').innerText;
            $('.stocks__card--info-text h3').text(activeSlideH3).animate({opacity: 1}, 300);
            $('.stocks__card--info-text p').text(activeSlideText).animate({opacity: 1}, 300);
        },
    },
});

// Initialize the text of the first slide
var firstSlideH3 = swiper.slides[0].querySelector('h3').innerText;
var firstSlideText = swiper.slides[0].querySelector('p').innerText;
$('.stocks__card--info-text h3').text(firstSlideH3);
$('.stocks__card--info-text p').text(firstSlideText);


//============= Слайдер с врачами ===========


var swiper = new Swiper(".doctorsSwiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  speed: 600,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".doctorsSwiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".doctorsSwiper-next",
    prevEl: ".doctorsSwiper-prev",
  },
  });

});

$(".dropdown__link-selector").click(function(event) {
    event.stopPropagation(); // Предотвращает закрытие выпадающего списка при клике на ссылку
    $(".dropdown__content-selector").slideToggle("fast");
    $('.dropdown__link-selector  svg').toggleClass("rotate_row");
   });
   


const swiper = new Swiper('.gallerySlider', {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    effect: "coverflow",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    coverflowEffect: {          // added
        rotate: 0,              // added (Rotate of the prev and next slides)
        depth: 230,             // added (Depth of the prev and next slides)
        stretch: 200,            // added (Space between the slides)
        modifier: 1,            // added (Multiply the values of rotate, depth, and stretch)
        scale: 0.9,               // added (Size ratio of the prev and next slides)
        slideShadows: true,    // added (Presence of shadow on the surfaces of the prev and next slides)
    },                          // added

    navigation: {
        nextEl: ".gallerySlider-next",
        prevEl: ".gallerySlider-prev",
    },
    pagination: {
        el: ".gallerySlider-pagination",
        clickable: true,
      },
})



$('#radio__doctor').click(function() {
    $('#doctorSelector').show();
   

});

$('#radio__clinic').click(function() {
  $('#doctorSelector').hide();

});

