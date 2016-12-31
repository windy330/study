
    //用于获取上一个页面跳转时的数据name
    (function($) {
        $.getUrlParam = function(name) {
            var reg = new RegExp("(^|&)" +
                name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }

    })(jQuery);
//    console.log($.getUrlParam("id"))
    //调用getUrlParam函数获取class1中的"id"
    var class2Id = $.getUrlParam("brandTitleId");
    $.ajax({//ajax请求
        //请求路径,动态请求
        url:'http://mmb.ittun.com/api/getbrand?brandtitleid='+ class2Id,
        data:{},//请求数据
        type:'get',//发送请求的方式
        //说明只能是json格式的数据
        //如果是接受的是其他形式的数据就会报错
        //dataType:'json',
        success : function(info){//请求完毕必后执行的回调函数
            //对前三个的数标颜色进行处理
            for( var i = 0; i < info["result"].length; i++ ){
                if( info["result"][i]["brandId"]%10 == 0 ){
                    info["result"][i]["brandColor"] = "#F10E0E";
                }else if(info["result"][i]["brandId"]%10 == 1){
                    info["result"][i]["brandColor"] = "#FF9314";
                }else if(info["result"][i]["brandId"]%10 == 2){
                    info["result"][i]["brandColor"] = "#8ADF5B";
                }
            }

            var html2 = template('msg2',info);
            // 添加元素
            $('.brand').append(html2);
        }
    });

