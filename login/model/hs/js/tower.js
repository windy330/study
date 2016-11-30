/**
 * Created by heshuai on 2016/11/25.
 */
window.onload = function(){
    banner();
};
window.itcast = {};/*定义了一个itcast的对象*/
//封装一个transitionEnd  过度结束事件
itcast.transitionEnd = function(dom,callback){
    /* 需要绑定事件的dom  绑定之后  当触发了 事件的时候  执行 callback */
    if(dom && typeof  dom == 'object'){
        dom.addEventListener('webkitTransitionEnd',function(){
            /*if(callback){
             callback();
             }*/
            callback && callback();
        });
        dom.addEventListener('transitionEnd',function(){
            callback && callback();
        });
    }
}
function banner(){
    //实现三个效果:图片的自动轮播,下标能跟随图片的变化,手动拨动图片
    var bannerBox = document.querySelector('.to_banner');//轮播图盒子
    var imageBox = bannerBox.children[0];//图片盒子
    var pointBox = bannerBox.children[1];//下标盒子
    var imageWidth = bannerBox.offsetWidth;//轮播图盒子的宽度
    var index = 0;//图片的索引

    //增加过渡效果
    function addTransition(){
        imageBox.style.transition = 'all .2s';
        //兼容性写法
        imageBox.style.webkitTransition = 'all .2s';
    };
    //移除过渡效果
    function removeTransition(){
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';
    };
    //设置移动距离
    function setTranslateX(x){
        imageBox.style.transform = 'translateX('+x+'px)';
        imageBox.style.webkitTransform = 'translate('+x+'px)'
    }

    //首先设置定时器,设置固定时间图片会向左移动,移动的过程为动画效果
    var timer = setInterval(function(){
        //每切换一张图片图片的索引加一
        index++;
        //每次都设置的话代码量十分冗余,因此需要封装成函数
        //设置过度
        //imageBox.style.transition = 'all .2s';
        addTransition();
        //向左移动
        //imageBox.style.transform = 'translateX('+(-imageWidth*index)+'px)';
        setTranslateX(-imageWidth*index);
    },1000);
    //判断:当图片移动到第0张的时候,需要将其索引瞬间转化成8,同理得索引9转化索引1
    //增加事件监听,当过渡结束的时候调用,然而并没有transitionEnd这个事件,因此在common封装一个事件
    //imageBox.addEventListener('transitionEnd',function(){
    itcast.transitionEnd(imageBox,function(){
        if(index >= 6){
            index = 1;
            //这里需要清除过渡效果,让图片盒子瞬间移回需要的位置
            removeTransition();
            setTranslateX(-imageWidth*index);
        }
        if(index <= 0){
            index = 5;
            removeTransition();
            setTranslateX(-imageWidth*index);
        }
        setPoint();
    });
    //过度结束事件会不停的让index得到更新,因此在下标的跟随移动中只需要直接调用所以就行了
    function setPoint(){
        //在样式中已经设置now属性的下标背景颜色会变成白色;
        //清空所有样式
        var points = pointBox.children;
        for(var i = 0; i < points.length; i++){
            pointBox.children[i].className = '';
        }
        points[index - 1].className = 'now';
    };

    //设置坐标位置
    //当手指放上的坐标位置
    var startX = 0;
    //滑动的时候的坐标位置
    var moveX = 0;
    //滑动的距离
    var distance = 0;
    //是否在滑动;
    var isMove = false;

    //touch事件的三个阶段
    imageBox.addEventListener('touchstart',function(e){
        //console.log(e.touches);
        startX = e.touches[0].clientX;
    });
    imageBox.addEventListener('touchmove',function(e){
        isMove = true;
        //在手动滑动的时候自动滚动需要被清理,清理定时器
        clearInterval(timer);
        moveX = e.touches[0].clientX;
        //滑动的距离就会是当前位置的X坐标减去初始位置的X坐标
        distance = moveX - startX;
        //设置滚动距离之前需要清除过渡
        removeTransition();
        //设置滚动距离
        setTranslateX(-imageWidth*index+distance);
    });
    imageBox.addEventListener('touchend',function(){
        //进行判断:如果滑动的距离超过了三分之一,则切换到下一张图片,否则不切换
        if(Math.abs(distance) > (imageWidth/3)&&isMove){
            if(distance>0){
                index --;
            }else{
                index ++;
            }
            //符合条件滚过去
            addTransition();
            setTranslateX(-index*imageWidth);
        }else{
            //不符合条件滚回来
            addTransition();
            setTranslateX(-index*imageWidth);
        }
        //事件结束后,重置参数
        startX = 0;
        moveX = 0;
        distance = 0;
        isMove = true;
        /*加上定时器*/
        clearInterval(timer);
        timer = setInterval(function(){
            index ++ ;
            /*让图片动画的滚动  translateX  transition 来实现动画*/
            /*给imageBox加上过度*/
            addTransition();
            /*给imageBox设置当前的位置 */
            setTranslateX(-index*imageWidth);
        },1000);

    });
};