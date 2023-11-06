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

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  };
  let options = {};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.elementAppears');
  for (let elm of elements) {
    observer.observe(elm);
  };

  let options1 = {};
  let observer1 = new IntersectionObserver(onEntry, options1);
  let elements1 = document.querySelectorAll('.textAppears__right');
  for (let elm of elements1) {
    observer1.observe(elm);
  };

  let options2 = {};
  let observer2 = new IntersectionObserver(onEntry, options2);
  let elements2 = document.querySelectorAll('.textAppears__left');
  for (let elm of elements2) {
    observer2.observe(elm);
  };

  $('.recommended__item-group button').click(function(event){
    event.stopPropagation();
    $(this).addClass('active');
  });

  $('.recommended__item-group button').mouseleave(function(){
    $(this).removeClass('active');
  });
})