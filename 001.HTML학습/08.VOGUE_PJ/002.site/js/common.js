// 보그 PJ 공통기능 JS - common.js ///////

// 스크롤위치값 변수
let scTop;
// 슬림상단메뉴 대상: #top
let slimTop;
// 위로가기 버튼 대상: .tbtn
let tbtn;
// 등장액션 대상: .scAct
let scAct;
// 등장액션 대상위치(배열변수)
const scPos = [];
// 화면높이값 기준 등장액션 위치 보정변수 (화면높이의 2/3)
const winH = window.innerHeight / 3 * 2

///////////////// 로드구역 ////////////////////////
window.addEventListener("DOMContentLoaded", () => {

    // 슬림상단메뉴 대상선정: #top
    slimTop = document.querySelector("#top");

    // 위로가기버튼 대상선정: .tbtn
    tbtn = document.querySelector(".tbtn");

    // 메인 컨텐츠박스 스크롤 등장액션 클래스 적용하기
    let contbx = document.querySelectorAll(".cont>section");
    contbx.forEach((ele, idx) => { // ele - 요소자신, idx - 요소순번
        if (idx !== 0) ele.classList.add("scAct");
    }); //////// forEach ////////////
    // for(let x of contbx) x.classList.add("scAct");

    /********************************************** 
        [ HTML 컬렉션에서 forEach() 메서드 사용하기 ]
        -> 원래 배열에서 사용되는 forEach가 유명함!^^
        
        컬렉션변수.forEach((요소자신,요소순번)=>{코드})

        -> 컬렉션 변수에 담겨진 요소를 하나씩 자동을 돌아줌
        -> 이때 2가지의 전달값이 함수내부에 전달된다
        -> 전달값은 순서대로 요소자신, 요소순번이다
        -> 요소순번은 0부터다!

        -> 본인이 원하는 변수명을 사용한다.

        예)
        컬렉션변수.forEach((ele,idx)=>{코드})
        ele -> element 요소
        idx -> index 순번

    **********************************************/

    // 등장액션 요소
    scAct = document.querySelectorAll(".scAct");

    // 등장액션 요소의 위치값 저장하기
    scAct.forEach((ele, idx) => { // ele-요소자신,idx-순번
        // console.log("scAct위치:",ele.offsetTop);

        // 전역배열변수에 위치값 저장함!
        scPos[idx] = ele.offsetTop;
    }); ///////// forEach ///////////

    // 위치배열변수 확인
    console.log(scPos);


}); ///////////// 로드구역 ///////////////////////

/************************************************* 
    함수명: scAction
    기능: 스크롤 등장액션 구간별 클래스 주기!
*************************************************/
function scAction(seq) { // seq - 순번

    // 해당범위이면 해당순번의 등장요소에 class="on"
    if (scTop >= scPos[seq] - winH &&
        scTop < scPos[seq])
        scAct[seq].classList.add("on");

} ////////////// scAction 함수 ///////////////////
//////////////////////////////////////////////////



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


    ////////////////////////////////////
    /////// 위로가기 버튼 보이기 ////////
    ////////////////////////////////////

    // 1. 스크롤 위치가 300px 이상일때
    // 변경사항: .tbtn에 클래스 "on"넣기
    if (scTop >= 300)
        tbtn.classList.add("on");
    // 300px미만일 경우 클래스 "on" 제거
    else
        tbtn.classList.remove("on");



    //////////////////////////////////////////
    /////// 컨텐츠 박스 등장 클래스주기 ////////
    //////////////////////////////////////////

    // 스크롤시 등장요소 위치값 개수 만큼 scAction함수 호출!
    scPos.forEach((val, idx) => scAction(idx));
    // 배열변수.forEach((배열값,순번)=>{구현코드})



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