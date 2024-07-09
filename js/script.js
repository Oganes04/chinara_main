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
            $('.header__nav-dropdown--header').removeClass('link__underline')
        } else {
            $('.dropdown__row').addClass('rotate_row');
            $currentAnswer.slideDown();
            $('.header__nav-dropdown--header').addClass('link__underline')
        }
    });

    // Обработчик клика по ссылкам внутри .header__nav-dropdown--inner
    $('.header__nav-dropdown--inner a').click(function() {
        $('.header__nav-dropdown--inner').slideUp();
        $('.dropdown__row').removeClass('rotate_row');
        $('.header__nav-dropdown--header').removeClass('link__underline')
    });

    // Обработчик клика вне области .header__nav-dropdown
    $(document).click(function() {
        $('.header__nav-dropdown--inner').slideUp();
        $('.dropdown__row').removeClass('rotate_row');
        $('.header__nav-dropdown--header').removeClass('link__underline')
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
  breakpoints: {

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
 }
  });

});

var reviewsSwiper = new Swiper(".reviewsSwiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  speed: 600,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".reviewsSwiper-pagination",
    clickable: true,
  },

  breakpoints: {

  600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
 }
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

const gallerySliderAdaptive = new Swiper('.gallerySlideradaptive', {
  loop: true,
  speed: 600,
  centeredSlides: true,
  // autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  // },

  navigation: {
      nextEl: ".gallerySlideradaptive-next",
      prevEl: ".gallerySlideradaptive-prev",
  },
  pagination: {
      el: ".gallerySlideradaptive-pagination",
      clickable: true,
    },
})




$('#radio__doctor').click(function() {
    $('#doctorSelector').show();
   

});

$('#radio__clinic').click(function() {
  $('#doctorSelector').hide();

});



// Сначала скроем все ответы
$('.faq__items-text').slideUp();

$('.faq__item').click(function() {
    // Уберем класс rotate-faq у всех SVG в заголовках вопросов
    $('.faq__items-header svg').removeClass('rotate-faq');
    
    // Применим исходные стили к всем элементам
    $('.faq__item').css('border', '1px solid transparent');
    $('.faq__items-header').css('background-color', '#EDEDED');

    // Находим текущий вопрос и ответ
    var $currentAnswer = $(this).find('.faq__items-text');
    var $currentQuestion = $(this).find('.faq__items-header');
  
    // Если текущий ответ виден, скроем его
    if ($currentAnswer.is(':visible')) {
        $currentAnswer.slideUp();
    } else {
        // Скроем все ответы, кроме текущего
        $('.faq__items-text').not($currentAnswer).slideUp();
        
        // Раскроем только текущий ответ
        $currentAnswer.slideDown();
        
        // Изменяем стиль для текущего вопроса
        $currentQuestion.css('background-color', '#FFF');
        $(this).css('border', '1px solid #79C1DC');
        
        // Добавляем класс rotate-faq к SVG текущего вопроса
        $currentQuestion.find('svg').addClass('rotate-faq');
    }
});








// Общие классы для пункта меню и прайс-листа
const menuItemsSelector = '.prices__menu-item';
const priceListsSelector = '.prices__block-price__list';


let activeMenuItem = null;

$(document).ready(function() {
  // Получаем первый пункт меню
  const firstMenuItem = $(menuItemsSelector).first();

  // Получаем  номер прайс-листа из ID первого пункта меню
  const listNumber = firstMenuItem.attr('id').split('-').pop();

  // Показываем соответствующий прайс-лист
  $('#price-list-' + listNumber).show();

  // Добавляем класс 'rotate' к SVG элементу первого пункта меню  

  // Обновляем активный пункт меню
  activeMenuItem = firstMenuItem;
});

// Обработчик клика по пунктам меню
$(document).on('click', menuItemsSelector, function() {
  
  // Скрываем все прайс-листы
  $(priceListsSelector).hide();

  // Получаем   номер прайс-листа из ID пункта меню
  let listNumber = $(this).attr('id').split('-').pop();

  // Показываем соответствующий прайс-лист
  $('#price-list-' + listNumber).show();

  // Если было ранее активное меню, удаляем у него класс 'rotate' и 'box-shadow'
  if (activeMenuItem) {
    activeMenuItem.find('svg').removeClass('rotate');
    activeMenuItem.css('background-color', '#FFF');
    activeMenuItem.css('color', '#11394A');
    activeMenuItem.css('border-color', '#11394A');
    activeMenuItem.find('svg path').css('stroke', '#11394A');
  }

  // Добавляем класс 'rotate' к SVG элементу текущего активного пункта меню
  $(this).find('svg').addClass('rotate');
  $(this).css('background-color', '#79C1DC');
  $(this).css('border-color', '#79C1DC');
  $(this).css('color', '#FFF');
  $(this).find('svg path').css('stroke', '#11394A');
  $(this).find('svg path').css('stroke', '#fff');

  // Обновляем активный пункт меню
  activeMenuItem = $(this);
});

// document.addEventListener('scroll', function () {
//     const cards = document.querySelectorAll('.stocks__card');
//     let scrollPosition = window.scrollY;

//     cards.forEach((card, index) => {
//         const cardHeight = card.offsetHeight;
//         const cardTop = card.offsetTop;
//         const offset = scrollPosition - cardTop;

        
//         if (offset >= 0) {
//             card.style.zIndex = index; 
//             card.style.transform = `translateY(${offset}px)`;
//         } else {
//             card.style.zIndex = 1;
//             card.style.transform = `translateY(0)`;
//         }

//         if (index < cards.length - 1) {
//             cards[index + 1].style.zIndex = parseInt(cards[index].style.zIndex) + 1;
//         }
//     });
// });
$("#burger_menu").click(function() {
  $(this).toggleClass('open');
  $(".header__nav-adaptive").toggleClass("open");
  $("html").toggleClass("site__fixed");
  $("body").toggleClass("site__fixed");
});

