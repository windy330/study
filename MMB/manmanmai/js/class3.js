(function($) {
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

})(jQuery);
var class3Id = $.getUrlParam("class3Id");
$(function(){//页面加在完毕后调用
    $.ajax({//ajax请求
        url:'http://mmb.ittun.com/api/getbrandproductlist?brandtitleid='+class3Id+'&pagesize=4',//请求路径,动态请求
        data:{},//请求数据
        type:'get',//发送请求的方式
        //说明只能是json格式的数据
        //如果是接受的是其他形式的数据就会报错
        //dataType:'json',
        success : function(info){//请求完毕必后执行的回调函数
            //利用template方法将模版引擎中的数据替换成info中的数据
            var html = template('msg3',info);
            // 添加元素
            $('.brand').append(html);
        }
    });

});