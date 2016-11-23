/** 封装tap事件 Created by Administrator on 2016/11/21..*/
/**
 * 定义一个jw对象 来承载我们封装的事件
 * @type {{}}
 */
window.jw = {};
/**
 * 封装tap,由于click事件在移动端有300毫秒延迟
 * 响应速度要比click快
 * @param dom
 * @param callback
 */
jw.tap = function(dom,callback){
    //存在且是dom对象
    if(dom && typeof  dom == 'object'){
        //初始化
        var isMove = false;
        var startTime = 0;

        dom.addEventListener('touchstart',function(e){
            //记录触摸开始的时间
            startTime = Date.now();
        });

        dom.addEventListener('touchmove',function(e){
            //移动
            isMove = true;
        });

        dom.addEventListener('touchend',function(e){
            //接触屏幕后没有引动,而且接触的时间小于150毫秒,判断为tap事件
            if(!isMove && (Date.now()-startTime) < 150){
                //执行tap绑定事件
                callback && callback(e);
            }
            //重置
            isMove = false;
            startTime = 0;
        });
    }
}