$("[data-effect]").each(function () {
    var a = $(this).text();
    $(this).text("");
    var ani = 0;
    var effect = $(this).attr("data-effect");
    var duration = $(this).attr("data-duration");
    for (i = 0; i < a.length; i++) {
        var sp = a.slice(i, i + 1);
        var new2 = $('<span class=' + effect + '></span>')
        $(this).append(new2);
        ani = ani + .15;
        $(this).find("span").eq(i).append(sp).css({
            "animation-delay": +ani + "s",
            "animation-duration": +duration + "s"
        });
    }
});