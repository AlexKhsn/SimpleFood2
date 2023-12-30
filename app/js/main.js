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
        appendArrows: $('.slick-dots'),
      });

    $(".star").rateYo({
        starWidth: "40px"
      });
});



var mixer = mixitup('.popular__items');