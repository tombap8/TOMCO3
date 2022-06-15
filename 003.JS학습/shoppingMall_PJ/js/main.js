// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

*****************************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {

    // 1. 호출확인
    // console.log("로딩완료!");

    // 2. 변경 대상: 슬라이드 박스(#slide)
    const slide = document.querySelector("#slide");
    // console.log("슬라이드:",slide);

    // 3. 이동버튼에 클릭이벤트 설정
    // 이동버튼요소
    const abtn = document.querySelectorAll(".abtn");
    // console.log("이동버튼:",abtn);

    // 버튼개수만큼 for of로 클릭이벤트설정
    for (let x of abtn) { // x는 a요소자신

        x.onclick = () => {

            // 1. 오른쪽버튼 여부
            let isR = x.classList.contains("ab2");
            // console.log(".ab2인가?",isR);
            // classList.contains(클래스명)
            // -> 지정클래스가 있으면 true리턴

            // 2. 오른쪽/왼쪽버튼 분기하기
            if (isR) { // 오른쪽버튼 ///
                // 1. 슬라이드 left:-100% + 트랜지션
                slide.style.left = "-100%";
                slide.style.transition =
                    "left .4s ease-out";

                // 이동후 실행 -> 이동시간은 0.4초
                // setTimeout(함수,시간) -> 일정시간후 한번실행!
                setTimeout(() => {

                    // 2. 첫번째 li를 맨뒤로 이동
                    // 첫번째 li
                    let fli = slide
                        .querySelectorAll("li")[0];
                    // 맨뒤로 이동
                    slide.appendChild(fli);

                    // 3. 동시에 left값 0
                    slide.style.left = "0";
                    // 이때 트랜지션 해제!
                    slide.style.transition = "none";

                }, 400); //// 타임아웃 ///////


            } //////////// if //////////
            else { // 왼쪽버튼 ///////

                // 1. 맨뒤 li 맨앞으로 이동
                // li들
                let lis = slide.querySelectorAll("li");
                // insertBefore(넣을놈,넣을놈전놈)
                // insertBefore(맨뒤li,맨앞li)
                slide.insertBefore(
                    lis[lis.length - 1], lis[0]);
                // lis[lis.length-1] 맨뒤li -> lis[개수-1]
                // lis[0] 맨앞li

                // 2. 동시에 left:-100% + 트랜지션없앰
                slide.style.left = "-100%";
                slide.style.transition = "none";

                // 위의 이동소스와 약간의 시차필요!
                // setTimeout(함수,시간) -> 0.01초 시차
                setTimeout(() => {
                    // 3. left:0 + 트랜지션
                    slide.style.left = "0";
                    slide.style.transition =
                        "left .4s ease-out";
                }, 10); ///// 타임아웃 ////

            } //////////// else /////////

        }; /////// click ///////

    } /////////// for of //////////////

} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////