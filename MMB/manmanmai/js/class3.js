(function($) {
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

})(jQuery);
var class3Id = $.getUrlParam("class3Id");
$(function(){//ҳ�������Ϻ����
    $.ajax({//ajax����
        url:'http://mmb.ittun.com/api/getbrandproductlist?brandtitleid='+class3Id+'&pagesize=4',//����·��,��̬����
        data:{},//��������
        type:'get',//��������ķ�ʽ
        //˵��ֻ����json��ʽ������
        //����ǽ��ܵ���������ʽ�����ݾͻᱨ��
        //dataType:'json',
        success : function(info){//������ϱغ�ִ�еĻص�����
            //����template������ģ�������е������滻��info�е�����
            var html = template('msg3',info);
            // ���Ԫ��
            $('.brand').append(html);
        }
    });

});