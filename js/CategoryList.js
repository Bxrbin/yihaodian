$(function () {
    // 排序
    // var eqw=1;
    $("#sortPrice>.fl").on("click", function () {
        // if(eqw==1){
        if ($(this).data("key") == 0 || $(this).data("key") == $("#sortPrice>.i_down").data("key")) {
            $(this).data("key", $("#sortPrice>.i_up").data("key"));
            // eqw=2;
            var arr_ = $(".cate_list>li");
            arr_.sort(function (a, b) {
                return (a.firstElementChild.nextElementSibling.firstElementChild.innerHTML).substr(1) - (b.firstElementChild.nextElementSibling.firstElementChild.innerHTML).substr(1);
            });
            $('.cate_list').empty().append(arr_);
        } else if ($(this).data("key") == $("#sortPrice>.i_up").data("key")) {
        // }else if(eqw==2){
            // eqw=1;
            $(this).data("key", $("#sortPrice>.i_down").data("key"));
            var arr_ = $(".cate_list>li");
            arr_.sort(function (a, b) {
                return (b.firstElementChild.nextElementSibling.firstElementChild.innerHTML).substr(1) - (a.firstElementChild.nextElementSibling.firstElementChild.innerHTML).substr(1);
            });
            $('.cate_list').empty().append(arr_);
        }
    });
})