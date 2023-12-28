$(function(){
    
    
    
    $('.popular__categories-btn').on('click', function(){ 
        $('.popular__categories-btn').removeClass('popular__categories-btn--active');
        $(this).addClass('popular__categories-btn--active');
    });
});



var mixer = mixitup('.popular__items');