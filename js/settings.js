jQuery(document).ready(function ($) {
  $('.settings__edit').click(function (event) {
    event.preventDefault()
    $(this).hide();
    $('.settings__block-item img').show();
    $('.settings__block-item__passwordRepeat').addClass('input-show');
    $('.settings__block-item input').prop('disabled', false);
    $('.settings__save').css('display', 'flex');
  });

  $('.settings__save').click(function (event) {
    event.preventDefault()
    $(this).hide();
    $('.settings__block-item img').hide();
    $('.settings__block-item__passwordRepeat').removeClass('input-show');
    $('.settings__block-item input').prop('disabled', true);
    $('.settings__edit').css('display', 'flex');
  });
})