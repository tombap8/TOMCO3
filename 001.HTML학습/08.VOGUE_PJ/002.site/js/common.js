// 보그 PJ 공통기능 JS - common.js ///////

// 페이지명 변수
let pname = location.pathname.split('/');
// location.pathname 페이지명이 포함된 전체경로
// split(자를문자열) -> 배열에 담는다!
pname = pname[pname.length - 1];
// pname[개수-1] -> 배열의 마지막 데이터
pname = pname.split(".")[0]; // -> 페이지이름만!
console.log("페이지이름:", pname);

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

    // 로그인, 회원가입, 갤러리 html 메뉴코드 넣기
    // html태그 코드 만들기
    let hcode = `
        <a href="#" class="fi fi-laptop" title="로그인">
            <span class="ir">
                로그인
            </span>
        </a>
        <a href="#" class="fi fi-user-secret" title="회원가입">
            <span class="ir">
                회원가입
            </span>
        </a>
        <a href="#" class="fi fi-camera" title="갤러리">
            <span class="ir">
                갤러리
            </span>
        </a>
    `;

    // 로그인, 회원가입, 갤러리 아이콘 넣기
    // 대상: .sns a:last-child
    // 변경: 대상요소 앞에 a요소 코드를 삽입한다
    // 메서드: before(요소) -> 선택요소 앞에 형제요소 삽입
    // -> 참고비교) after(요소) -> 선택요소 뒤에 형제요소 삽입
    $('.sns a')
        .each(function () {
            // a요소 각각에 title로 내부글자를 넣어준다!
            $(this).attr("title", $(this).text().trim());
            // attr(속성명,속성값), trim() 앞뒤공백제거
        }) ////// each //////
        .last().before(hcode);

    // 로그인, 회원가입 클릭시 페이지 이동하기
    // 대상: .sns a
    $(".sns a").click(function (e) {

        // 1. 기본기능막기
        e.preventDefault();

        // 2. 내부 텍스트 읽어오기
        let txt = $(this).text().trim();
        console.log("sns텍스트:", txt);

        // 3. 분기하기
        let url;
        switch (txt) {
            case "로그인":
                url = "login";
                break;
            case "회원가입":
                url = "member";
                break;
            case "갤러리":
                url = "gallery";
                break;
            case "인스타그램":
                url = "https://www.instagram.com/VOGUEKOREA/";
                break;
            case "페이스북":
                url = "https://www.facebook.com/VOGUEkr";
                break;
            case "트위터":
                url = "https://twitter.com/VogueKorea";
                break;
            case "유튜브":
                url = "https://www.youtube.com/user/VogueKorea?sub_confirmation=1";
                break;
            case "카카오스토리":
                url = "https://story.kakao.com/ch/voguekr";
                break;
        } ///////// switch case ///////

        // 4. 페이지 이동하기
        if (txt === "로그인" || txt === "회원가입" || txt === "갤러리")
            location.href = url + ".html";
        else // sns는 새창열기 이동
            window.open().location.href = url;
        // window.open() 새창열기 -> 원래는 팝업창 띄우는것!


    }); //////////// click ///////////

    // 부드러운 스크롤 호출!
    startSS();

    // 슬림상단메뉴 대상선정: #top
    slimTop = document.querySelector("#top");

    // 위로가기버튼 대상선정: .tbtn
    tbtn = document.querySelector(".tbtn");

    // tbtn.onclick = () => {
    //     // 맨위로 가기!
    //     pos = 0;
    //     // a요소 기본이동 막기
    //     return false;
    // }; /////////// click /////////////

    // 위로가기버튼 클릭시 -> 제이쿼리로 부드러운 이동!
    // 부드러운 스크롤 변수 pos업데이트!
    $(".tbtn").click(() => {
        // 제이쿼리 스크롤 애니메이션
        // animate({CSS속성변경},시간)
        $("html,body").animate({
            scrollTop: "0"
        }, 300); //// animate ////

        // 부드러운 스크롤 위치값 업데이트!
        pos = 0;
    }); ////////////// click /////////////


    // 메인 페이지(index.html)에서만 적용!
    if (pname === "index") {

        // 메인 컨텐츠박스 스크롤 등장액션 클래스 적용하기
        let contbx = document.querySelectorAll(".cont>section");
        contbx.forEach((ele, idx) => { // ele - 요소자신, idx - 요소순번
            if (idx !== 0) ele.classList.add("scAct");
        }); //////// forEach ////////////
        // for(let x of contbx) x.classList.add("scAct");

    } /////////////// if ////////////////////////////////


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
    // console.log(scPos);

    /////////////////////////////////////////
    // 햄버거 버튼 클릭시 모바일 메뉴 보이기 //
    // 대상: 이벤트 대상 - .hbtn, 변경대상 - #mobx
    $(".hbtn").click(() => {
        $("#mobx").slideToggle(400, "easeInCirc");
        // slideToggle()은 slideDown/slideUp전환
    }); ///////////// click /////////////

    /////////////////////////////////////////
    // 검색 버튼 클릭시 검색박스 보이기 //
    // 대상: 이벤트 대상 - .sbtn, 변경대상 - .mos
    $(".sbtn").click(() => {
        $(".mos").slideToggle(200, "easeInOutCubic");
        // slideToggle()은 slideDown/slideUp전환
    }); ///////////// click /////////////

}); ///////////// 로드구역 ///////////////////////

/************************************************* 
    함수명: scAction
    기능: 스크롤 등장액션 구간별 클래스 주기!
*************************************************/
function scAction(seq) { // seq - 순번

    // console.log("체크:",seq);

    // 해당범위이면 해당순번의 등장요소에 class="on"
    if (scTop >= scPos[seq] - winH &&
        scTop < scPos[seq]) {
        scAct[seq].classList.add("on");
        // console.log("적용:",seq);
    } ////////// if /////////////

} ////////////// scAction 함수 ///////////////////
//////////////////////////////////////////////////



/***************************************** 
    [ 윈도우 스크롤 이벤트 함수 ]
    - 스크롤 이벤트 : scroll
    - 이벤트 대상 : window
    - 스크롤 이벤트값 : scrollY
*****************************************/
window.addEventListener('scroll', () => {

    // 로그인, 회원가입, 갤러리 페이지는 스크롤셋팅 안함!
    if (pname === "login" ||
        pname === "member" ||
        pname === "gallery") return;

    // 스크롤 위치표시
    scTop = this.scrollY;
    // console.log("스위:", scTop);
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