/**
 * Created by heshuai on 2016/11/25.
 */
$(function(){
    var btn1 = $('.tr1');
    var btn2 = $('.tr2');
    btn1.on('touchstart',function(){
        $('.scenic').css('display','block');
        $('.path').css('display','none');
        btn1.addClass('active');
        btn2.removeClass('active');
    });
    btn2.on('touchstart',function(){
        $('.scenic').css('display','none');
        $('.path').css('display','block');
        btn2.addClass('active');
        btn1.removeClass('active');
    });

});