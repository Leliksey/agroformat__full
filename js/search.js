$(document).ready(function() {
    $(".searchPage__search-input").on('input', function() {
        $(this).parent().find("span").hide();
        if($(this).val() === ""){
            $(this).parent().find("span").show();
        }
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


    $(".download__link").click(function() {
        $(this).parents('.download').find(".if_download").show();
    })


    $(".pagination__prev").click(function() {
        $(".pagination__item.active").prev().addClass("active");
        $(".pagination__item.active").next().removeClass("active");
    });
    $(".pagination__next").click(function() {
        $(".pagination__item.active").next().addClass("active");
        $(".pagination__item.active").prev().removeClass("active");
    });

    $(".pagination__item").click(function() {
        $(".pagination__item").removeClass("active");
        $(this).addClass("active");
      });


      $(".recommended__item").click(function() {
        $(this).next().slideToggle();
      })
});