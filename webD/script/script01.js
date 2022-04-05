(function($){
    $("#nav > ul > li").mouseover(function(){
        $(this).find(".menu").stop().slideDown(500);
    });
    $("#nav > ul > li").mouseout(function(){
        $(this).find(".menu").stop().slideUp(500);
    });


    var tabMenu = $(".best");

    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("ul > li.active > ul").show();

    function tabList(e){
        e.preventDefault();
        var target = $(this);
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    }
    tabMenu.find("ul > li > a").click(tabList);
})(jQuery);