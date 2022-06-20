// 제이쿼리 기본 JS - main.js 

// html태그 로딩후 호출!
$(() => loadFn());

/*********************************** 
    함수명: loadFn
    기능: 로딩후 실행함수
***********************************/
function loadFn() {

    console.log("로딩완료!");

    /*************************** 
        1. 대상선정 변수할당
    ***************************/
    // 대상1 : 버튼들 - .btns>button
    const btns = $('.btns>button');
    // console.log(btns);

    // 대상2 : 미니언즈 - .mi
    const mi = $('.mi');
    // console.log(mi);

    // 대상3 : 빌딩각방 - .building li
    const bd = $('.building li');
    // console.log(bd);

    // 삽입이미지 변수 셋팅 /////
    // 좀비 이미지 태그
    const mz1 = 
    '<img src="images/mz1.png" alt="좀비1" class="mz">';
    const mz2 = 
    '<img src="images/mz2.png" alt="좀비2" class="mz">';
    const zom = 
    '<img src="images/zom.png" alt="좀비들" class="mz">';
    // 주사기
    const inj = 
    '<img src="images/inj.png" alt="주사기" class="inj">';

    /*************************** 
        2. 초기화 셋팅
    ***************************/
   // 2-1. 버튼셋팅 : 모든 버튼 숨기고 첫번째만 보이기
    btns.hide().first().show();
   // 버튼들.숨겨().첫번째().보여()

} /////////// loadFn 함수 ///////////
/////////////////////////////////////