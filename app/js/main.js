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



// Глобальная переменная для хранения состояния слайдера
var isSliderInitialized = false;
var restaurantsList = $('.restaurants__list');

// Инициализация Slick Slider
function initSlider() {
  if (restaurantsList.length && !isSliderInitialized) {
    restaurantsList.slick({
      dots: true,
      arrows: false,
      infinite: false,
      // Другие опции и настройки
    });

    isSliderInitialized = true;
  }
}

// Выключение Slick Slider
function destroySlider() {
  if (isSliderInitialized) {
    restaurantsList.slick('unslick');
    isSliderInitialized = false;
  }
}

// Проверка брейкпоинта и инициализация/уничтожение слайдера
function checkSlider() {
  if (window.matchMedia("(max-width: 559px)").matches) {
    initSlider();
  } else {
    destroySlider();
  }
}

// Вызов проверки при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  checkSlider();
});

// Добавление обработчика события изменения размеров окна
window.addEventListener('resize', function() {
  checkSlider();
});




$(function(){
  $('.popular-categories__btn').on('click', function(){ 
    $('.popular-categories__btn').removeClass('popular-categories__btn--active');
    $(this).addClass('popular-categories__btn--active');
  });

  $('.testimonials__carousel').slick({
    dots: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    fade: true,
    infinite: false,
    dotsClass: 'slick-dots testimonials__slick-dots',
    responsive: [
      {
        breakpoint: 559,
        settings: {
          dots: false,
        }
      }],
    });

  $(".star").rateYo({
    starWidth: "40px"
    });

  $().ionRangeSlider({ 
    
  });

  $('input, select').styler();

  $(window).scroll(function(){
    $('.header__fixed').toggleClass('header__fixed--scroll', $(this).scrollTop() > 20);
  });
});



var mixer = mixitup('.popular-categories__products');

document.addEventListener('DOMContentLoaded', () => {
  
});