/**
 * Created by A on 2016/11/26.
 */
$(function () {

    $(".cls_content ul li").mouseenter( function () {
        $(this)
            .addClass("now")
            .siblings()
            .removeClass("now");
    })
    //1
    $(".cls_content ul li").eq(0).mouseenter(function () {
        $(this).children("div").addClass("animated flash");
    })
    $(".cls_content ul li").eq(0).mouseout(function () {
        $(this).children("div").removeClass("animated flash");
    })
    //2
    $(".cls_content ul li").eq(1).mouseenter(function () {
        $(this).children("div").addClass("animated flip");
    })
    $(".cls_content ul li").eq(1).mouseout(function () {
        $(this).children("div").removeClass("animated flip");
    })
    //3
    $(".cls_content ul li").eq(2).mouseenter(function () {
        $(this).children("div").addClass("animated bounceIn");
    })
    $(".cls_content ul li").eq(2).mouseout(function () {
        $(this).children("div").removeClass("animated bounceIn");
    })
    //4
    $(".cls_content ul li").eq(3).mouseenter(function () {
        $(this).children("div").addClass("animated shake");
    })
    $(".cls_content ul li").eq(3).mouseout(function () {
        $(this).children("div").removeClass("animated shake");
    })
    //5
    $(".cls_content ul li div").eq(4).mouseenter(function () {
        $(this).children("img").addClass("animated rollIn");
    })
    $(".cls_content ul li div").eq(4).mouseout(function () {
        $(this).children("img").removeClass("animated rollIn");
    })
    //6
    $(".cls_content ul li").eq(5).mouseenter(function () {
        $(this).children("div").addClass("animated wobble");
    })
    $(".cls_content ul li").eq(5).mouseout(function () {
        $(this).children("div").removeClass("animated wobble");
    })
    //7
    $(".cls_content ul li").eq(6).mouseenter(function () {
        $(this).children("div").addClass("animated bounceInLeft");
    })
    $(".cls_content ul li").eq(6).mouseout(function () {
        $(this).children("div").removeClass("animated bounceInLeft");
    })
    //8
    $(".cls_content ul li").eq(7).mouseenter(function () {
        $(this).children("div").addClass("animated bounce");
    })
    $(".cls_content ul li").eq(7).mouseout(function () {
        $(this).children("div").removeClass("animated bounce");
    })
})