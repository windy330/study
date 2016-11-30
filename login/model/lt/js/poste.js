
//点击更换广告界面
$(function(){
    var index=1;
    $(".di").on('click',function(){
        if(index==4){
            return;
        }
        this.style.transition = 'all 2s';
        this.style.transform = 'translateX(-'+10*index+'rem)';
        index++;
    });


})
