$(function(){
    AOS.init();
    
    $(".gnb, .gnbBg").mouseenter(function(){
        $(".depth2, .gnbBg").stop().slideDown(600);       
    });


    $(".gnb, .gnbBg").mouseleave(function(){
        $(".depth2, .gnbBg").stop().slideUp(600);
    });

    //조금 지나면 탑버튼 나오도록 하기
    //높이값 잡아서 해당 높이 밑이라면 탑메뉴 나오도록

    $(window).scroll(function(){

        let top = $(this).scrollTop();
        let topBtn = $("#monthly").scrollTop() + 200;

        if( top >= topBtn){
            $("#topBtn").fadeIn();
            $("#topBtn").addClass("fixed");
        }
        else{
            $("#topBtn").fadeOut();
        }

    });

    $("#topBtn").click(function(e){
        e.preventDefault();
        $('html').animate({scrollTop:0},500);
    });

    


});

