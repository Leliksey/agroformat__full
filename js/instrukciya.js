$(document).ready(function() {
    $(".instrukciya__item").click(function() {
        $(this).toggleClass("open");
        var content = $(this).next(".instrukcions");
        if (content.is(":visible")) {
          content.slideUp();
        } else {
          content.slideDown();
        }
      });
      $(".instrukciya__item.open").next().slideToggle();
      $(".download__link").click(function() {
        $(this).parents('.download').find(".if_download").show();
    })
});