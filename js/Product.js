$(function () {
    //选择尺码和颜色
    $(".des_choice li").on("click",function () {
        $(this).addClass("checked");
        $(this).siblings("li").removeClass("checked");
    });
    //修改数量
    var obj = {};
    obj.num = $(".n_ipt").val();
    obj.price = $(".des_price").children("b").text().substr(1);
    $(".n_btn_1").on("click", function () {
        obj.num++;
        store();
    });
    $(".n_btn_2").on("click", function () {
        obj.num--;
        if (obj.num < 1) {
            obj.num = 1;
            return;
        };
        store();
    });
    $(".n_ipt").on("change", function () {
        obj.num = $(".n_ipt").val();
        store();
    });

    function store() {
        obj.Tprice = obj.num * obj.price;
        $(".n_ipt").val(obj.num);
        $(".des_price").children("b").text('￥' + obj.Tprice);
    }
    //搭配
    var obj_ = {};
    obj_.list = [];
    obj_.Tprice = 0;
    $(".team_list").each(function (index, itam) {
        if ($(".checkbox>input").eq(index).prop("checked") == true) {
            var p = $(itam).find("span").text().substr(1) - 0;

        } else if ($(".checkbox>input").eq(index).prop("checked") == false) {
            var p = 0;
        };
        obj_.list.push({
            price: p
        });
    });
    //设置总价和搭配套数
    function Tprice() {
        obj_.Tprice = 0;
        obj_.num = $(".sum_ipt").val() - 0;
        for (var i = 0; i < obj_.list.length; i++) {
            obj_.Tprice += obj_.list[i].price;
        };
        obj_.Tprice = obj_.Tprice * obj_.num;
        $(".team_sum").find("span").text(obj_.Tprice);
    }
    Tprice();
    //事件
    $(".checkbox>input").on("click", function () {
        var index = $(this).index(".checkbox>input");
        var a = $(this).prop("checked");
        if (a == true) {
            obj_.list[index].price = $(this).parent().next("span").text().substr(1) - 0;
        } else if (a == false) {
            obj_.list[index].price = 0;
        }
        Tprice();
    });
    $(".sum_ipt").on("change", function () {
        Tprice();
    });
})