<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        html,body{
            width: 100%;
            height:100%;
            margin:0;
            padding:0;
            overflow: hidden;
        }
        .target{
            width: 250px;
            border-radius:50%;
            pointer-events:visible;
            position:absolute;
            top:50%;
            left:50%;
            text-align: center;
        }

        .target:hover{
            cursor:pointer;
        }
        .target:hover span{

            font-weight:600;
            color:#ddd;
        }
        span{color:#666;}


    </style>
</head>
<body>
<div class="target"><span style="white-space: pre-line;font-size:20px;">- Click or Hover -</span></div>
<canvas id="cvs"></canvas>
</body>
</html>

<script type="text/javascript">
    (function(){
        var w_w=window.innerWidth,
                w_h=window.innerHeight,
                centerX=w_w/2,
                centerY=w_h/2,
                target=document.getElementsByTagName("div")[0],
                comets=[],
                min_radius=125,
                max_radius=250,
                ifHover=false,
                ifClick=false,
                change=false;

        target.style.height=window.getComputedStyle(target,null).width;
        target.style.marginLeft=-parseInt(target.style.height)/2+"px";
        target.style.marginTop=-parseInt(target.style.height)/2+"px";
        target.style.lineHeight=target.style.height;

        var canvas=document.getElementById("cvs");
        cvs.width=w_w;
        cvs.height=w_h;
        cvs.setAttribute("width",w_w+"px");
        cvs.setAttribute("height",w_h+"px");
        cvs.setAttribute("backgroundColor","#000000");


        var ctx=canvas.getContext("2d");




        function random(min,max){
            return min+(max-min)*Math.random();
        }

        function comet(){
            comets.push(this);
            this.speed=(Math.floor(Math.random() * 1.5) + 0.5)*Math.PI/180;
            this.rotation=Math.random()*Math.PI*2;
            this.y=this.origin=(random(min_radius,max_radius)+random(min_radius,max_radius))/2;
            this.x=0;

            this.collapseBonus = this.origin - 180;
            if(this.collapseBonus < 0){
                this.collapseBonus = 0;
            }
            this.shrinkRadius=max_radius/2 + this.collapseBonus;
            this.expandRadius=random(-window.innerHeight,-min_radius);
            this.color = 'rgba(255,255,255,'+ Math.abs(1 - (this.origin) / 250) +')';
        }

        comet.prototype.draw=function (){
            this.rotation+=this.speed;

            if(ifHover){
                if(this.y>this.shrinkRadius) this.y-=2.5;
                if(this.y<this.shrinkRadius) this.y+=2.5;
            }
            else if(ifClick){
                if(this.y>this.expandRadius) this.y-=4;

            }
            else{
                if(this.y>this.origin) this.y-=2;
                if(this.y<this.origin) this.y+=2;
            }

            ctx.save();
            if(ifClick){ctx.fillStyle="rgba(255,255,255,.6)";}
            else
                ctx.fillStyle=this.color;
            ctx.translate(centerX,centerY);
            ctx.rotate(this.rotation);
            ctx.fillRect(this.x,this.y,1,1);
            ctx.restore();


        };

        target.addEventListener("click",function(){if(change) {
            ifClick=false;
        }
        else{
            ifClick=true;
        }
            change=!change;});



        target.addEventListener("mouseover",function(){
            ifHover=true;
        });

        target.addEventListener("mouseout",function(){

            ifHover=false;

        });

        function animate(){
            ctx.fillStyle="rgba(25,25,25,.1)";
            ctx.fillRect(0,0,w_w,w_h);
            comets.forEach(function(element,index,group){
                element.draw();
            });
            requestFrame(animate);
        }

        window.requestFrame = (function(){
            return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    function( callback ){
                        window.setTimeout(callback, 1000 / 60);
                    };
        })();


        function initial(){
            ctx.fillStyle="rgba(25,25,25,1)";
            ctx.fillRect(0,0,w_w,w_h);
            for(var i=0;i<2500;i++){
                new comet();
            }

            animate();
        }

        initial();




    })();
</script>