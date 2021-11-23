$(function(){
    
    let indexA = 0;
    let indexB = 0;

    $(".spaceInfo li").click(function(e){
        e.preventDefault();

        indexA = $(this).attr("data-index");
        //attr과 index의 차이
        //attr은 자식간의 숫자를 연속으로 가져올때
        //index는 부모안의 한 자식의 숫자를 연속으로 가져올때
 
        //모든 버튼 비활성화
        $(".spaceInfo li").removeClass("on");
        
        //클릭한 버튼만 활성화
        $(".spaceInfo li").eq(indexA).addClass("on");
        //해당하는 이미지 서서히 보이기
        $(".spacePic div").hide(); //한번에 사라지도록
        $(".spacePic div").eq(indexA).fadeIn(700);
        //li의 data값을 자동으로 가져와서 div의 순번값을 가져옴
    });
    


});