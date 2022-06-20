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

    // 대상4 : 메시지 박스 - .msg
    const msg = $('.msg');
    // console.log(msg);

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

    // 미니언즈 left 위치 보정값
    // 빌딩 li크기의 절반 - 미니언즈크기절반
    const addL = bd.eq(0).width() / 2 - mi.width() / 2;
    // console.log("미니언즈 위치조정값:", addL);
    // console.log("빌딩li가로:", bd.eq(0).width()/2);
    // console.log("미니언즈가로절반:", mi.width()/2);
    // width() 가로크기, height() 세로크기
    // -> 단위없는 px 숫자값 리턴함!

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

    // 2-2. 빌딩숫자셋팅 :
    // -> 모든 빌딩 li를 순서대로 돌면서
    // 순번넣기 + 좀비넣기
    // 대상: 빌딩 li -> bd변수
    bd.each((idx, ele) => {
        // console.log(idx);

        // 1. 각 li요소에 글자넣기(순번)
        $(ele).text(idx);

        // 2. 좀비 + 주사기 넣기
        // append(요소) - 선택요소 내부에 맨뒤추가
        if (idx === 9) $(ele).append(mz1);
        else if (idx === 7) $(ele).append(mz2);
        else if (idx === 1) $(ele).append(zom);
        else if (idx === 2) $(ele).append(inj);

    }); //////// each ////////////

    /* 
        [ for문을 사용하지 않고 돌게해주는
        제이쿼리 메서드 ]
        >>>> each(function(idx,ele){구현코드})
        >>>> each((idx,ele)=>{구현코드})

        - 선택요소를 순서대로 돌면서 구현코드를 실행함
        - idx 첫번째 전달변수는 순번이 전달됨(0부터)
        - ele 두번째 전달변수는 요소자신
        (this 키워드와 동일 - 단, 화살표함수에서는 다름!)
        - 전달변수는 순서와 개수가 중요함!
        - 이 메서드를 사용하면 for문을 안써도 됨!
    */

    // 2-3. 모든 좀비 숨기기
    $('.mz').hide();
    // 선택요소가 여러개이면 for문없이 모두 셋팅됨!

    /************************************* 
        3. 버튼별 클릭 이벤트 함수 만들기
    *************************************/

    ///////////////////////////////////////
    /////// 버튼 클릭시 공통 기능함수 //////
    //////////////////////////////////////
    const miniAct = (ele, seq, call) => {
        // ele - 호출하는 버튼자신(this키워드값 받음)
        // seq - 이동할 빌딩 li순번
        // call - 이동후 콜백함수

        // 1. 클릭된 요소 자신 없애기
        $(ele).slideUp(300);
        // slideUp(시간,이징,함수)
        // -> height값이 0되며 애니메이션
        // 애니메이션 후 display:none됨
        // 반대는 slideDown(시간,이징,함수)

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간,이징,함수)
        // -> opacity가 0이 되며 애니메이션
        // 애니메이션 후 display:none됨
        // 반대는 fadeIn(시간,이징,함수)

        // 3. 이동위치정보 :
        // 이동할 빌딩 li의 위치를 알아내기
        // 이동할 li타겟 -> bd변수
        let tg = bd.eq(seq); // seq -> li순번
        // eq(순번) -> 선택요소들 중 몇번째 요소를 선택
        // eq는 seqence(순서)라는 단어에서 나온말

        // 화면에서의 top값
        let tgtop = tg.offset().top;
        // 화면에서의 left값 + 미니언즈 위치보정값
        let tgleft = tg.offset().left + addL;

        // console.log("top:", tgtop, "/left:", tgleft);

        /* 
            offset() 메서드
            - 기준: 윈도우 화면
            - 요소의 위치나 크기 정보를 담고 있음
            offset().top -> 요소의 top값
            offset().left -> 요소의 left값
            _______________________________

            position() 메서드
            - 기준: 포지션이 있는 부모박스
            - 요소의 위치나 크기 정보를 담고 있음
            position().top -> 요소의 top값
            position().left -> 요소의 left값
        */

        // 4. 미니언즈 이동하기
        // 대상: .mi -> mi변수
        mi.animate({
            top: tgtop + "px",
            left: tgleft + "px"
        }, 800, "easeOutElastic", call);
        // call -> 전달받은 콜백함수

        // animate({CSS설정},시간,이징,함수)
        // -> CSS 변경을 애니메이션 해주는 메서드
        // -> 트랜지션 설정 불필요! (하면안됨!!!)
        // -> 만약 시간설정을 안하면 기본값 400적용됨(0.4초)

        /* 
            제이쿼리 이징(easing) :  가속도
            - 애니메이션 할 경우 가속도를 다채롭게 설정함
            - CSS보다 많은 옵션이 있음!
            -> 이징 참고 페이지: (구글에서 easing검색!)
            1) Easing 함수 치트 시트
            https://easings.net/ko
            2) 제이쿼리 UI 사이트 이징설명
            https://api.jqueryui.com/easings/

            -> 이징을 적용하려면 우선 제이쿼리 라이브러리
            아래에 제이쿼리 UI가 불러와 있어야 사용가능함!

            -> 이징명이 틀리면 적용되지 않는다!
            (참고사이트에서 정확한 이징명을 복사해서 쓰자!)

        */

    }; ///////////// miniAct 함수 //////////


    // 3-1. "들어가기" 버튼 클릭 시작 ////////
    btns.first().click(function () {

            // 콜백함수 : 이동후 실행함수 //////
            let callFn = () => {
                // 1. 메시지 변경
                msg.text("와~! 아늑하다! 옆방으로 가보자!")
                    .fadeIn(200); // 메시지 나타나기

                // 2. 다음버튼 보이기
                btns.eq(1).delay(500).slideDown(300);
                // delay(시간)
                // -> 애니메이션 메서드 앞에 사용!

            }; /////////// callFn함수 ///////

            // 공통기능함수 호출!
            miniAct(this, 8, callFn);


        })
        // 3-1. "들어가기" 버튼 클릭 끝 ////////


        // 앞에 세미콜론 없이 다음버튼 셋팅이 이어짐!
        // next() 다음 버튼!
        // 3-2. "옆방으로!" 버튼 클릭 시작 ////////
        .next().click(function () {

            // 콜백함수 : 이동후 실행함수 //////
            let callFn = () => {

                // this는 현재버튼요소
                // console.log("this의미:", this);

                // 2. 다음버튼 보이기
                $(this).next().delay(500).slideDown(300);
                // delay(시간)
                // -> 애니메이션 메서드 앞에 사용!

            }; /////////// callFn함수 ///////

            // 공통기능함수 호출!
            miniAct(this, 9, callFn);

        })
        // 3-2. "옆방으로!" 버튼 클릭 끝 ////////

        // 3-3. "윗층으로 도망가!" 버튼 클릭 시작 ////////
        .next().click(function () {

            // 콜백함수 : 이동후 실행함수 //////
            let callFn = () => {

                // this는 현재버튼요소
                // console.log("this의미:", this);

                // 2. 다음버튼 보이기
                $(this).next().delay(500).slideDown(300);
                // delay(시간)
                // -> 애니메이션 메서드 앞에 사용!

            }; /////////// callFn함수 ///////

            // 공통기능함수 호출!
            miniAct(this, 7, callFn);

        })
        // 3-3. "윗층으로 도망가!" 버튼 클릭 끝 ////////
        
        // 3-4. "다시옆방으로!" 버튼 클릭 시작 ////////
        .next().click(function () {

            // 콜백함수 : 이동후 실행함수 //////
            let callFn = () => {

                // this는 현재버튼요소
                // console.log("this의미:", this);

                // 2. 다음버튼 보이기
                $(this).next().delay(500).slideDown(300);
                // delay(시간)
                // -> 애니메이션 메서드 앞에 사용!

            }; /////////// callFn함수 ///////

            // 공통기능함수 호출!
            miniAct(this, 6, callFn);

        })
    // 3-4. "다시옆방으로!" 버튼 클릭 끝 ////////


} /////////// loadFn 함수 ///////////
/////////////////////////////////////