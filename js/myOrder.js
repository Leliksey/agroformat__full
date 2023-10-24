jQuery(document).ready(function ($) {
  $('.myOrder__header').click(function () {
    var accordionItem = $(this).closest('.myOrder__item');
  
    if (accordionItem.find('.myOrder__contacts').is(':hidden')) { 
      $('.myOrder__item').not(accordionItem).each(function () {
        var otherAccordion = $(this);
        otherAccordion.find('.myOrder__contacts').slideUp(200);
        otherAccordion.find('.myOrder__cart').slideUp(200);
        otherAccordion.find('.myOrder__header-arrow').removeClass('rotate180');
        otherAccordion.find('.myOrder__header').removeClass('align-start');
        otherAccordion.find('.myOrder__header-image').show();
        otherAccordion.find('.myOrder__header-price').show();
      });
  
      accordionItem.find('.myOrder__header-image').hide();
      accordionItem.find('.myOrder__header-price').hide();
      accordionItem.find('.myOrder__contacts').slideDown(200).css('display', 'flex');
      accordionItem.find('.myOrder__cart').slideDown(200).css('display', 'flex');
      accordionItem.find('.myOrder__header-arrow').addClass('rotate180');
      accordionItem.find('.myOrder__header').addClass('align-start');
    }
  });
  
  $('.myOrder__contacts-edit').click(function () {
    var editItem = $(this).closest('.myOrder__item');
    editItem.find(this).hide();
    editItem.find('.myOrder__contacts-save').css('display', 'flex');
    editItem.find('.myOrder__cart-delete').show();
    editItem.find('.myOrder__cart-count button').show();
  });

  $('.myOrder__contacts-save').click(function () {
    var saveItem = $(this).closest('.myOrder__item');
    saveItem.find(this).hide();
    saveItem.find('.myOrder__contacts-edit').css('display', 'flex');
    saveItem.find('.myOrder__cart-delete').hide();
    saveItem.find('.myOrder__cart-count button').hide();
  });

  $('.myOrder__contacts-cancel').click(function () {
    $('.myOrder__modal').addClass('active-modal');
    $('body').css('overflow', 'hidden');
  });
  
  $('.myOrder__modal-buttons button').click(function () {
    $('.myOrder__modal').removeClass('active-modal');
    $('body').css('overflow', '');
  });
});