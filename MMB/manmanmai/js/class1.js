$(function(){//ҳ�������Ϻ����
    $.ajax({//ajax����
        url:'http://mmb.ittun.com/api/getbrandtitle',//����·��,��̬����
        data:{},//��������
        type:'get',//��������ķ�ʽ
        //˵��ֻ����json��ʽ������
        //����ǽ��ܵ���������ʽ�����ݾͻᱨ��
        //dataType:'json',
        success : function(info){//������ϱغ�ִ�еĻص�����
            //����template������ģ�������е������滻��info�е�����
            var html = template('msg',info);
            // ���Ԫ��
            $('.brand').append(html);
        }
    });

});