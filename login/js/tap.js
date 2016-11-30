/** ��װtap�¼� Created by Administrator on 2016/11/21..*/
/**
 * ����һ��jw���� ���������Ƿ�װ���¼�
 * @type {{}}
 */
window.jw = {};
/**
 * ��װtap,����click�¼����ƶ�����300�����ӳ�
 * ��Ӧ�ٶ�Ҫ��click��
 * @param dom
 * @param callback
 */
jw.tap = function(dom,callback){
    //��������dom����
    if(dom && typeof  dom == 'object'){
        //��ʼ��
        var isMove = false;
        var startTime = 0;

        dom.addEventListener('touchstart',function(e){
            //��¼������ʼ��ʱ��
            startTime = Date.now();
        });

        dom.addEventListener('touchmove',function(e){
            //�ƶ�
            isMove = true;
        });

        dom.addEventListener('touchend',function(e){
            //�Ӵ���Ļ��û������,���ҽӴ���ʱ��С��150����,�ж�Ϊtap�¼�
            if(!isMove && (Date.now()-startTime) < 150){
                //ִ��tap���¼�
                callback && callback(e);
            }
            //����
            isMove = false;
            startTime = 0;
        });
    }
}