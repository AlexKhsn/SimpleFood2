$(function(){
    
    
    
    $('.popular__categories-btn').on('click', function(){ 
        $('.popular__categories-btn').removeClass('popular__categories-btn--active');
        $(this).addClass('popular__categories-btn--active');
    });

    $(".star").rateYo({
        starWidth: "40px"
      });
});



var mixer = mixitup('.popular__items');