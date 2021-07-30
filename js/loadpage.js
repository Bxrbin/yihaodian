$(function () {
        $(".tableItem>input").eq(0).val(localStorage.getItem('lname'));
        $(".tableItem>input").eq(1).val(localStorage.getItem('lpwd'));
        $(".loadGiet")[0].checked=localStorage.getItem('lremember');
 
    // console.log($(".loadGiet")[0].checked);
    $(".tableBtn").on("click", function () {
        var aJax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
        var Date = 'act=login&user=' + $(".tableItem>input").eq(0).val() + '&pass=' + $(".tableItem>input").eq(1).val();
        aJax.open('post', 'http://127.0.0.1:3001/user', true);
        aJax.send(Date);
        aJax.onreadystatechange = function () {
            if (aJax.readyState == 4) {
                if (aJax.status == 200) {
                    if (JSON.parse(aJax.responseText).ok == false) {
                        alert(JSON.parse(aJax.responseText).msg);
                    } else {
                        if ($(".loadGiet")[0].checked == true) {
                            localStorage.setItem('lname', $(".tableItem>input").eq(0).val());
                            localStorage.setItem('lpwd', $(".tableItem>input").eq(1).val());
                            localStorage.setItem('lremember', $(".loadGiet")[0].checked);
                        } else {
                            localStorage.removeItem('lname');
                            localStorage.removeItem('lpwd');
                            localStorage.removeItem('lremember');
                        }
                        alert(JSON.parse(aJax.responseText).msg);
                        window.open('index.html','_block');
                    }
                }
            }
        };
        return false;
    });
    $(".loadMore").on("click",function(){
        $(".typeWeb").toggle();
    })

})