/**
 * Created by Neptune on 2016/12/29.
 */
$(function() {//ҳ�������Ϻ����
    $.ajax({//ajax����
        url: 'http://mmb.ittun.com/api/getcategorytitle',//����·��,��̬����
        data: {},//��������
        type: 'get',//��������ķ�ʽ
        //˵��ֻ����json��ʽ������
        //����ǽ��ܵ���������ʽ�����ݾͻᱨ��
        //dataType:'json',
        success: function (info) {//������Ϻ�ִ�еĻص�����
            //����template������ģ�������е������滻��info�е�����
            //console.log(info);
            var html = template('title1', info);//����ģ���info�е�������ӵ�title1��,Ȼ��ֵ��html
            // ���Ԫ��
            $('.categroys-title').append(html);
            getList($(".row-a"));
        }
    })
    function getList(dom){
        $(dom).one("click",(function(){
            var that=$(this);//��ȡ��ǰ����¼�
            $.ajax({//ajax����
                url: 'http://mmb.ittun.com/api/getcategory',//����·��,��̬����
                data: {"titleid":$(this).attr('fa')},//��������
                type: 'get',//��������ķ�ʽ
                //˵��ֻ����json��ʽ������
                //����ǽ��ܵ���������ʽ�����ݾͻᱨ��
                //dataType:'json',
                success: function (data) {
                    console.log($(".row-a"));//������ϱغ�ִ�еĻص�����
                    //����template������ģ�������е������滻��data�е�����
                    console.log(data);
//                console.log("a");
                    var html = template('title2', data);
                    // ���Ԫ��
                    that.parent().append(html);

                }
            })
        }))
        $(dom).on("click",function(){
            $(this).parent().find("ul").toggleClass('cts');
        })

    }

})

























