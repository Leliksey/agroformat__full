jQuery(document).ready(function ($) {
  $('#legal').change(function() {
    if ($(this).is(':checked')) {
      $('.checkout__main-legal').css('display', 'flex');
      $('.checkout__main-individual').hide();
      $('#individual').prop('checked', false);
      $('.checkout__main-contacts__wrapper input').not(this).next('label').removeClass('checkout__main-label__active');
      $(this).next('label').addClass('checkout__main-label__active');
      $('.checkout__main-payment__wrapper-cashless').css('display', 'flex');
    }
  });

  $('#individual').change(function() {
    if ($(this).is(':checked')) {
      $('.checkout__main-individual').css('display', 'flex');
      $('.checkout__main-legal').hide();
      $('#legal').prop('checked', false);
      $('.checkout__main-contacts__wrapper input').not(this).next('label').removeClass('checkout__main-label__active');
      $(this).next('label').addClass('checkout__main-label__active');
      $('.checkout__main-payment__wrapper-cashless').css('display', 'none');
    }
  });
  
  $('.checkout__main-delivery__wrapper input').change(function() {
    if ($(this).is(':checked')) {
        var currentWrapper = $(this).closest('.checkout__main-delivery__wrapper');
        $('.checkout__main-delivery__wrapper input').not(this).each(function() {
            $(this).prop('checked', false);
            $(this).next('label').removeClass('checkout__main-label__active');
        });
        $('.checkout__main-delivery__wrapper').not(currentWrapper).siblings('.checkout__main-delivery__hidden').hide();
        $(this).next('label').addClass('checkout__main-label__active');
        currentWrapper.siblings('.checkout__main-delivery__hidden').show();
    }
});


  $('.checkout__main-delivery__subwrapper input[type="radio"]').change(function() {
    var index = $('.checkout__main-delivery__subwrapper input[type="radio"]').index(this);
    $('.checkout__main-delivery__subwrapper input[type="radio"]').eq(index).prop('checked', true);
    $('.checkout__main-delivery__subwrapper input[type="radio"]').not(':eq(' + index + ')').prop('checked', false);
    $('.checkout__main-delivery__subwrapper-form').eq(index).css('display', 'flex');
    $('.checkout__main-delivery__subwrapper-form').not(':eq(' + index + ')').hide();
    $('.checkout__main-delivery__subwrapper label').eq(index).addClass('checkout__main-label__active');
    $('.checkout__main-delivery__subwrapper label').not(':eq(' + index + ')').removeClass('checkout__main-label__active');
});



  $('.checkout__main-delivery__subwrapper-form__item').click(function() {
    var deliveryList = $(this).find('.checkout__main-delivery__subwrapper-form__list');
    if (deliveryList.is(":visible")) {
        deliveryList.hide();
    } else {
        $('.checkout__main-delivery__subwrapper-form__list').hide();
        deliveryList.show();
    }
  });

  $('.checkout__main-delivery__subwrapper-form__list-item').click(function() {
    var value = $(this).text().trim();
    var inputElement = $(this).closest('.checkout__main-delivery__subwrapper-form__list').siblings('input');
    inputElement.val(value);
});

  $('.checkout__main-payment__wrapper input, .checkout__main-payment__hidden-block input').change(function() {
    if ($(this).closest('.checkout__main-payment__hidden-block').length) {
        const currentHiddenBlock = $(this).closest('.checkout__main-payment__hidden-block');
        currentHiddenBlock.find('input').not(this).prop('checked', false);
        currentHiddenBlock.find('label').removeClass('checkout__main-label__active');
        $(this).prop('checked', true);
        $(this).next('label').addClass('checkout__main-label__active');
    } else {
        if ($(this).is(':checked')) {
            $('.checkout__main-payment__wrapper input').not(this).each(function() {
                $(this).prop('checked', false);
            });
            $('.checkout__main-payment__wrapper label').removeClass('checkout__main-label__active');
            $(this).next('label').addClass('checkout__main-label__active');
        } else {
            $(this).next('label').removeClass('checkout__main-label__active');
        }
    }
  });

  $('.checkout__main-payment__block input[type="radio"]').change(function() {
      if ($(this).attr('id') === 'cashless' && $(this).is(':checked')) {
          $('.checkout__main-payment__hidden').css('display', 'flex');
      } else {
          if (!$('.checkout__main-payment__hidden input').is(':checked')) {
              $('.checkout__main-payment__hidden').hide();
              $('.checkout__card-price__withVAT').css('display', 'none');
              $('.checkout__card-price__withoutVAT').css('display', 'none');
              $('.checkout__card-price__totalFull').css('display', 'none');
              $('.checkout__card-price__totalHalf').css('display', 'none');
              $('.checkout__card-price__total').css('display', 'flex');
          }
      }
  });

  $('.checkout__main-payment__hidden input').change(function() {
      $('#cashless').prop('checked', true);
      $('.checkout__main-payment__hidden').css('display', 'flex');
      $("#cashless").next('label').addClass('checkout__main-label__active');
  });

  $('#withVAT').change(function() {
    if ($(this).is(':checked')) {
      $('.checkout__card-price__withVAT').css('display', 'flex');
      $('.checkout__card-price__withoutVAT').css('display', 'none');
    } 
  });
  
  $('#withoutVAT').change(function() {
    if ($(this).is(':checked')) {
      $('.checkout__card-price__withoutVAT').css('display', 'flex');
      $('.checkout__card-price__withVAT').css('display', 'none');
    }
  });

  $('#halfPrepayment').change(function() {
    if ($(this).is(':checked')) {
      $('.checkout__card-price__totalHalf').css('display', 'flex');
      $('.checkout__card-price__totalFull').css('display', 'none');
      $('.checkout__card-price__total').css('display', 'none');
    }
  });
  $('#fullPrepayment').change(function() {
    if ($(this).is(':checked')) {
      $('.checkout__card-price__totalFull').css('display', 'flex');
      $('.checkout__card-price__totalHalf').css('display', 'none');
      $('.checkout__card-price__total').css('display', 'none');
    }
  });
})