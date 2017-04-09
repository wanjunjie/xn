
/*文字向上滚动*/
var box=document.getElementById("div1"),can=true;
box.innerHTML+=box.innerHTML;
box.onmouseover=function(){can=false};
box.onmouseout=function(){can=true};
new function (){
    var stop=box.scrollTop%35==0&&!can;
    if(!stop)box.scrollTop==parseInt(box.scrollHeight/2)?box.scrollTop=0:box.scrollTop++;
    setTimeout(arguments.callee,box.scrollTop%35?10:1500);
};
var box2=document.getElementById("div2"),can=true;
box2.innerHTML+=box2.innerHTML;
box2.onmouseover=function(){can=false};
box2.onmouseout=function(){can=true};
new function (){
    var stop=box2.scrollTop%35==0&&!can;
    if(!stop)box2.scrollTop==parseInt(box2.scrollHeight/2)?box2.scrollTop=0:box2.scrollTop++;
    setTimeout(arguments.callee,box2.scrollTop%35?10:1500);
};
//顶部导航切换
$(document).ready(function() {
    $(".nav-list a").click(function(){
        $(".nav-list a").each(function () {
            $('.nav-list a').removeClass('currLi');
        });
        $(this).addClass('currLi');
    });
})
//滑动链接
$(document).ready(function() {
    $('.nav-list a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    1000);
                return false;
            }
        }
    });
});
//tab切换
$(document).ready(function() {
    $("ul.tabs li").click(function() {
        $("ul.tabs li").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active"); //Add "active" class to selected tab  
        $(".tab_content").hide(); //Hide all tab content  
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content  
        $(activeTab).fadeIn(); //Fade in the active content  
        return false;
    });

});

//案例切换和客户切换
function ChangeDiv(divId,divName,zDivCount) {
    for(i=0;i<=zDivCount;i++)
    {
        document.getElementById(divName+i).style.display="none";
    }
    document.getElementById(divName+divId).style.display="block";
}

function ChangeDiv02(divId,divName,zDivCount) {
    for(i=0;i<=zDivCount;i++)
    {
        document.getElementById(divName+i).style.display="none";
    }
    document.getElementById(divName+divId).style.display="block";
}

function ChangeDiv03(divId,divName,zDivCount) {
    for(i=0;i<=zDivCount;i++)
    {
        document.getElementById(divName+i).style.display="none";
    }
    document.getElementById(divName+divId).style.display="block";
}
//客户红灰线条切换
$(document).ready(function(){
    $(".customer_tit span").mouseenter(function() {
        $(".customer_tit span").removeClass("pre");
        $(this).addClass("pre");
    });
})

//案例红灰线条切换
$(document).ready(function(){
    $(".case_box_tit span").mouseenter(function() {
        $(".case_box_tit span").removeClass("pre");
        $(this).addClass("pre");
    });
})
//关于我们按钮切换
$(document).ready(function(){
    $(".tab_tit span").click(function() {
        $(".tab_tit span").removeClass("current");
        $(this).addClass("current");
    });
})

//鼠标经改变图片路径 
$(document).ready(function(){
    $('.customer_logo li').mouseenter(function() {
        $(this).children('p').hide();
    });
    $('.customer_logo li').mouseleave(function() {
        $(this).children('p').show();
    });

    scrolltimer2();
})

/* 首页数字翻页 */
$(window).bind('scroll',scrolltimer)

function scrolltimer(){
    var carouselTop =  $('.Brand').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll+windowHeight >= carouselTop ) {
        setTimeout(function(){
            var timer = setInterval(function(){
                autoPlay(num1,timer,'.num-1');
            },1000);
            var timer2 = setInterval(function(){
                autoPlay(num2,timer2,'.num-2');
            },200);
            var timer3 = setInterval(function(){
                autoPlay(num3,timer3,'.num-3');
            },200);
            var timer4 = setInterval(function(){
                autoPlay(num4,timer4,'.num-4');
            },500);
            //alert(111);
        },800);
//            console.log(2);
    };
}


function scrolltimer2(){
    var carouselTop =  $('.Brand').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll+windowHeight >= carouselTop ) {
        setTimeout(function(){
            var timer = setInterval(function(){
                autoPlay(num1,timer,'.num-1');
            },100);
            var timer2 = setInterval(function(){
                autoPlay(num2,timer2,'.num-2');
            },10);
            var timer3 = setInterval(function(){
                autoPlay(num3,timer3,'.num-3');
            },10);
            var timer4 = setInterval(function(){
                autoPlay(num4,timer4,'.num-4');
            },30);
            //alert(111);
        },800);
//            console.log(2);
    };
}

var num1 = parseInt($('.num-1').text());
var num2 = parseInt($('.num-2').text());
var num3 = parseInt($('.num-3').text());
var num4 = parseInt($('.num-4').text());
var num1Change = 0;
var num2Change = 0;
var num3Change = 0;
var num4Change = 0;
function autoPlay (num,setName,obj) {
    if(obj == '.num-1') {
        num1Change++;
        if(num1Change >= num){
            num1Change = num ;
            clearInterval(setName);
        }
        $(obj).text(num1Change);
    }
    if(obj == '.num-2') {
        num2Change++;
        if(num2Change >= num){
            num2Change = num ;
            clearInterval(setName);
        }
        $(obj).text(num2Change);
    }
    if(obj == '.num-3') {
        num3Change++;
        if(num3Change >= num){
            num3Change = num ;
            clearInterval(setName);
        }
        $(obj).text(num3Change);
    }
    if(obj == '.num-4') {
        num4Change++;
        if(num4Change >= num){
            num4Change = num ;
            clearInterval(setName);
        }
        $(obj).text(num4Change);
    }

}

//图片滚动
var index = 0;
var timer = 0;
var ulist = $('.img_list ul');
var blist = $('.btn_list ul');
var list = ulist.find('li');
var llength = list.length;//li的个数，用来做边缘判断
var lwidth = $(list[0]).width();//每个li的长度，ul每次移动的距离
var uwidth = llength * lwidth;//ul的总宽度

function init(){
    //生成按钮(可以隐藏)
    addBtn(list);
    //显示隐藏左右点击开关
    $('.link').css('display', 'block');
    $('.link').bind('click', function(event) {
        var elm = $(event.target);
        doMove(elm.attr('id'));
        return false;
    });

    //初始化描述
    var text = ulist.find('li').eq(0).find('img').attr('alt');
    var link = ulist.find('li').eq(0).find('a').attr('href');
    $('.img_intro .text a').text(text);
    $('.img_intro .text a').attr('href',link);
    auto();
}

function auto(){
    //定时器
    timer = setInterval("doMove('toRight')",3000);

    $('.img_list li, .btn_list li').hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval("doMove('toRight')",3000);
    });
}

function changeBtn(i){
    blist.find('li').eq(i).addClass('on').siblings().removeClass('on');
    var text = ulist.find('li').eq(i).find('img').attr('alt');
    var link = ulist.find('li').eq(i).find('a').attr('href');
    $('.img_intro .text a').text(text);
    $('.img_intro .text a').attr('href',link);
}

function addBtn (list){
    for (var i = 0; i < list.length; i++) {
        var imgsrc = $(list[i]).find('img').attr('src');
        var listCon = '<li><img src="'+imgsrc+'""></li>';
        $(listCon).appendTo(blist);
        //隐藏button中的数字
        //list.css('text-indent', '10000px');
    };
    blist.find('li').first().addClass('on');
    blist.find('li').click(function(event) {
        var _index = $(this).index();
        doMove(_index);
    });
}
$('.img_list li').mouseenter(function(){
    $('.img_intro').css('bottom','0')
})
$('.img_list li').mouseleave(function(){
    $('.img_intro').css('bottom','-90px')
})
$('.img_intro a').mouseenter(function(){
    $('.img_intro').css('bottom','0')
})
$('.img_intro').mouseleave(function(){
    $('.img_intro').css('bottom','-90px')
})
function doMove(direction){
    //向右按钮
    if (direction =="toRight") {
        index++;
        if ( index< llength) {
            uwidth = lwidth *index;
            ulist.css('left',-uwidth);
            //ulist.animate({left: -uwidth}, 1000);

        }else{
            ulist.css('left','0px');
            index = 0;
        };
        //向左按钮
    }else if(direction =="toLeft"){
        index--;
        if ( index < 0) {
            index = llength - 1;
        }
        uwidth = lwidth *index;
        ulist.css('left',-uwidth);
        //ulist.animate({left: -uwidth}, "slow");
        //点击数字跳转
    }else{
        index = direction;
        uwidth = lwidth *index;
        ulist.css('left',-uwidth);
    };
    changeBtn(index);
}
init();



//核心成员滚动
var Speed = 1; //速度(毫秒)
var Space = 3; //每次移动(px)
var PageWidth = 370; //翻页宽度
var fill = 0; //整体移位
var MoveLock = false;
var MoveTimeObj;
var Comp = 0;
var AutoPlayObj = null;
GetObj("List2").innerHTML = GetObj("List1").innerHTML;
GetObj('ISL_Cont').scrollLeft = fill;
GetObj("ISL_Cont").onmouseover = function(){clearInterval(AutoPlayObj);}
GetObj("ISL_Cont").onmouseout = function(){AutoPlay();}
AutoPlay();
function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay(){ //自动滚动
    clearInterval(AutoPlayObj);
    AutoPlayObj = setInterval('ISL_GoDown();ISL_StopDown();',3000); //间隔时间
}
function ISL_GoUp(){ //上翻开始
    if(MoveLock) return;
    clearInterval(AutoPlayObj);
    MoveLock = true;
    MoveTimeObj = setInterval('ISL_ScrUp();',Speed);
}
function ISL_StopUp(){ //上翻停止
    clearInterval(MoveTimeObj);
    if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0){
        Comp = fill - (GetObj('ISL_Cont').scrollLeft % PageWidth);
        CompScr();
    }else{
        MoveLock = false;
    }
    AutoPlay();
}
function ISL_ScrUp(){ //上翻动作
    if(GetObj('ISL_Cont').scrollLeft <= 0){GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft + GetObj('List1').offsetWidth}
    GetObj('ISL_Cont').scrollLeft -= Space ;
}
function ISL_GoDown(){ //下翻
    clearInterval(MoveTimeObj);
    if(MoveLock) return;
    clearInterval(AutoPlayObj);
    MoveLock = true;
    ISL_ScrDown();
    MoveTimeObj = setInterval('ISL_ScrDown()',Speed);
}
function ISL_StopDown(){ //下翻停止
    clearInterval(MoveTimeObj);
    if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0 ){
        Comp = PageWidth - GetObj('ISL_Cont').scrollLeft % PageWidth + fill;
        CompScr();
    }else{
        MoveLock = false;
    }
    AutoPlay();
}
function ISL_ScrDown(){ //下翻动作
    if(GetObj('ISL_Cont').scrollLeft >= GetObj('List1').scrollWidth){GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft - GetObj('List1').scrollWidth;}
    GetObj('ISL_Cont').scrollLeft += Space ;
}
function CompScr(){
    var num;
    if(Comp == 0){MoveLock = false;return;}
    if(Comp < 0){ //上翻
        if(Comp < -Space){
            Comp += Space;
            num = Space;
        }else{
            num = -Comp;
            Comp = 0;
        }
        GetObj('ISL_Cont').scrollLeft -= num;
        setTimeout('CompScr()',Speed);
    }else{ //下翻
        if(Comp > Space){
            Comp -= Space;
            num = Space;
        }else{
            num = Comp;
            Comp = 0;
        }
        GetObj('ISL_Cont').scrollLeft += num;
        setTimeout('CompScr()',Speed);
    }
}

/*点击地图显示公司弹窗*/
//$(document).ready(function(){
//	$('.tb_01').click(function(){
//			$('.tb_box_01').toggle();
//			$('.tb_box_02').hide();
//			$('.tb_box_03').hide();
//			$('.tb_box_04').hide();
//    })
//	$('.tb_02').click(function(){
//			$('.tb_box_02').toggle();
//			$('.tb_box_01').hide();
//			$('.tb_box_03').hide();
//			$('.tb_box_04').hide();
//    })
//	$('.tb_03').click(function(){
//			$('.tb_box_03').toggle();
//			$('.tb_box_02').hide();
//			$('.tb_box_01').hide();
//			$('.tb_box_04').hide();
//    })
//	$('.tb_04').click(function(){
//			$('.tb_box_04').toggle();
//			$('.tb_box_02').hide();
//			$('.tb_box_03').hide();
//			$('.tb_box_01').hide();
//    })
//	
//})
$(document).ready(function(){
    $('.tb_01').mouseenter(function(){
        $('.tb_box_01').show(100);
    })
    $('.tb_01').mouseleave(function(){
        $('.tb_box_01').hide(100);
    })
    $('.tb_02').mouseenter(function(){
        $('.tb_box_02').show(100);
    })
    $('.tb_02').mouseleave(function(){
        $('.tb_box_02').hide(100);
    })
    $('.tb_03').mouseenter(function(){
        $('.tb_box_03').show(100);
    })
    $('.tb_03').mouseleave(function(){
        $('.tb_box_03').hide(100);
    })
    $('.tb_04').mouseenter(function(){
        $('.tb_box_04').show(100);
    })
    $('.tb_04').mouseleave(function(){
        $('.tb_box_04').hide(100);
    })


})		

