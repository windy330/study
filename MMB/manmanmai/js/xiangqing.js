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
//                // ���ݴ���
        var data = {
            items: data.result
        }
        // ����ģ������
        var html = template('tpl', data);
        //console.log(html);
        document.querySelector('.test').innerHTML = html;
    }
});


