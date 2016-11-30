/**
 * Created by heshuai on 2016/11/25.
 */
window.onload = function(){
    banner();
};
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
function banner(){
    //ʵ������Ч��:ͼƬ���Զ��ֲ�,�±��ܸ���ͼƬ�ı仯,�ֶ�����ͼƬ
    var bannerBox = document.querySelector('.to_banner');//�ֲ�ͼ����
    var imageBox = bannerBox.children[0];//ͼƬ����
    var pointBox = bannerBox.children[1];//�±����
    var imageWidth = bannerBox.offsetWidth;//�ֲ�ͼ���ӵĿ��
    var index = 0;//ͼƬ������

    //���ӹ���Ч��
    function addTransition(){
        imageBox.style.transition = 'all .2s';
        //������д��
        imageBox.style.webkitTransition = 'all .2s';
    };
    //�Ƴ�����Ч��
    function removeTransition(){
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';
    };
    //�����ƶ�����
    function setTranslateX(x){
        imageBox.style.transform = 'translateX('+x+'px)';
        imageBox.style.webkitTransform = 'translate('+x+'px)'
    }

    //�������ö�ʱ��,���ù̶�ʱ��ͼƬ�������ƶ�,�ƶ��Ĺ���Ϊ����Ч��
    var timer = setInterval(function(){
        //ÿ�л�һ��ͼƬͼƬ��������һ
        index++;
        //ÿ�ζ����õĻ�������ʮ������,�����Ҫ��װ�ɺ���
        //���ù���
        //imageBox.style.transition = 'all .2s';
        addTransition();
        //�����ƶ�
        //imageBox.style.transform = 'translateX('+(-imageWidth*index)+'px)';
        setTranslateX(-imageWidth*index);
    },1000);
    //�ж�:��ͼƬ�ƶ�����0�ŵ�ʱ��,��Ҫ��������˲��ת����8,ͬ�������9ת������1
    //�����¼�����,�����ɽ�����ʱ�����,Ȼ����û��transitionEnd����¼�,�����common��װһ���¼�
    //imageBox.addEventListener('transitionEnd',function(){
    itcast.transitionEnd(imageBox,function(){
        if(index >= 6){
            index = 1;
            //������Ҫ�������Ч��,��ͼƬ����˲���ƻ���Ҫ��λ��
            removeTransition();
            setTranslateX(-imageWidth*index);
        }
        if(index <= 0){
            index = 5;
            removeTransition();
            setTranslateX(-imageWidth*index);
        }
        setPoint();
    });
    //���Ƚ����¼��᲻ͣ����index�õ�����,������±�ĸ����ƶ���ֻ��Ҫֱ�ӵ������Ծ�����
    function setPoint(){
        //����ʽ���Ѿ�����now���Ե��±걳����ɫ���ɰ�ɫ;
        //���������ʽ
        var points = pointBox.children;
        for(var i = 0; i < points.length; i++){
            pointBox.children[i].className = '';
        }
        points[index - 1].className = 'now';
    };

    //��������λ��
    //����ָ���ϵ�����λ��
    var startX = 0;
    //������ʱ�������λ��
    var moveX = 0;
    //�����ľ���
    var distance = 0;
    //�Ƿ��ڻ���;
    var isMove = false;

    //touch�¼��������׶�
    imageBox.addEventListener('touchstart',function(e){
        //console.log(e.touches);
        startX = e.touches[0].clientX;
    });
    imageBox.addEventListener('touchmove',function(e){
        isMove = true;
        //���ֶ�������ʱ���Զ�������Ҫ������,����ʱ��
        clearInterval(timer);
        moveX = e.touches[0].clientX;
        //�����ľ���ͻ��ǵ�ǰλ�õ�X�����ȥ��ʼλ�õ�X����
        distance = moveX - startX;
        //���ù�������֮ǰ��Ҫ�������
        removeTransition();
        //���ù�������
        setTranslateX(-imageWidth*index+distance);
    });
    imageBox.addEventListener('touchend',function(){
        //�����ж�:��������ľ��볬��������֮һ,���л�����һ��ͼƬ,�����л�
        if(Math.abs(distance) > (imageWidth/3)&&isMove){
            if(distance>0){
                index --;
            }else{
                index ++;
            }
            //������������ȥ
            addTransition();
            setTranslateX(-index*imageWidth);
        }else{
            //����������������
            addTransition();
            setTranslateX(-index*imageWidth);
        }
        //�¼�������,���ò���
        startX = 0;
        moveX = 0;
        distance = 0;
        isMove = true;
        /*���϶�ʱ��*/
        clearInterval(timer);
        timer = setInterval(function(){
            index ++ ;
            /*��ͼƬ�����Ĺ���  translateX  transition ��ʵ�ֶ���*/
            /*��imageBox���Ϲ���*/
            addTransition();
            /*��imageBox���õ�ǰ��λ�� */
            setTranslateX(-index*imageWidth);
        },1000);

    });
};