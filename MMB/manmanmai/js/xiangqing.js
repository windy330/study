/**
 * Created by qianyi on 2016/12/29.
 */




$.ajax({
    "url": "http://mmb.ittun.com/api/getmoneyctrlproduct?productid=20",
    dataType: 'jsonp',
    jsonp: "callback",
    success: function(data) {
        //data = data.result;
        console.log(data);
//                // 数据处理
        var data = {
            items: data.result
        }
        // 调用模板引擎
        var html = template('tpl', data);
        //console.log(html);
        document.querySelector('.test').innerHTML = html;
    }
});


