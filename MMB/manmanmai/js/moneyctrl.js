/**
 * Created by adr on 2016/12/27.
 */
$(function () {
    //初始页数1
    var num = 1;
    //option是否被创建
    var flag = false;
    var pages = null,
    flag2 = false; //这个标记是为了只给dom元素绑定一次事件
    //调用参数
    getajax();


    function getajax(page) {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getmoneyctrl',
            data: {pageid: page - 1},
            type: 'get',
            dataType: 'jsonp',
            success: function (data) {
                var str = ''; //初始化字符串
                //console.log(data)
                //获取页数
                pages = Math.ceil(data.totalCount / data.pagesize);

                var data = {
                    items: data.result
                }
                //console.log(data.items);
                // 调用模板引擎
                var html = template('moneyCtrl', data);
                $(".cu-list").html(html);

                 if(!flag){
                     //生成下拉菜单里面的option
                     for (var i = 1; i <= pages; i++) {
                         str += "<option value=" + i + ">" + i + "/" + pages + "</option>";
                     }

                     $('#selectPage').html(str);
                     flag = true;
                 }


            }
        });
    }

    //翻页代码
    $(document).on("click", "#before", function (e) {
        if (num > 1) {
            num--;
            getajax(num);
            $('#selectPage').val(num);
            console.log(num);
        }
    });

    $(document).on("click", "#behind", function (e) {
        if (num < pages) {
            num++;
            getajax(num);
            $('#selectPage').val(num);
            console.log(num);
        }
    });


        //点击页数跳转
        $(document).on("change", "select", function (e) {

           // window.location.href = "moneyctrl.html?pageid=" + $(this).val();
           // $(this).attr('selected', "selected");
            //获取要跳转的页面数值
            var value = $(this).val();
            getajax(value);


        });

})

