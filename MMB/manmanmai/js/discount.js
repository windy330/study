/**
 * Created by Neptune on 2016/12/30.
 */
$ (function(){
    $.ajax({
        url:"http://mmb.ittun.com/api/getinlanddiscount",
        data:{},
        type:'get',
        success:function(info){
            console.log("a")
            console.log(info)
            var html=template("title",info);
            $(".product").append(html);
        }
    })
});
