/**
 * Created by tutumissed on 2016/12/27.
 */
(function(){
    $.ajax({
        "url": "http://mmb.ittun.com/api/getindexmenu",
        dataType: 'jsonp',
        jsonp: "callback",
        success: function(data) {
            //data = data.result;
            console.log(data);
            // 数据处理
            var data = {
                items: data.result
            }
            // 调用模板引擎
            var html = template('tpl', data);
            //console.log(html);
            document.querySelector('.menu').innerHTML = html;
        }
    });
    // 对动态生成的元素绑定点击事件
    $(document).on('click','#7',function(){
        //console.log($('#7').parent());
        $('#7').parent().removeClass('menu').addClass('menuM');
    });

    $.ajax({
        url: "http://mmb.ittun.com/api/getmoneyctrl",
        dataType: 'jsonp',
        jsonp: "callback",
        success: function(data) {
            console.log(data);
            // 数据处理
            var data = {
                items2: data.result
            }
            console.log(data);
            // 在模板中遍历数据，并且渲染模板
            var html = template('moneyCtrl', data);
            //dom.html(html);
            console.log(html);
            document.querySelector('.content').innerHTML = html;
        }
    });
})();