$(function(){


    $(".question li").click(function(e){
        e.preventDefault();
        $(this).siblings().children(".arrow").removeClass("on");
        $(this).children(".arrow").toggleClass("on");
        //클래스 관련 함수, addClass, removeClass, toggleClass

        $(this).siblings().children(".answer").stop().slideUp();
        $(this).children(".answer").stop().slideToggle();
        //slideDown만 할 경우에는 다시 this를 클릭시 슬라이드다운 상태이기 때문에
        //slideDown대신 slideToggle로 해주면 좋다.

    });

    let indexCate = 0;
    $(".faqTab > li").click(function(e){
        e.preventDefault();
        $(".question li").children(".answer").stop().slideUp();
        //탭 다시 들어오면 모두 닫혀있도록
        $(".faqTab > li").removeClass("on");
        $(this).addClass("on");

        indexCate = $(this).index();
        $(".question").hide();
        $(".question").eq(indexCate).fadeIn(400);

    });

});