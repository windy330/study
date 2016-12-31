/**
 * Created by 悟空 on 2016/12/29.
 */
/**
 * @param config
 * viewDom:显示窗口
 * overLeft:左侧最大吸附距离
 * overRight:右侧最大吸附距离
 * axis: 'x' or 'y'
 */
function Slider(config) {
    this.viewDom = config.viewDom;
    this.overLeft = config.overLeft || 0;
    this.overRight = config.overRight || 0;
    this.axis = config.axis || 'y';
}

Slider.prototype = {
    constructor: Slider,
    start: function () {
        var viewRange = 0;  //视窗范围
        var slideRange = 0; //滑动元素总的长度
        var viewDom = this.viewDom; //视窗元素
        var slideDom = viewDom.children[0];   //滑动元素
        var items = slideDom.children;  //滑动的子元素
        var overLeft = this.overLeft;
        var overRight = this.overRight;
        var nums = items.length;   //滑动子元素数量
        var axis = this.axis;
        var max = 0;    //可滑动最大距离
        var min = 0;    //可滑动最小距离
        var sMax = 0;   //吸附后的最大距离
        var sMin = 0;   //吸附后的最小距离

        //元素初始化设定
        viewDom.style.overflow = "hidden";
        position(0);
        if (this.axis == 'y') {
            viewRange = viewDom.offsetHeight;
        } else {
            viewRange = viewDom.offsetWidth;
        }

        //获取每一个item相对于父元素的距离,并保存在rates中
        var i;
        var rates = [];
        rates[0] = 0;
        for (i = 0; i < nums; i++) {
            if (axis == 'y') {
                slideRange += items[i].offsetHeight;
            } else {
                slideRange += items[i].offsetWidth;
            }
            rates[i + 1] = slideRange;
        }

        max = overLeft;
        sMax = 0;
        min = -(slideRange + overRight - viewRange);
        sMin = -(slideRange - viewRange);


        /**
         * 获取或设置translateY|X
         * @returns {number}
         */
        //transform: translateX(190px);
        function position() {
            if (typeof(arguments[0]) == 'number') {
                if (axis == 'y')
                    slideDom.style.transform = 'translateY(' + arguments[0] + 'px)';
                else
                    slideDom.style.transform = 'translateX(' + arguments[0] + 'px)';
            } else {
                return Number(slideDom.style.transform.match(/-?[0-9]+/));
            }
        }

        function addTransition() {
            slideDom.style.transition = 'all 0.2s';
        }

        function removeTransition() {
            slideDom.style.transition = 'none';
        }


        var distance = 0;
        var start = 0;
        var current = 0;
        var curPosition = 0;
        var startPosition = 0;
        var isMove = false;
        viewDom.addEventListener('touchstart', function (e) {
            if (axis == 'x')
                start = e.touches[0].clientX;
            else
                start = e.touches[0].clientY;
            startPosition = position();
        });

        viewDom.addEventListener('touchmove', function (e) {
            isMove = true;
            removeTransition();
            if (axis == 'x')
                current = e.touches[0].clientX;
            else
                current = e.touches[0].clientY;
            distance = current - start;
            var curPro = startPosition + distance;
            if (curPro > min && curPro < max)
                position(curPro);
        });

        viewDom.addEventListener('touchend', function (e) {
            if (isMove) {
                curPosition = startPosition + distance;
                if (curPosition > sMax)
                    curPosition = sMax;
                if (curPosition < sMin)
                    curPosition = sMin;
                addTransition();
                position(curPosition);
                startPosition = 0;
                distance = 0;
                isMove = false;
            }
        });


        //给items注册点击事件
        for (i = 0; i < nums; i++) {
            items[i].sliderIndex = i;
            items[i].addEventListener('click', function (e) {
                var index = this.sliderIndex;
                console.log(index);
                var curPro = -rates[index];
                if (curPro > sMin && curPro < sMax) {
                    addTransition();
                    position(curPro);
                }
            });
        }
    }
};