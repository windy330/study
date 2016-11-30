/**
 * Created by A on 2016/11/25.
 */
window.onload= function () {
    banner();
}
function banner() {
    var banner = document.querySelector('.pro_banner');
    var width = banner.offsetWidth;
    var imageBox = banner.querySelector('ul:first-child');
    var pointBox = banner.querySelector('ul:last-child');
    var points = pointBox.querySelectorAll('li');
    //公用方法
    var addTransition = function () {
        imageBox.style.webkitTransition = 'all 0.2s';
        imageBox.style.Transition = 'all 0.2s';
    }
    var removeTransition = function () {
        imageBox.style.webkitTransition = 'none';
        imageBox.style.Transition = 'none';
    }
    var setTransform = function (x) {
        imageBox.style.webkitTransform = 'translateX(' + x + 'px)';
        imageBox.style.Transform = 'translateX(' + x + 'px)';
    }
    var index = 1;
    var timer = setInterval(function () {
        index++;
        addTransition();
        setTransform(-index * width);
    }, 3000)
    itcast.transitionEnd(imageBox, function () {
        if (index >= 7) {
            index = 1;
            removeTransition();
            setTransform(-index * width);
        }
        else if (index <= 0) {
            index = 6;
            removeTransition();
            setTransform(-index * width);
        }
        setPoint();
    })
    var setPoint = function () {
        for (var i = 0; i < points.length; i++) {
            points[i].className = '';
        }
        points[index - 1].className = 'now';
    }
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var ismove = false;
    imageBox.addEventListener('touchstart', function (e) {
        clearInterval()
        startX = e.touches[0].clientX;
    });
    imageBox.addEventListener('touchmove', function (e) {
        ismove = true;
        moveX = e.touches[0].clientX;
        distanceX = moveX - startX;
        removeTransition();
        setTransform(-index * width + distanceX);
    });
    window.addEventListener('touchsend', function (e) {
        if (Math.abs(distanceX) > (width / 3) && ismove) {
            if (distanceX > 0) {
                index--;
            } else {
                index++;
            }
            addTransition();
            setTransform(-index * width);
        } else {
            addTransition();
            setTransform(-index * width);
        }
        startX = 0;
        moveX = 0;
        distanceX = 0;
        ismove = false;
        clearInterval(timer);
        var timer = setInterval(function () {
            index++;
            addTransition();
            setTransform(-index * width);
        }, 3000)
    });
}


