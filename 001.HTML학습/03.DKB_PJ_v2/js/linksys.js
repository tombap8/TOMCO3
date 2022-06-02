// 도깨비 PJ : 링크 시스템 - linksys.js ///

/////////////////////////////////
// html 로드 후 실행하기 설정 ////
/////////////////////////////////

// window 윈도우객체 - html문서 최상위 객체다!
// window객체에 load이벤트를 설정하면 된다!
// load이벤트는 html요소를 모두 로딩후 발생함!
window.addEventListener("load", linkFn);
// 선택요소/객체.addEventListener(이벤트명,함수)
// -> 선택요소 또는 객체에 이벤트발생시 함수를 실행함!
// 원래 함수호출은 함수명() -> 소괄호가 있어야 하지만
// addEventListener 메서드는 함수명만 써도 함수와 연결한다!

/******************************************* 
    함수명: linkFn
    기능: GNB메뉴의 a링크를 클릭하면
        해당 페이지로 이동하도록 a요소에
        셋팅한다!
    주의사항: 본 함수는 반드시 html이 모두
            로딩된 후에 호출해야 함!
*******************************************/
function linkFn() {

    // 1. 호출확인
    console.log("고고씽~!");

    // 2. 대상선정 : .top a -> 상단영역의 모든a
    var alink = document.querySelectorAll(".top a");
    console.log("a링크 개수:", alink.length, alink);
    // length는 컬렉션 집합의 개수
    // html 요소가 여러개 담긴 메모리공간을 컬렉션이라고함
    // 구체적인 요소는 컬렉션[순번] / 컬렉션.item(순번)

    // 3. 각 a요소에 클릭설정하기!
    // a요소 컬렉션 개수만큼 돌면서 클릭이벤트 설정하기
    // for(시;한;증){코드}
    // 시작값은 컬렉션 첫번호인 0부터 시작함!
    // 한계값은 컬렉션 개수보다 작을때까지임!
    // 증감은 i++로 1씩증가하여 한계값에 접근함!
    for (var i = 0; i < alink.length; i++) {
        // alink[순번] -> 구체적인 a요소
        // alink.item(순번) -> 위와 같음!
        // function(){코드} -> 이름없는 함수
        // 이름없는 함수를 이벤트속성에
        // 할당해야 코드가 바로실행되지 않고
        // 이벤트가 발생할때 실행된다!
        // alink.item(i).onclick = function(){
        alink[i].onclick = function () {
            // 클릭된 a요소 자신 -> this
            // this.innerText 는 a요소 글자

            // 1. a요소 텍스트 읽어오기
            var txt = this.innerText;
            console.log(txt);

            // 2. 텍스트에 따라 이동할 페이지 분기하기
            // switch case 사용!

            // 이동주소변수
            var url;

            switch (txt) {
                case "메인":
                    url = "index.html";
                    break;
                case "로그인":
                    url = "login.html";
                    break;
                case "회원가입":
                    url = "member.html";
                    break;
                case "인물관계도":
                    url = "cat.html";
                    break;
                case "페이스북 바로가기":
                    url = "https://www.facebook.com/tvNdokebi/";
                    break;
                case "인스타그램 바로가기":
                    url = "https://tv.naver.com/cjenm.tvndokebi";
                    break;
                case "트위터 바로가기":
                    url = "https://twitter.com/chtvn";
                    break;
                default:
                    url = "etc";
            } /////// switch case //////

            // 페이지별 이동!
            if (url === "etc")
                alert(`${txt} 페이지는 오픈 준비중입니다~!\n현재는 인물관계도, 로그인, 회원가입 페이지만 운영되고 있습니다!`);
                // \n은 줄바꿈표시(시스템 출력에만 적용됨)
            else if(txt==="페이스북 바로가기"||
            txt==="인스타그램 바로가기"||
            txt==="트위터 바로가기")
                window.open().location.href = url;
                // window.open() 새창열기
            else
                location.href = url;
            // location.href = 주소 -> 현재창 주소이동

            // a요소는 기본적으로 이동하는 특성이 있다!
            // 이것을 막기 위해서 본 함수를 나갈때
            // 모든 기본 기능을 못하게 막는 것이
            // return false 설정이다!
            return false;
            // 본 코드 맨끝에 해야함!
            // 위에서 하면 만나는 순간 빠져나감!

        }; //////// click ////////////

    } //////////// for ///////////////

} ////////////// linkFn 함수 //////////////////
///////////////////////////////////////////////