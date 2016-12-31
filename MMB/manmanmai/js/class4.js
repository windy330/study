(function($) {
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);
var class4Id = $.getUrlParam("id");
$.ajax({//ajax请求
    //请求路径,动态请求
    url:'http://mmb.ittun.com/api/getproductcom?productid=1',
    data:{},//请求数据
    type:'get',//发送请求的方式
    //说明只能是json格式的数据
    //如果是接受的是其他形式的数据就会报错
    //dataType:'json',
    success : function(info){//请求完毕必后执行的回调函数
        //对前三个的数标颜色进行处理
        console.log(info);
        var htmlz = template('msgz',info);
        console.log(htmlz);
        // 添加元素
        $('.brand').append(htmlz);
    }
});
