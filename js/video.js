jQuery(document).ready(function ($) {
  $('.video__block-item__header').click(function() {
    var videoList = $(this).siblings('.video__block-hidden');
    var arrow = $(this).find('.video__block-item__arrow');
    var hiddenArrow = $(this).find('.video__block-item__arrow-hidden');
    var title = $(this).find('.video__block-item__title');
    if (videoList.is(":visible")) {
        videoList.slideUp(200);
        arrow.show();
        hiddenArrow.hide();
        title.removeClass('title-active');
    } else {
        $('.video__block-hidden').slideUp(200);
        $('.video__block-item__arrow').show();
        $('.video__block-item__arrow-hidden').hide();
        $('.video__block-item__title').removeClass('title-active');
        videoList.slideDown(200).css('display', 'flex'); 
        arrow.hide();
        hiddenArrow.show();
        title.addClass('title-active');
    }
  });
  $('.video__block-hidden__item-header').click(function() {
    var subHiddenVideoList = $(this).siblings('.video__block-subHidden');
    var subHiddenArrow = $(this).find('.video__block-hidden__item-arrow');
    if (subHiddenVideoList.is(":visible")) {
        subHiddenVideoList.slideUp(200);
        subHiddenArrow.removeClass('rotate180');
    } else {
        $('.video__block-subHidden').slideUp(200);
        $('.video__block-hidden__item-arrow').removeClass('rotate180');
        subHiddenVideoList.slideDown(200).css('display', 'flex'); 
        subHiddenArrow.addClass('rotate180');
    }
  });
});