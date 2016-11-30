/**
 * Created by zzp on 2016/11/23.
 */
$(function () {
    /*设置日期*/
    var week=new Date();
    week=week.getDay();
    var weekarr=['日','一','二','三','四','五','六']
    week=weekarr[week];
    $("#week").html("星期"+week);
  $.ajax({
        type: 'get',
        url: 'http://api.map.baidu.com/telematics/v3/weather',
        data: {
            location: '上海', output: 'json', ak: '0A5bc3c4fb543c8f9bc54b77bc155724'
        },
        dataType:'jsonp',
        success:function(info){
            /*设置时间*/
            var date=info.date;
            $('#date').html(date);
            var result=info.results[0];
            console.log(result);
            //设置城市
            var city=result.currentCity;
            $('city').html('city');
            //设置温度
            var weather=result.weather_data[0];
            var temp=weather.temperature;
            var temparr=temp.split(" ");
            $('#temp').html(temparr[2]);
            /*设置风速*/
            var wind=weather.wind;
            $("#wind").html(wind);
            /*设置空气质量*/
            var air=result.pm25;
            $("#air").html('pm2.5:'+air);
            /*设置湿度*/
            /*设置未来四天的天气*/
            var html = document.querySelector("#tpl");
            html=template('tpl',result);
            $('#fourday').html(html);
            
        }
    })

})