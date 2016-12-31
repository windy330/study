/**
 * Created by Neptune on 2016/12/29.
 */
$(function() {//页面加在完毕后调用
    $.ajax({//ajax请求
        url: 'http://mmb.ittun.com/api/getcategorytitle',//请求路径,动态请求
        data: {},//请求数据
        type: 'get',//发送请求的方式
        //说明只能是json格式的数据
        //如果是接受的是其他形式的数据就会报错
        //dataType:'json',
        success: function (info) {//请求完毕后执行的回调函数
            //利用template方法将模版引擎中的数据替换成info中的数据
            //console.log(info);
            var html = template('title1', info);//利用模板吧info中的数据添加到title1中,然后赋值给html
            // 添加元素
            $('.categroys-title').append(html);
            getList($(".row-a"));
        }
    })
    function getList(dom){
        $(dom).one("click",(function(){
            var that=$(this);//获取当前点击事件
            $.ajax({//ajax请求
                url: 'http://mmb.ittun.com/api/getcategory',//请求路径,动态请求
                data: {"titleid":$(this).attr('fa')},//请求数据
                type: 'get',//发送请求的方式
                //说明只能是json格式的数据
                //如果是接受的是其他形式的数据就会报错
                //dataType:'json',
                success: function (data) {
                    console.log($(".row-a"));//请求完毕必后执行的回调函数
                    //利用template方法将模版引擎中的数据替换成data中的数据
                    console.log(data);
//                console.log("a");
                    var html = template('title2', data);
                    // 添加元素
                    that.parent().append(html);

                }
            })
        }))
        $(dom).on("click",function(){
            $(this).parent().find("ul").toggleClass('cts');
        })

    }

})

























