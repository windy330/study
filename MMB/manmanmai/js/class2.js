
    //���ڻ�ȡ��һ��ҳ����תʱ������name
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
    //����getUrlParam������ȡclass1�е�"id"
    var class2Id = $.getUrlParam("brandTitleId");
    $.ajax({//ajax����
        //����·��,��̬����
        url:'http://mmb.ittun.com/api/getbrand?brandtitleid='+ class2Id,
        data:{},//��������
        type:'get',//��������ķ�ʽ
        //˵��ֻ����json��ʽ������
        //����ǽ��ܵ���������ʽ�����ݾͻᱨ��
        //dataType:'json',
        success : function(info){//������ϱغ�ִ�еĻص�����
            //��ǰ������������ɫ���д���
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
            // ���Ԫ��
            $('.brand').append(html2);
        }
    });

