(function($) {
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);
var class4Id = $.getUrlParam("id");
$.ajax({//ajax����
    //����·��,��̬����
    url:'http://mmb.ittun.com/api/getproductcom?productid=1',
    data:{},//��������
    type:'get',//��������ķ�ʽ
    //˵��ֻ����json��ʽ������
    //����ǽ��ܵ���������ʽ�����ݾͻᱨ��
    //dataType:'json',
    success : function(info){//������ϱغ�ִ�еĻص�����
        //��ǰ������������ɫ���д���
        console.log(info);
        var htmlz = template('msgz',info);
        console.log(htmlz);
        // ���Ԫ��
        $('.brand').append(htmlz);
    }
});
