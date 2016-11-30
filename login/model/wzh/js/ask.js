/**
 * Created by adr on 2016/11/25.
 */


$(function() {

    $(".point > div").mouseenter(function() {
        $(this)
            .addClass("active")
            .siblings("div")
            .removeClass("active");

        var index = $(this).index();
        $(".uu > ul")
            .eq(index)
            .addClass("selected")
            .css("display","block")
            .siblings()
            .removeClass("selected")
            .css("display","none");
    });
});

