// CGV 메인 페이지 JS - main.js //////

////////////// 로드구역 ////////////////////////
window.addEventListener("DOMContentLoaded", () => {

    console.log("로딩완료!");

    /// 영화선택메뉴 클릭시 기능구현 정의 ////
    // 1. 영화선택 메뉴 클릭시 클릭된 li에 
    //  클래스 "on"을 넣는다.
    // 2. 나머지 영화선택 메뉴 li에는 클래스"on"
    // 을 지운다!
    // -> 결과적으로 CSS로 구현한 선택메뉴
    // 일어서 있기가 구현된다!

    // 이벤트 대상: .mlist ul>li
    // 변경 대상 === 이벤트 대상
    // 이벤트 종류: click
    // 변경대상이 여러개 이므로 for of문을 사용함!

    // 영화선택리스트 : sml(select Movie List)
    let sml = document.querySelectorAll(".mlist ul>li");
    console.log("영화선택리스트:", sml);

    // 선택요소들의 노드리스트 컬렉션을 모두 click설정함!
    for (let x of sml) { // x - 각 li요소
        x.onclick = () => {
            // 모든 요소 클래스 "on"지우기
            for(let z of sml) 
                z.classList.remove("on");

            // 해당요소에 클래스 넣기
            // classList 의 메서드 add()
            x.classList.add("on");
        } ////////// click //////////

    } ///////////// for of ////////////////

    /**********************************************
        [ 클래스 넣기/빼기 객체 ]
        classList
        1) add(클래스명) -> 클래스넣기
        2) remove(클래스명) -> 클래스빼기
        3) toggle(클래스명) -> 존재여부로 클래스변경
    **********************************************/


}); ////////// 로드구역 /////////////////////////

/******************************************** 
    함수명: chgMV
    기능: 영화 예고편 선택하여 플레이하기
********************************************/
function chgMV(vid) { // vid - 동영상아이디

    // 1. 함수호출확인+전달값 확인
    console.log("바꿔!", vid);

    // 2. 변경대상: #screen iframe
    var tg = document.querySelector("#screen iframe");

    // 3. 변경내용: src속성 재설정하기
    // 선택요소.src = 변경할값
    tg.src = `https://www.youtube.com/embed/${vid}?autoplay=1&playsinline=1`;


} /////////////// chgMV 함수 //////////////////
///////////////////////////////////////////////