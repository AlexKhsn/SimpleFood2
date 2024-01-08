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
    });

  $(".star").rateYo({
    starWidth: "40px"
    });

  $().ionRangeSlider({ 
    
  });

  $('input, select').styler();

  $(window).scroll(function(){
    $('.header').toggleClass('header--scroll', $(this).scrollTop() > 20);
  });
});



var mixer = mixitup('.popular-categories__products');