/**
 * Created by heshuai on 2016/11/21.
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent
    }
}
window.onload = function(){
    heart();
    confirm();
    map();
};
function heart(){
    var heart = document.querySelector('.icon_heart');
    heart.onclick = function(){
        this.style.backgroundPosition = '-0.33333rem -0.40rem';
    };
};

function map(){
    var map = document.querySelector('.map');
    map.addEventListener('touchstart',function(){
        map.style.animation = 'dump .5s infinite';
        map.style.webkitAnimation = 'dump .5s infinite';
    });
    map.addEventListener('touchend',function(){
        map.style.animation = 'none';
        map.style.webkitAnimation = 'none';
    });
}
function confirm(){
    var time = null;
    var demand = document.querySelector('.demand');
    demand.addEventListener('click',function(){
        demand.style.backgroundColor = '#F9F9F9';
        demand.style.height = '2.13333rem';
    });

    var divs = demand.querySelectorAll('div');
    //var text = getInnerText(divs[0]);
    var aaa = null;
    for(var i = 0; i < divs.length; i++){
        divs[i].addEventListener('touchstart',function(){
            var text = getInnerText(this);
            time = text;
            aaa = getInnerText(divs[0]);
            divs[0].innerText = text;
            this.innerText = aaa;
            this.style.fontSize = '0.26667rem';
            this.style.color = '#333';
        });
        divs[i].addEventListener('touchend',function(){
            demand.style.height = '0.53333rem';
        });

    }
    console.log(time);

    var big = document.querySelector('#bigOne');
  var bigTop = document.querySelector('#bigTop');
  var double = document.querySelector('#double');
  var doubleTop = document.querySelector('#doubleTop');
  var goodstb1 = document.querySelector('.goodstb1');
  var goodstb2 = document.querySelector('.goodstb2');
    var bindex = 1;
    var dindex = 1;
    var cgoods = null;
    big.onclick = function(){
        bigTop.style.backgroundColor = '#999999';
        doubleTop.style.backgroundColor = '#E7E7E7';
        cgoods = '大床房';
        if(bindex % 2 == 0){
            big.style.height = '1.97333rem';
            goodstb1.style.backgroundPosition = '0 -2.93333rem';
            bindex++;
        }else{
            big.style.height = '5.89333rem';
            goodstb1.style.backgroundPosition = '0 -3.37333rem';
            bindex++;
        }
    };
    double.onclick = function(){
        cgoods = '双床房'
        doubleTop.style.backgroundColor = '#999999';
        bigTop.style.backgroundColor = '#E7E7E7';
        if(dindex % 2 == 0){
            double.style.height = '1.97333rem';
            goodstb2.style.backgroundPosition = '0 -2.93333rem';
            dindex++;
        }else{
            double.style.height = '5.89333rem';
            goodstb2.style.backgroundPosition = '0 -3.37333rem';
            dindex++;
        }
    };

    //确认键
    var confirm = document.querySelector('.nowConfirm');
    var mask = document.querySelector('.mask');
    var maskBox = document.querySelector('.mask_box');
    var submit = document.querySelector('.submit');
    var cancel = document.querySelector('.cancel');
    var textBox = document.querySelector('.text_box');

    confirm.addEventListener('touchstart',function(){
        mask.style.display = 'block';
        maskBox.className = 'mask_box bounceInDown';
        if(cgoods==null){
            textBox.innerText = '请选择房间';
            submit.innerText = '确认';
        }else if(time==null){
            textBox.innerText = '请选择入住时间';
            submit.innerText = '确认';
        }else{
            textBox.innerText = '您将在本店'+cgoods+time;
            submit.innerText = '就这了';
        }
    });
    submit.addEventListener('touchstart',function(){
        mask.style.display = 'none';
        $.ajax({
            type: 'post',
            url: 'shuai.php',
            data: {'time': time, goods: cgoods},
            success: function(info){
                console.log(info);
            }
        });
    });
    cancel.addEventListener('touchstart',function(){
        mask.style.display = 'none';
    });

    //点击按钮将数据发送到后台
    $('.btn').on('click',function(){
        //////////////////////////////////////我说的部分由输入得到
        //配置数据

        //调用模版引擎,就是让这个模版跑起来懂不...
        html = template('msg',data);
        //添加元素
        messages.append(html);
        //////////////////////////////////////对方说的部分由后台得到
        //先发送数据

    });

};









