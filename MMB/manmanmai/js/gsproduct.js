/**
 * Created by tutumissed on 2016/12/29.
 */
(function(){
    var flag = false;
    var shopId = 0;
    //初始化
    setProductList(0,0);
    $("#shop").on("click",function(){
    if(!flag){
            $.ajax({
                "url": "http://mmb.ittun.com/api/getgsshop",
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
                    document.querySelector('.shop').innerHTML = html;

                    $(".shop")[0].style.display = "block";
                    var tagShop = document.getElementById(shopId);
                    tagShop.lastChild.style.display="block";
                    flag = true;
                    var lis = document.querySelectorAll(".shop>li");
                    console.log(lis);
                    var i ;
                    for (i = 0; i < lis.length; i++) {
                        console.log(lis[i]);
                        lis[i].onclick=function () {
                            shopId = this.id;
                            for(var j=0;j<lis.length;j++){
                                lis[j].lastChild.style.display = "none";
                            }
                            this.lastChild.style.display="block";
                            setProductList(shopId);
                            $(".shop")[0].style.display="none";
                            flag = false;
                        };
                    }
                }
            });
    }else {
        $(".shop")[0].style.display="none";
        flag = false;
    }
    });

    // 设置商品列表
    function setProductList(shopId, areaId) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getgsproduct",
            data: {
                'shopid': shopId || 0,
                'areaid': areaId || 0
            },
            success: function(data) {
                console.log(data);
                // 数据处理
                var data = {
                    items: data.result
                }
                var html = template('tpl2', data);
                console.log(html);
                document.querySelector('.content').innerHTML = html;
                //dom.html(html);
            }
        })
    }


})();