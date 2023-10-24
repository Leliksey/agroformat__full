$(document).ready(function() {
    $(".tehno__media-btn").on("click", function() {
        // Получаем идентификатор видео из атрибута данных
        var videoId = $(this).data("video");
        $(this).parents(".tehno__row").find("video").attr("data-video", videoId)
        // Находим соответствующее видео по идентификатору
        var video = $(".video[data-video='" + videoId + "']").eq(0);
        // Проверяем, существует ли видео и воспроизводится ли оно в данный момент
        if (video && video.paused !== undefined) {
        if (video.paused) {
            // Если видео приостановлено, запускаем его
            video.play();
            $(this).find("svg path").attr("fill", "yellow"); // Изменяем цвет кнопки
        } else {
            // Если видео уже воспроизводится, останавливаем его
            video.pause();
            $(this).find("svg path").attr("fill", "white"); // Изменяем цвет кнопки
        }
        }
    });

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
  });