$(function () {
    $(".leftNav li").hover(function () {
        $(this).find(".zj").show();
        $(this).find(".fj").addClass("nuw");
    }, function () {
        $(this).find(".zj").hide();
        $(this).find(".fj").removeClass("nuw");
    });
    //轮播图
    var num = 0;
    var time1 = null;

    function time() {
        n = num;
        num++;
        if (num >= $(".num li").length) {
            num = 0;
        };
        $(".num>li").eq(num).addClass("active");
        $(".num>li").eq(n).removeClass("active");
        $(".slide_box>li").eq(n).hide();
        $(".slide_box>li").eq(num).show();
    };
    time1 = setInterval(time, 1000);
    $(".num>li").hover(function () {
            var index = $(this).index();
            clearInterval(time1);
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(".slide_box>li").eq(index).show();
            $(".slide_box>li").eq(index).siblings().hide();
        },
        function () {
            var index = $(this).index();
            num = index;
            time1 = setInterval(time, 1000);
        });
    //快讯
    var time3 = null;
    // time_();
    $("#express").hover(function () {
        clearInterval(time3);
    }, function () {
        time3 = setInterval(time_, 1000);
    });

    var src = 0;
    var maxSrc = 20;
    var start = $("#express")[0].scrollTop;
    var end = $("#express>li")[0].offsetHeight * 5;
    var qwe = (end - start) / maxSrc;
    time3 = setInterval(time_, 1000);

    function time_() {
        start += qwe;
        $("#express")[0].scrollTop = start;
        src++;
        if (src == maxSrc) {
            src = 0;
            start = 0;
        }
    };

})