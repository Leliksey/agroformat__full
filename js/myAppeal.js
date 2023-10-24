jQuery(document).ready(function ($) {
  $('.myAppeal__header').click(function () {
    var accordionItem = $(this).closest('.myAppeal__item');
  
    if (accordionItem.find('.myAppeal__details').is(':hidden')) { 
      $('.myAppeal__item').not(accordionItem).each(function () {
        var otherAccordion = $(this);
        otherAccordion.find('.myAppeal__details').slideUp(200);
        otherAccordion.find('.myAppeal__header-answer').show();
        otherAccordion.find('.myAppeal__header-description').show();
        otherAccordion.find('.myAppeal__description-update').slideUp(200);
        otherAccordion.find('.myAppeal__answer-update').slideUp(200);
        otherAccordion.find('.myAppeal__files').slideUp(200);
        otherAccordion.find('.myAppeal__header-arrow').removeClass('rotate180');
      });
      accordionItem.find('.myAppeal__details').slideDown(200).css('display', 'flex');
      accordionItem.find('.myAppeal__header-answer').hide();
      accordionItem.find('.myAppeal__header-description').hide();
      accordionItem.find('.myAppeal__description-update').slideDown(200);
      accordionItem.find('.myAppeal__answer-update').slideDown(200);
      accordionItem.find('.myAppeal__files').slideDown(200).css('display', 'grid');
      accordionItem.find('.myAppeal__header-arrow').addClass('rotate180');
    }
  });
  
  $('.myAppeal__details-edit').click(function () {
    var editItem = $(this).closest('.myAppeal__item');
    editItem.find(this).hide();
    editItem.find('.myAppeal__details-save').css('display', 'flex');
  });

  $('.myAppeal__details-save').click(function () {
    var saveItem = $(this).closest('.myAppeal__item');
    saveItem.find(this).hide();
    saveItem.find('.myAppeal__details-edit').css('display', 'flex');
  });
});