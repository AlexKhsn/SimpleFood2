$(function(){
    
    $('.popular__categories-btn').on('click', function(){ 
        $('.popular__categories-btn').removeClass('popular__categories-btn--active');
        $(this).addClass('popular__categories-btn--active');
    });

    $('.testimonials__carousel').slick({
        dots: true,
        arrows: true,
        focusOnSelect: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });

    $(".star").rateYo({
        starWidth: "40px"
      });

    $(window).scroll(function(){
        $('.header').toggleClass('header--scroll', $(this).scrollTop() > 20);
    });
});



var mixer = mixitup('.popular__items');