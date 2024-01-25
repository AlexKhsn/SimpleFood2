

// Находим обе кнопки
const button1 = document.getElementById('burger-btn1');
const button2 = document.getElementById('burger-btn2');
const mobileMenu = document.querySelector('.burger-menu'); //мобильное меню
const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

// Обработчик события для кнопок
function handleClick(e) {
  // Общие действия для кнопок с общим классом
  console.log('click');
  mobileMenu.classList.toggle('burger-menu--active'); //когда меню открыто
  button1.classList.add('burger-btn--active'); // добавляем класс к кнопке 1
  if (mobileMenu.classList.contains('burger-menu--active'))  { //Проверяем, есть ли у меню активный класс
    bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
  } else { //Когда нету активного класса у меню
    bodyLock.classList.remove('lock'); //Разрешаем скроллить
    button1.classList.remove('burger-btn--active'); // добавляем класс к кнопке 1
  }
  e.stopPropagation(); // Предотвращаем всплытие события
}

// Назначаем обработчик события для обеих кнопок
button1.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick);

// Закрытие меню при клике вне его и по ссылкам
document.addEventListener('click', function (e) {
  if (!mobileMenu.contains(e.target) && e.target !== button1 && e.target !== button2) {
    mobileMenu.classList.remove('burger-menu--active');
    bodyLock.classList.remove('lock');
    button1.classList.remove('burger-btn--active');
    button2.classList.remove('burger-btn--active');
  }
});

// Обработчик события для ссылок внутри меню
mobileMenu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A' || e.target.closest('a')) {
    mobileMenu.classList.remove('burger-menu--active');
    bodyLock.classList.remove('lock');
    button1.classList.remove('burger-btn--active');
    button2.classList.remove('burger-btn--active');
  }

  // Ищем ближайший родительский элемент li
  const li = e.target.closest('li');

  // Если клик был внутри li и li содержит вложенную ссылку
  if (li && li.querySelector('a')) {
    // Имитируем клик по первой вложенной ссылке внутри li
    li.querySelector('a').click();
  }
});

function handleResize() {
  const breakpoint = 767; // Здесь укажите свой брейкпоинт

  if (window.innerWidth > breakpoint) {
    // Закрываем меню, если разрешение экрана больше брейкпоинта
    mobileMenu.classList.remove('burger-menu--active');
    bodyLock.classList.remove('lock');
  }
}

// Навешиваем обработчик изменения размера экрана
window.addEventListener('resize', handleResize);

// Вызываем функцию handleResize при загрузке страницы
window.addEventListener('load', handleResize);



// // Глобальная переменная для хранения состояния слайдера
// var isSliderInitialized = false;
// var restaurantsList = $('.restaurants__list');

// // Инициализация Slick Slider
// function initSlider() {
//   if (restaurantsList.length && !isSliderInitialized) {
//     restaurantsList.slick({
//       dots: true,
//       arrows: false,
//       infinite: false,
//       // Другие опции и настройки
//     });

//     isSliderInitialized = true;
//   }
// }

// // Выключение Slick Slider
// function destroySlider() {
//   if (isSliderInitialized) {
//     restaurantsList.slick('unslick');
//     isSliderInitialized = false;
//   }
// }

// // Проверка брейкпоинта и инициализация/уничтожение слайдера
// function checkSlider() {
//   if (window.matchMedia("(max-width: 559px)").matches) {
//     initSlider();
//   } else {
//     destroySlider();
//   }
// }

// // Вызов проверки при загрузке страницы
// document.addEventListener('DOMContentLoaded', function() {
//   checkSlider();
// });

// // Добавление обработчика события изменения размеров окна
// window.addEventListener('resize', function() {
//   checkSlider();
// });


// // Навешиваем обработчик изменения размера экрана
// window.addEventListener('resize', handleResize);

// // Вызываем функцию handleResize при загрузке страницы
// window.addEventListener('load', handleResize);







// Функция для обновления/slick-инициализации слайдера
function initSlick() {
  $('.testimonials__carousel').slick({
    // Ваши настройки слайдера
    dots: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    fade: true,
    infinite: false,
    dotsClass: 'slick-dots testimonials__slick-dots',
    // ...
  });
}

// Инициализация слайдера при загрузке страницы
initSlick();

// Обработчик события изменения ориентации и изменения размера
function handleOrientationChange() {
  // Уничтожение/slick-деинициализация слайдера перед повторной инициализацией
  $('.testimonials__carousel').slick('unslick');

  // Повторная инициализация слайдера после изменения ориентации
  initSlick();
}

// Обработчик события изменения ориентации
window.addEventListener('orientationchange', handleOrientationChange);

// Обработчик события изменения размера экрана
window.addEventListener('resize', handleOrientationChange);





document.addEventListener('DOMContentLoaded', function () {
  var activeLink = document.querySelector('.menu__link--active');
  var targetId = activeLink ? activeLink.getAttribute('href', '') : '';

  function handleScroll() {
      var topPosition = window.scrollY;

      if (topPosition > 0) {
          if (activeLink) {
              activeLink.href = activeLink.dataset.originalHref;
              activeLink.classList.add('more', 'animation-link');
          }
      } else {
          if (activeLink) {
              activeLink.removeAttribute('href');
              activeLink.classList.remove('more', 'animation-link');
          }
      }
  }

  if (activeLink) {
      activeLink.dataset.originalHref = activeLink ? activeLink.getAttribute('href', '') : '';
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  function scrollToSection(targetId) {
      var targetSection = document.getElementById(targetId);

      if (targetSection) {
          var startPosition = window.scrollY;
          var targetPosition = targetSection.getBoundingClientRect().top + startPosition;
          var distance = targetPosition - startPosition;
          var startTime = null;

          function animation(currentTime) {
              if (startTime === null) startTime = currentTime;
              var timeElapsed = currentTime - startTime;
              var scrollY = easeInOut(timeElapsed, startPosition, distance, 1000);
              window.scrollTo(0, scrollY);
              if (timeElapsed < 1000) requestAnimationFrame(animation);
          }

          function easeInOut(t, b, c, d) {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
          }

          requestAnimationFrame(animation);
      }
  }

  document.querySelectorAll('.menu__link, .logo').forEach(function (link) {
      link.addEventListener('click', function (event) {
          var href = this.getAttribute('href');
          if (href && href.startsWith('#')) {
              event.preventDefault();
              console.log('Link clicked:', href);
              var targetId = href.substring(1);
              if (targetId) {
                  scrollToSection(targetId);
              }
          }
      });
  });

  if (activeLink) {
      activeLink.addEventListener('click', function (event) {
          event.preventDefault();
          var clickedTargetId = this.getAttribute('href') ? this.getAttribute('href').substring(1) : '';
          if (clickedTargetId) {
              scrollToSection(clickedTargetId);
          }
      });
  }
});






document.addEventListener('DOMContentLoaded', function () {
  var activeBreadcrumbLinks = document.querySelectorAll('.breadcrumbs__link--active');

  if (activeBreadcrumbLinks) {
      activeBreadcrumbLinks.forEach(function(link) {
          link.removeAttribute('href');
      });
  }
});


// // Глобальная переменная для хранения состояния слайдера
// var isSliderInitialized = false;
// var promotionList = $('.promotion__list');

// // Инициализация Slick Slider
// function initSlider() {
//   if (promotionList.length && !isSliderInitialized) {
//     promotionList.slick({
//       dots: true,
//       arrows: false,
//       infinite: false,
//       // Другие опции и настройки
//     });

//     isSliderInitialized = true;
//   }
// }

// // Выключение Slick Slider
// function destroySlider() {
//   if (isSliderInitialized) {
//     promotionList.slick('unslick');
//     isSliderInitialized = false;
//   }
// }

// // Проверка брейкпоинта и инициализация/уничтожение слайдера
// function checkSlider() {
//   if (window.matchMedia("(max-width: 559px)").matches) {
//     initSlider();
//   } else {
//     destroySlider();
//   }
// }

// // Вызов проверки при загрузке страницы
// document.addEventListener('DOMContentLoaded', function() {
//   checkSlider();
// });

// // Добавление обработчика события изменения размеров окна
// window.addEventListener('resize', function() {
//   checkSlider();
// });


// // Навешиваем обработчик изменения размера экрана
// window.addEventListener('resize', handleResize);

// // Вызываем функцию handleResize при загрузке страницы
// window.addEventListener('load', handleResize);





// Глобальные переменные для хранения состояния слайдеров
var isPromotionSliderInitialized = false;
var isRestaurantsSliderInitialized = false;

var promotionList = $('.promotion__list');
var restaurantsList = $('.restaurants__list');

// Инициализация Slick Slider для акции
function initPromotionSlider() {
  if (promotionList.length && !isPromotionSliderInitialized) {
    promotionList.slick({
      dots: true,
      arrows: false,
      infinite: false,
      // Другие опции и настройки
    });

    isPromotionSliderInitialized = true;
  }
}

// Инициализация Slick Slider для ресторанов
function initRestaurantsSlider() {
  if (restaurantsList.length && !isRestaurantsSliderInitialized) {
    restaurantsList.slick({
      dots: true,
      arrows: false,
      infinite: false,
      // Другие опции и настройки
    });

    isRestaurantsSliderInitialized = true;
  }
}

// Выключение Slick Slider для акции
function destroyPromotionSlider() {
  if (isPromotionSliderInitialized) {
    promotionList.slick('unslick');
    isPromotionSliderInitialized = false;
  }
}

// Выключение Slick Slider для ресторанов
function destroyRestaurantsSlider() {
  if (isRestaurantsSliderInitialized) {
    restaurantsList.slick('unslick');
    isRestaurantsSliderInitialized = false;
  }
}

// Проверка брейкпоинта и инициализация/уничтожение слайдеров
function checkSliders() {
  if (window.matchMedia("(max-width: 559px)").matches) {
    initPromotionSlider();
    initRestaurantsSlider();
  } else {
    destroyPromotionSlider();
    destroyRestaurantsSlider();
  }
}

// Вызов проверки при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  checkSliders();
});

// Добавление обработчика события изменения размеров окна
window.addEventListener('resize', function() {
  checkSliders();
});

// Навешиваем обработчик изменения размера экрана
window.addEventListener('resize', handleResize);

// Вызываем функцию handleResize при загрузке страницы
window.addEventListener('load', handleResize);




$(function(){
  $('.popular-categories__btn').on('click', function(){ 
    $('.popular-categories__btn').removeClass('popular-categories__btn--active');
    $(this).addClass('popular-categories__btn--active');
  });

  

  $(".product-page__star").rateYo({
    starWidth: "16px",
    readOnly: true,
    starSvg: '<svg class="icon"><use xlink:href="images/sprite.svg#icon-star"></use></svg>',
    rating: 4,
    ratedFill: '#FFB800',
    normalFill: "#C1C1C1",
    spacing: '6px',
    });

  // $(".filter-range__input").ionRangeSlider({ 
  //   type: "double",
  //   min: 0,
  //   max: 1000,
  //   from: 200,
  //   to: 800,
  //   prefix: "$",
  // });



  var $range = $(".filter-range__input"),
    $inputFrom = $(".filter-range__from"),
    $inputTo = $(".filter-range__to"),
    instance,
    min = 65,
    max = 1130,
    from = 0,
    to = 0;

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});




  

$('.filter-select').styler();




  $(window).scroll(function(){
    $('.header__fixed').toggleClass('header__fixed--scroll', $(this).scrollTop() > 20);
  });
});



$('.product-page__buy-btn').styler();

(function($) {
  $(function() {
  
    $('.product-page__buy-input').styler();
  
  });
  })(jQuery);



document.addEventListener('DOMContentLoaded', function () {
  var activeNav = document.querySelector('.pagination__nav--active');
  var activeLink = document.querySelector('.pagination__link--active');
  var activeMore = document.querySelector('.pagination__more');

  if (activeNav) {
      activeNav.removeAttribute('href');
      activeNav.classList.remove('pagination__link--animation');
  }

  if (activeLink) {
      activeLink.removeAttribute('href');
      activeLink.classList.remove('pagination__link--animation');
  }

  if (activeMore) {
      activeMore.removeAttribute('href');
      activeMore.classList.remove('pagination__link--animation');
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const filterButton3 = document.getElementById('burger-btn3');
  const filterButton4 = document.getElementById('burger-btn4');
  const filtersBlock = document.querySelector('.catalog__filters');
  const body = document.querySelector('body');

  function addClasses() {
    filtersBlock.classList.add('catalog__filters--hidden');
    document.documentElement.classList.add('lock');
  }

  function removeClasses() {
    filtersBlock.classList.remove('catalog__filters--hidden');
    document.documentElement.classList.remove('lock');
  }

  if (filterButton3 && filterButton4 && filtersBlock && body) {
    filterButton3.addEventListener('click', addClasses);

    filterButton4.addEventListener('click', removeClasses);

    // Закрывать блок при клике вне него
    document.addEventListener('click', function (event) {
      if (!filtersBlock.contains(event.target) && !filterButton3.contains(event.target)) {
        removeClasses();
      }
    });

    // Обработка клика по активным элементам внутри .catalog__filters
    filtersBlock.addEventListener('click', function (event) {
      const activeElementSelectors = ['button', 'input', 'a'];
      const isClickedOnActiveElement = activeElementSelectors.some(selector =>
        event.target.matches(selector)
      );

      if (isClickedOnActiveElement) {
        // Здесь вы можете добавить логику для активных элементов
        removeClasses();
      }
    });
  }
});



$('.product-page__carousel').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});


const myCarousel = new Carousel(document.querySelector("#myCarousel"), { 
  preload: 2,
  Dots: false,
});


Fancybox.bind('[data-fancybox="gallery"]', { 
  Thumbs: false,
  Toolbar: false,

  closeButton: "top",
  Carousel: { 
    Dots: true,
    on: { 
      change: (that) => { 
        myCarousel.slideTo(myCarousel.findPageForSlide(that.page), { 
          friction: 0,
        });
      },
    },
  },
});




function setValue() {
  // Получаем элемент поля ввода
  var inputElement = document.getElementById('value');

  // Устанавливаем значение свойства 'value' элемента
  inputElement.value = inputElement.value;
}










var mixContainer = document.querySelector('.popular-categories__products');

document.addEventListener('DOMContentLoaded', () => {
    if (mixContainer) {
        var mixer = mixitup(mixContainer);
    }
});


$('.product-page__tabs-link').on('click', function() { 
  // Удаляем класс 'product-page__tabs-link--active' у всех ссылок
  $('.product-page__tabs-link').removeClass('product-page__tabs-link--active');

  // Добавляем класс 'product-page__tabs-link--active' только к текущей ссылке
  $(this).addClass('product-page__tabs-link--active');
});