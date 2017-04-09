
$(function(){

    $(".Menu02 li").click(function(){
        $t=$(this);
        if(!$t.hasClass("current")){
            $i=$t.index();
            if(__M.video&&$i==3){
                $("#Play").off("click");
                $(".Content02Base .VideoContent").on("click",function(){
                    Kunyi.Index.VideoPlay();
                });
                document.getElementById("VideoReset").play();
                $("#Play").stop(false,true).fadeOut({duration:380,easing:"easeOutQuart"});
            }else{
                if(__M.video){
                    document.getElementById("VideoReset").pause();
                }
            }
            if($i==2){
                Kunyi.Index.HistoryTimer=window.setInterval(Kunyi.Index.HistoryLoop,5888);
            }else{
                window.clearInterval(Kunyi.Index.HistoryTimer);
            }
            $obj=$(".Menu02 li");
            $c=$(".Menu02 li.current").index();
            $objContents=$(".Content02Base");
            $obj.eq($i).addClass("current");
            $obj.eq($c).removeClass("current");
            $objContents.eq($c).stop().animate({"left":"-110%"},888,"easeOutQuint",function(){$(this).css("left","110%");});
            $objContents.eq($i).stop().animate({"left":"0px"},888,"easeOutQuint",function(){$(this).addClass("Content02Current");});
        }
    });
    $(".HLineContent img").click(function(){
        $t=$(this);
        if(!$t.hasClass("current")){
            $objImgs=$(".HLineContent img");
            $objContents=$(".HistoryBase .HistoryC");
            $i=$t.index();
            $objImgs.removeClass("current");
            $objImgs.eq($i).addClass("current");
            $(".Content02Base .Small h6").html($t.data("time"));
            $objContents.stop(false,true).slideUp(0,"easeOutQuad");
            $objContents.eq($i).stop(false,true).slideDown(0,"easeOutQuint");
        }
    });
    $(".HLineContent img").hover(function(){
        window.clearInterval(Kunyi.Index.HistoryTimer);
    },function(){
        Kunyi.Index.HistoryTimer=window.setInterval(Kunyi.Index.HistoryLoop,5888);
    });

});