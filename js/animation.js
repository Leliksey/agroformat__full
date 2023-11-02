$(document).ready(function() {
  $(".menu__item").mouseover(function(){
    $(this).find('.menu__item-list').slideDown(200);
  });
  $(".menu__item").mouseleave(function(){
    $(this).find('.menu__item-list').slideUp(200);
  });

  $(".lang").mouseover(function(){
    $('.lang__list').slideDown(200).css('display', 'flex');
  });
  $(".lang").mouseleave(function(){
    $('.lang__list').slideUp(200);
  });

  $(".search").mouseenter(function(){
    if (!$(this).hasClass('search__mobile')) {
        $('.search__modal').slideDown(200).css('display', 'flex');
    }
  });
  $(".search").mouseleave(function(){
    $('.search__modal').slideUp(200);
  });

  $(".login").mouseover(function() {
    $(".login__modal").slideDown(200);
  })
  $(".login").mouseleave(function(){
    $('.login__modal').slideUp(200);
  });

  $(".cart").mouseover(function() {
    $(".cart__modal").slideDown(200);
  })
  $(".cart").mouseleave(function(){
    $('.cart__modal').slideUp(200);
  });
})