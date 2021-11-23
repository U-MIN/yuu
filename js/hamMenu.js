$(function(){

    
    //모바일 메뉴 클릭 동작
    //모바일 메뉴 포지션의 위치로 움직임

    $(".ham").click(function(e){
        e.preventDefault();
        $("#ham_menu").stop().animate({"right":0+"%"},500)
    });
    $(".ham_close").click(function(e){
        e.preventDefault();
        $("#ham_menu").stop().animate({"right":-100+"%"},500)
    });

    //모바일 서브 메뉴 드롭다운

    $(".hamDepth1 li").click(function(e){
        e.preventDefault();
        $(".hamDepth1 li").removeClass("on");
        $(this).addClass("on");
      
        //version1 난이도 쉬움
        // $(this).children(".hamDepth2").slideToggle();
        //슬라이드 함수 종류
        //.slideUp();    .slideDown();      .slideToggle()l
        //탐색구문

        //version2 난이도 어려움

        $(this).siblings().children(".hamDepth2").stop().slideUp();
        //탐색구문 : li의 태그 형제들(클릭한 li를 제외한 나머지 li들)의 자식들을 선택
        //탐색했을 때 선택되는 태그들이 많다면 괄호에 선택하고 싶은 클래스, 아이디, 태그를 넣어줌


        $(this).children(".hamDepth2").stop().slideDown();
    });



});