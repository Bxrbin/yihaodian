$(function () {
    //客户服务
    $(".ss_listBg").hover(function () {
        $(this).children(".ss_list_bg").stop().slideToggle();
    });
    $(function () {
        $(".outHelp").click(function () {
            $(this).children(".helpYou").stop().slideToggle();
        });
    });

    //创建一个对象保存数据
    var obj_ = {};
    obj_.list = [];
    //拿商品总数和商品总价格
    obj_.totalprice = $(".buy").find(".J_totalPrice").text().substr(1) - 0;
    obj_.totalnum = $(".buy").find(".J_totalCount").text().substring(1, ($(".buy").find(".J_totalCount").text().length - 1)) - 0;

    //拿到各个商品的信息并保存到数据中
    $(".shop li").each(function (index, itam) {
        // $(this).eq(index).find(".J_inputCount").value-0;
        //数量
        var n = $(itam).find(".J_inputCount").val() - 0;
        //总价
        var p = $(itam).find(".J_smallTotalPrice").text().substr(1) - 0;
        //单价
        var t = p / n;
        //添加商品到list数组中
        obj_.list.push({
            num: n,
            price: t,
            tprice: p
        });
    });
    // 点击显示购物车详细信息
    $(".car_t").on("click", function () {
        $(this).next(".last").stop().toggle(100);
    });
    //回调函数 修改数据内信息（完成）
    // 点击加减号调整购物车详细信息
    function Jbut(index, n) {
        if (index >= 0) {
            var p = obj_.list[index].price;
            var t = n * p;
            obj_.list[index].num = n;
            obj_.list[index].tprice = t;

            $(".J_count").eq(index).text('共' + obj_.list[index].num + '件商品')
            $(".J_inputCount").eq(index).val(obj_.list[index].num);
            $(".J_smallTotalPrice").eq(index).text('￥' + obj_.list[index].tprice);
        };
        if (obj_.list.length <= 0) {
            $(".shop").hide();
            $(".noshop").show();
        } else {
            obj_.totalnum = 0;
            obj_.totalprice = 0;
            for (var i = 0; i < obj_.list.length; i++) {
                obj_.totalnum += obj_.list[i].num;
                obj_.totalprice += obj_.list[i].tprice;
            };
            $(".J_totalPrice").text('￥' + obj_.totalprice);
            $(".J_totalCount").text('(' + obj_.totalnum + ')');
        }
    };
    $(".J_btnAddCount").click(function () {
        var index = $(this).index(".J_btnAddCount");
        var n = obj_.list[index].num;
        n++;
        Jbut(index, n);
    });
    //点击加减商品数量
    $(".J_btnDelCount").click(function () {
        var index = $(this).index(".J_btnDelCount");
        var n = obj_.list[index].num;
        n--;
        if (n < 1) {
            if (confirm("确定要删除本商品吗") == true) {
                qwe(index);
                return;
            } else {
                return;
            }
        }
        Jbut(index, n);
    });
    //手动修改商品数量
    $(".J_inputCount").each(function (index, itam) {
        itam.onchange = function () {
            var n = 0;
            n = $(itam).val();
            if (n < 1) {
                if (confirm("确定要删除本商品吗") == true) {
                    qwe(index);
                    return;
                } else {
                    n=1;
                }
            }
            Jbut(index, n);
        }

    })
    //删除商品
    function qwe(index) {
        $(".shop li").eq(index).remove();
        obj_.list.splice(index, 1);
        Jbut(-1);
    };
    //点击删除商品事件
    $(".close").click(function () {
        var index = $(this).parents("li").index();
        qwe(index);
    });
})