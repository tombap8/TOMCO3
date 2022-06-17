// 보그 PJ 공통기능 JS - common.js ///////

// 스크롤위치값 변수
let scTop;
// 슬림상단메뉴 대상: #top
let slimTop;

///////////////// 로드구역 ////////////////////////
window.addEventListener("DOMContentLoaded", () => {
    // 슬림상단메뉴 대상선정: #top
    slimTop = document.querySelector("#top");


}); ///////////// 로드구역 ///////////////////////

/***************************************** 
    [ 윈도우 스크롤 이벤트 함수 ]
    - 스크롤 이벤트 : scroll
    - 이벤트 대상 : window
    - 스크롤 이벤트값 : scrollY
*****************************************/
window.addEventListener('scroll', () => {

    // 스크롤 위치표시
    scTop = this.scrollY;
    console.log("스위:", scTop);
    // scrollY - 세로축 스크롤 위치값 리턴
    // this는 화살표함수에서 window객체임!
    // console.log("this의미:",this);


    // [ 여러방법의 스크롤위치값 알아오기 ]
    /* 
    console.log("스위2:", 
    document.scrollingElement.scrollTop);
    console.log("스위3:", 
    document.documentElement.scrollTop);
    console.log("스위4:", 
    document.querySelector("html").scrollTop);
    */

    ////////////////////////////////////
    /////// 상단메뉴 슬림변경하기 ///////
    ////////////////////////////////////

    // 1. 스크롤 위치가 100px 이상일때
    // 변경사항: #top에 클래스 "on"넣기
    if (scTop >= 100) 
        slimTop.classList.add("on");
    // 100px미만일 경우 클래스 "on" 제거
    else 
        slimTop.classList.remove("on");


}); ///////////// scroll //////////////////
///////////////////////////////////////////

/************************************************** 
    [윈도우 세로 스크롤 위치값 가져오는 방법]

    1. this.scrollY (this키워드가 window의미)
    2. window.scrollY
    3. document.scrollingElement.scrollTop
    4. document.documentElement.scrollTop
    5. document.querySelector("html").scrollTop

    참고) 가로스크롤일 경우
        scrollY -> scrollX
        scrollTop -> scrollLeft
        로 바꿔서 위와 동일함!

**************************************************/