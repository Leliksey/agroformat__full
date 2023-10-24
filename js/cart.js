$(document).ready(function() {
    $(".product__info-count__plus").click(function() {
        var currentVal = parseInt($(this).siblings(".product__info-count__current").text(), 10);
        if (!isNaN(currentVal)) {
            currentVal = currentVal + 1;
            $(this).siblings(".product__info-count__current").text(currentVal);
        }
    });

    $(".product__info-count__minus").click(function() {
        var currentVal = parseInt($(this).siblings(".product__info-count__current").text(), 10);
        if (!isNaN(currentVal) && currentVal > 1) {
            currentVal = currentVal - 1;
            $(this).siblings(".product__info-count__current").text(currentVal);
        }
    });
});