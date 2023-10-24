$(document).ready(function() {
    $(".catalog__view").click(function() {
        $(this).find("svg").toggleClass("active");
        $(this).parents(".catalog__products").find(".catalog__products-grid").toggleClass("catalog__products-column");
    })
    $(".catalog__filter-btn_mobile").click(function() {
        $(this).toggleClass("open");
        $(".filter").slideToggle();
    })
    $(".catalog__filter-btn_mobile svg").click(function(e) {
        e.stopPropagation();
        $(".catalog__filter-btn_mobile").toggleClass("open");
        $(".filter").slideToggle();
    });
    var select = $("#catalog__sort");

    // Создаем временный элемент для измерения ширины текста
    var temp = $("<span>").css({ display: 'none', 'font-size': select.css('font-size') });
    $('body').append(temp);

    select.on("change", function() {
        var selectedIndex = select.prop("selectedIndex");
        var optionText = select.find("option:eq(" + selectedIndex + ")").text();

        // Измеряем ширину текста во временном элементе
        temp.text(optionText);
        var optionWidth = temp.width();

        // Устанавливаем ширину select, учитывая небольшой отступ
        select.css('width', optionWidth - 30);
    });

    // Вызываем событие "change" для установки начальной ширины
    select.trigger("change");
})