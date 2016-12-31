/**
 * Created by Administrator on 2016/12/30.
 */
//tu pian dian ji shi jian
$('.benti').hide();
$('#qq').on('click',function(){
    //$('.benti').addClass("on").removeClass('off');
    $('.benti').show();
})
$('.benti .tops').on('click',function(){
    //$('.benti').removeClass("on").addClass("off");
    $('.benti').hide();
})
$('.benti .bottoms').on('click',function(){
    //$('.benti').removeClass("on").addClass("off");
    $('.benti').hide();
})
//



$('.benti').hide();
$('#qq1').on('click',function(){
    //$('.benti').addClass("on").removeClass('off');
    $('.benti').show();
})
$('.benti .tops').on('click',function(){
    //$('.benti').removeClass("on").addClass("off");
    $('.benti').hide();
})
$('.benti .bottoms').on('click',function(){
    //$('.benti').removeClass("on").addClass("off");
    $('.benti').hide();
})
//


$('.benti').hide();
$('#qq2').on('click',function(){
    //$('.benti').addClass("on").removeClass('off');
    $('.benti').show();
})
$('.benti .tops').on('click',function(){
    //$('.benti').removeClass("on").addClass("off");
    $('.benti').hide();
})
$('.benti .bottoms').on('click',function(){
    //$('.benti').removeClass("on").addClass("off");
    $('.benti').hide();
})
//



$('.benti').hide();
$('#qq3').on('click',function(){
    //$('.benti').addClass("on").removeClass('off');
    $('.benti').show();
})
$('.benti .tops').on('click',function(){
    //$('.benti').removeClass("on").addClass("off");
    $('.benti').hide();
})
$('.benti .bottoms').on('click',function(){
    //$('.benti').removeClass("on").addClass("off");
    $('.benti').hide();
})

//zou you hua dong
//var lis=document.getElementById()
var uls=document.getElementById('tttt');
var zz=document.getElementById('zz');
var yy=document.getElementById('yy');
var immm=document.getElementsByClassName('jiang')
var lis = uls.children;
//var imgWidth = immm[0].offsetWidth;
var pic=0;
zz.onclick = function(){
    if(pic===lis.length-1 ){
        return;
    }
    pic++;
    var target = -pic*320;

    //animate(uls,target);
    uls.style.left=target+"px";
    console.log(target);
};
yy.onclick = function(){
    if(pic===0){
        return;
    }
    pic--;
    var target = -pic*320;
    //animate(uls,target);
    uls.style.left=target+"px";
    console.log(target);
}

