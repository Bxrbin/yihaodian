$(function () {
    var time = null;
        var num = 60;
    $(".tableText").on("click", function () {
        clearInterval(time)
        time = setInterval(function () {
            num--;
            if(num<0){
                clearInterval(time);
                num=60;
                $(".tableText").text("获取验证码");
                return;
            }
            $(".tableText").text(num);

        },100)
    });
    $(".innerTab").on("click",".tableBtn",function(){
        var aJax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
        var Date='act=reg&user='+$(".tableItem>input").eq(0).val()+'&pass='+$(".tableItem>input").eq(2).val();
        aJax.open('post','http://127.0.0.1:3001/user',true);
        aJax.send(Date);
        aJax.onreadystatechange=function(){
            if(aJax.readyState==4){
                if(aJax.status==200){
                    alert(JSON.parse(aJax.responseText).msg);
                    if(JSON.parse(aJax.responseText).ok){
                        window.open('loadpage.html','_block');
                    }
                }
            }
        };
        return false;
    })
})