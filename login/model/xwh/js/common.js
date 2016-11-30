/*����js�ļ�*/
/*����һ������ ���������Ƿ�װ���¼�*/
window.itcast = {};/*������һ��itcast�Ķ���*/
//��װһ��transitionEnd  ���Ƚ����¼�
itcast.transitionEnd = function(dom,callback){
    /* ��Ҫ���¼���dom  ��֮��  �������� �¼���ʱ��  ִ�� callback */
    if(dom && typeof  dom == 'object'){
        dom.addEventListener('webkitTransitionEnd',function(){
            /*if(callback){
                callback();
            }*/
            callback && callback();
        });
        dom.addEventListener('transitionEnd',function(){
            callback && callback();
        });
    }
}
/*��װtap*/
itcast.tap = function(dom,callback){
    /*
     * Ҫ��  û�д��� touchmove �¼�
     *       ������Ӧ�ٶ�Ҫ��click��
    */
    if(dom && typeof  dom == 'object'){
        var isMove = false;
        var startTime = 0;
        dom.addEventListener('touchstart',function(e){
            //console.log('touchstart');
            //console.time('tap');/*��¼tap����������ڵ�ʱ��*/
            startTime = Date.now();
        });
        dom.addEventListener('touchmove',function(e){
            //console.log('touchmove');
            isMove = true;
        });
        dom.addEventListener('touchend',function(e){
            //console.log('touchend');
            //console.timeEnd('tap')/*��ӡtap�������������һ�μ�¼��ʱ���ʱ��*/
            /*�ж�  �Ƿ�����tap ��Ҫ��  һ��Ҫ��tap����Ӧʱ��150*/
            if(!isMove && (Date.now()-startTime) < 150){
                /*���� callback*/
                callback && callback(e);
            }
            /*���� ����*/
            isMove = false;
            startTime = 0;
        });
    }
}