(function($){
    // $(".submenu").css("display","block");

    // 첫번째 메뉴 유형 -> 내가 마우스 오버한 메뉴만 나옴
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").css("display","block");
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").css("display","none");
    // });



    // 두번째 메뉴 유형 -> 모든 메뉴가 다 나옴
    // $(".nav > ul > li").mouseover(function(){
    //     $(".nav > ul > li").find(".submenu").css("display","block");
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(".nav > ul > li").find(".submenu").css("display","none");
    // });



    // 저장소에 스택이 쌓인걸 .stop()으로 없애고 실행
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().show(500);
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().hide(500);
    // });

    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    });


    // 탭 메뉴
    var tabMenu = $(".notice");

    // document.querySelector(".notice ul > li > ul").style.display = "none";
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("ul > li.active > ul").show();

    function tabList(e){
        e.preventDefault();
        var target = $(this);   //사용자가 클릭한 메뉴(무엇을 클릭할지 모르기 때문에 this로 자기자긴을 설정)
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    }

    tabMenu.find("ul > li > a").click(tabList);

})(jQuery);