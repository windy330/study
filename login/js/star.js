/**
 * Created by Administrator on 2017/11/27.
 */
//function drawStart(starPic) {
//    ctx.drawImage(starPic,700,700);
//}
//对象
var starObj = function(){
    this.x;
    this.y;

    this.picNo;
    this.time;

    this.ySpeed;
}
//对象初始化方法
starObj.prototype.init = function(){
    this.x = Math.random()*w;
    this.y = Math.random()*h;

    //this.picNo = 0;//同步闪
    this.picNo =Math.floor( Math.random()*7);//异步闪
    this.timer =0;


    this.ySpeed = Math.random()-0.05;//(-0.07,0.0.07]
}
//对象的更新方法
starObj.prototype.update = function(){
    //随机位移
    this.y += this.ySpeed*0.1;
    //重生判断
    if(this.y > h || this.y < 0){
        this.init();
        return;
    }

    this.timer += deltaTime;
    if(this.timer > 50){
        this.picNo +=1;
        //获得7的余数,决定播放的序列帧
        this.picNo %=7;
        this.timer = 0;
    }
}
// 对象的绘制方法
starObj.prototype.draw = function(){
    //ctx.drawImage(starPic,this.x,this.y);
    ctx.drawImage(starPic, this.picNo*7, 0, 7, 7, this.x, this.y, 7, 7);
}
// 遍历星星对象,执行绘制方法
function drawStars() {
    for(var i=0;i<stars.length;i++){
        stars[i].update();
        stars[i].draw();
        //console.log(127);//@T:true
    }
}