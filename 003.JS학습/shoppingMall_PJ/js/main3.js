// 쇼핑몰 배너 JS - 03.페이드효과 //

// 로딩후 loadFn함수 호출 //////////
window.addEventListener("DOMContentLoaded", loadFn);

/******************************************** 
 * 
    [ 페이드 효과 슬라이드 기능정의 ]
    -> 슬라이드 순번에 대한 전역변수를 사용한다!

    1. 오른쪽 버튼클릭시 다음 순번슬라이드에
    클래스 "on"을 줘서 opacity:1, z-index:1
    로 보이며 맨위로 설정해준다!(트랜지션적용)
    ->나머지 li는 모두 "on"을 지워서 초기화!

    2. 왼쪽버튼은 이전순번이 나오며 위와 동일

    3. 끝번호에 가서는 처음은 마지막으로 
    마지막은 처음으로 슬라이드가 다시 반복된다.

    4. 블릿은 현재 슬라이드와 일치된 순번표시

********************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩후 이벤트설정 및 슬라이드 기능
******************************************/
function loadFn() {

    // 1. 호출확인
    // console.log("로딩완료!");

    // 2. 전체 슬라이드 번호변수
    let sno = 0; // 첫슬라이드번호

    // 3. 변경 대상: 
    // (1) 슬라이드 박스 li(#slide li)
    const slide = document.querySelectorAll("#slide li");
    console.log("슬라이드:", slide);

    // (2) 블릿박스 li(.indic li)
    const indic = document.querySelectorAll(".indic li");
    console.log("블릿:", indic);

    // 4. 이동버튼에 클릭이벤트 설정
    // 이동버튼요소
    const abtn = document.querySelectorAll(".abtn");
    // console.log("이동버튼:",abtn);

    // 광클금지용 변수
    let prot = 0; // 0-허용, 1-금지

    // 버튼개수만큼 for of로 클릭이벤트설정
    for (let x of abtn) { // x는 a요소자신

        x.onclick = () => {

            // console.log("광클막기:",prot);

            ///////// 광클금지 /////////
            if (prot) return; //돌아가! 
            prot = 1; //잠금!
            setTimeout(() => prot = 0, 410);
            // 타임아웃으로 슬라이드이동 후
            // 잠금설정을 prot=0으로 해제
            ////////////////////////////

            // 1. 오른쪽버튼 여부
            let isR = x.classList.contains("ab2");
            console.log(".ab2인가?",isR);
            // classList.contains(클래스명)
            // -> 지정클래스가 있으면 true리턴

            // 2. 오른쪽/왼쪽버튼 분기하기
            if (isR) { // 오른쪽버튼 ///
            } //////////// if //////////
            else { // 왼쪽버튼 ///////

            } //////////// else /////////
        }; /////// click ///////

    } /////////// for of //////////////



} /////////////// loadFn 함수 //////////////