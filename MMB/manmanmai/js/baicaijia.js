/**
 * Created by adr on 2016/12/29.
 */
$(function () {
    //��ȡ��ַ��id����
    var titleId = 0;

    getPro(titleId);

    var $ss;

    var flag=false;

    //��ȡ��Ʒ�б�

    $.ajax({
        url: 'http://mmb.ittun.com/api/getbaicaijiatitle',
        success: function (data) {
            console.log(data);
            var html = template('bcjTitle', data);
            $(".bcj-title").html(html);
            $ss=$('.tabs>li');

            $('.tabs>li').on('click', function () {
                titleId = $(this).attr('titleId');
                getPro(titleId);

                $ss.removeClass("now");
            });

            //nav����
            var conf = {
                viewDom: $navView[0],
                axis: 'x',
                overLeft: 100,
                overRight: 100
            };

            var sd = new Slider(conf);
            sd.start();
        }
    });


    function getPro(titleId) {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getbaicaijiaproduct',
            data: {titleid: titleId},
            type: 'get',
            dataType: 'jsonp',
            success: function (data) {
                var data = {
                    items: data.result
                }

                var html = template('bcjProductList', data);
                $(".bcj-list").html(html);


                if(!flag){
                    $ss.eq(0).addClass('now');
                    flag=true;
                }

            }

        });
    }


    //��������������

    var $navView = $('.bcj-title');


});




