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

   /* 
    - 제이쿼리 단순 숨김/보임 메서드
    hide() - 숨김 / show() - 보임
    -> 제이쿼리 메서드에 시간을 쓰면 애니메이션됨!
    hide(시간) / show(시간)
    -> 애니메이션시 이징(가속도), 콜백함수를 사용가능
    hide(시간,이징,함수) / show(시간,이징,함수)
    _________________________________________

    이런 종류의 제이쿼리 메서드들
    1. show() / hide()
    -> toggle() - show/hide전환
    2. fadeIn() / fadeOut() - 서서히 나타남/숨김
    -> fadeToggle() - fadeIn/fadeOut전환
    3. slideDown() / slideUp() - 아래위로 나타남/숨김
    -> slideToggle() - slideDown/slideUp전환

    [공통] 소괄호안의 값으로 (시간,이징,함수) 를 사용!
    시간 - 1/1000초 (단위없이 숫자만씀)
    이징 - 가속도(제이쿼리용 이징이 따로있음)
    함수 - 애니메이션 후 실행함수(콜백함수)
   */

} /////////// loadFn 함수 ///////////
/////////////////////////////////////