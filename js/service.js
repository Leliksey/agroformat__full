jQuery(document).ready(function ($) {
  $('.service__main-block-header').click(function(){
    var accordionItem = $(this).closest('.service__main-block__item');
    accordionItem.find('.service__main-block__hidden').slideToggle(200).css('display', 'flex');
    accordionItem.find('.service__main-block-arrow').toggleClass('rotate180');
    $('.service__main-block__item').not(accordionItem).find('.service__main-block__hidden').slideUp(200);
    $('.service__main-block__item').not(accordionItem).find('.service__main-block-arrow').removeClass('rotate180');
  });

  $('.request__button').click(function(){
    $('.request__form').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  })

  $('.request__form-close').click(function(e){
    e.preventDefault();
    $('.request__form').hide();
    $('body').css('overflow', '');
  })

  $('.request__form-wrapper').click(function() {
    var requestList = $(this).find('.request__form-wrapper__list');
    if (requestList.is(":visible")) {
        requestList.hide();
    } else {
        $('.request__form-wrapper__list').hide();
        requestList.show();
    }
  });

  $('.request__form-wrapper__list-item').click(function() {
    var value = $(this).text().trim();
    var inputElement = $(this).closest('.request__form-wrapper__list').siblings('input');
    inputElement.val(value);
  });
})