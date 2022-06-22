// 보그 PJ 회원가입 페이지 JS - member.js

$(() => { /////////////// jQB /////////////////////

    console.log("로딩완료!");

    /****************************************** 
        [ 사용자 입력폼 유효성 검사하기 ]
        - 이벤트 종류: blur (포커스가 빠질때 발생)
        - 제이쿼리 이벤트 메서드: blur()
        - 이벤트 대상:

        -> id가 "email2"가 아니고 
            class가 "search"가 아닌 
            type이 "text"인 입력요소 input

        >>> 제이쿼리 선택 표현법:
        input[type=text][id!=email2][class!=search]
        >>> 대괄호[]는 속성선택, != 같지않다(제이쿼리전용)

        -> type이 "password"인 입력요소 input

        >>> 제이쿼리 선택 표현법:
        input[type=password]

    ******************************************/
    $(`input[type=text][id!=email2][class!=search],
   input[type=password]`)
        .blur(function () {

            // 모든공백 제거함수 //////
            const groSpace = cv => cv.replace(/\s/g, "");
            // (cv) => {return cv.replace(/\s/g,"");}
            // 중괄호와 리턴 키워드를 모두 생략함!
            // cv는 본 함수의 내부전달변수임!

            // groSpace 는 get rid of Space 즉, 공백제거라는 말!
            // replace(바꿀값,바뀔값)
            // 정규식: 슬래쉬 사이에 씀
            // 공백문자: \s
            // g -> global 즉, 모두 찾아라!


            // 방금 blur한 요소의 아이디
            let cid = $(this).attr("id");
            // cid 는 current id 즉, 현재 아이디
            // attr() -> 속성셋팅 / 속성값 읽기

            // 방금 blur한 요소의 값
            let cv = $(this).val();
            // cv 는 current value 즉, 현재값
            // val() -> 입력된 값 읽기 / 쓰기

            // 입력값의 공백제거하기!
            if (cid === "mnm") //"이름"일 경우
                cv = cv.trim(); // 앞뒤공백만 제거
            else // 그밖의 경우
                cv = groSpace(cv); // 모든공백제거!


            // 공백제거 입력값 업데이트
            $(this).val(cv); // val(값) -> 값설정!

            console.log("아이디:", cid);
            console.log("값:", cv);

            /***************************************** 
                1. 빈값 여부 체크하기
            *****************************************/
            if (cv === "") {
                // 메시지 출력
                $(this).siblings(".msg")
                    .text("필수입력")
                    .removeClass("on");

                // 불통과!!!
                pass = false;

            } //////////// if : 빈값체크 //////////////

            /****************************************** 
                2. 아이디일 경우 유효성 검사하기
                - 검사기준 : 
                영문자로 시작하는 6~20글자 영문자/숫자
            ******************************************/
            else if (cid === "mid") {
                // console.log("아이디 검사결과:",vReg(cv,cid));
                if (!vReg(cv, cid)) {
                    // !(NOT) 반대로 들어감(false일때)
                    $(this).siblings(".msg")
                        .text("영문자로 시작하는 6~20글자 영문자/숫자")
                        .removeClass("on");
                    // 클래스 "on"을 빼면 원래글자색

                    // 불통과!!!
                    pass = false;

                } /////// if : 아이디 검사 불통과 //////
                /////////// 검사결과가 통과이면 /////////
                else {
                    $(this).siblings(".msg")
                        .text("훌륭한 아이디네요~!")
                        .addClass("on");
                    // 클래스 "on"을 넣으면 녹색글자
                } /////// else : 아이디 검사 통과 //////

            } //////////// else if : 아이디 검사 /////////

            /****************************************** 
                3. 비밀번호일 경우 유효성 검사하기
                - 검사기준 : 
                특수문자,문자,숫자포함 형태의 5~15자리
            ******************************************/
            else if (cid === "mpw") {
                // console.log("비번 검사결과:",vReg(cv,cid));
                if (!vReg(cv, cid)) {
                    // !(NOT) 반대로 들어감(false일때)
                    $(this).siblings(".msg")
                        .text("특수문자,문자,숫자포함 형태의 5~15자리");

                    // 불통과!!!
                    pass = false;

                } ////////// if : 비밀번호 검사 불통과 //////
                /////// 검사결과가 통과이면 /////////////////
                else {
                    // 메시지 지우기
                    $(this).siblings(".msg").empty();
                } ///////// else : 비밀번호 검사 통과 ////////


            } //////////// else if : 비밀번호검사 /////////

            /****************************************** 
                4. 비밀번호확인일 경우 유효성 검사하기
                - 검사기준 : 입력된 비밀번호와 일치여부
            ******************************************/
            else if (cid === "mpw2") {
                if (cv !== $('#mpw').val()) { // !== 같지 않으면            
                    $(this).siblings(".msg")
                        .text("비밀번호가 일치하지 않습니다!");

                    // 불통과!!!
                    pass = false;

                } ////////// if : 비밀번호확인 검사 불통과 //////
                /////// 검사결과가 통과이면 /////////////////
                else {
                    // 메시지 지우기
                    $(this).siblings(".msg").empty();
                } ///////// else : 비밀번호확인 검사 통과 ////////


            } //////////// else if : 비밀번호확인검사 /////////

            /****************************************** 
                5. 이메일일 경우 유효성 검사하기
                - 검사기준 : 이메일 형식에 맞는지 검사
            ******************************************/
            else if (cid === "email1") {

                // 이메일 주소 만들기
                let comp = eml1.val() + "@" +
                    (seleml.val() === "free" ? eml2.val() : seleml.val());
                // (비?집:놀이동산)
                // 선택박스값이 직접입력일 경우(free)
                // 이메일 뒷주소 입력창값을 읽어가고
                // 아니면 선택박스 값을 넣는다!
                console.log("이메일주소:", comp);

                // 이메일 검사함수 호출!
                resEml(comp);


            } //////////// else if : 비밀번호확인검사 /////////

            ///////// 만약 통과시 메시지 지우기 ////////////////
            else {
                // 메시지 지우기
                $(this).siblings(".msg").empty();
            } /////////////// else : 빈값 아닌경우 //////////

        }); //////////////// blur //////////////////////

    ////////////////// 이메일 관련 대상선정 ///////////////
    // 이메일 앞주소
    let eml1 = $("#email1");
    // 이메일 뒷주소 직접입력창
    let eml2 = $("#email2");
    // 이메일 선택박스
    let seleml = $("#seleml");
    //////////////////////////////////////////////////////

    /********************************************** 
        선택박스 변경시 이메일 검사하기 
        _______________________________

        검사시점: 선택박스 변경할때
        이벤트: change -> 제이쿼리 change()메서드
        이벤트 대상: #seleml -> seleml변수
    **********************************************/
    seleml.change(function () {
        // 1. 선택박스 변경된 값 읽어오기
        let cv = $(this).val();
        console.log("선택값:", cv);

        // 2. 선택옵션별 분기문
        if (cv === "init") { // "선택해주세요"
            // 1. 메시지 출력
            eml1.siblings(".msg")
                .text("이메일 옵션 선택필수!")
                .removeClass("on");

            // 2. 직접입력창 숨기기(나왔을 수 있음!)
            eml2.fadeOut(300);

        } //////// if ////////////////
        else if (cv === "free") { // "직접입력"
            // 1. 직접입력창 보이기("#email2"->eml2변수)
            eml2.fadeIn(300).val("").focus();
            // fadeIn(시간) -> 서서히 나타남 애니메이션
            // val(값) -> 입력창 값넣기(빈값은 지우기!)
            // focus() -> 입력창에 포커스(커서깜박임!)

            // 2. 메시지 지우기
            eml1.siblings(".msg").empty();

        } /////////// else if /////////////
        else { // 기타 이메일 주소 선택시 ///

            // 1. 직접입력창 숨기기
            eml2.fadeOut(300);

            // 2. 이메일 전체주소 조합하기
            let comp = eml1.val() + "@" + cv;
            // cv는 select의 선택옵션값!

            // 3. 이메일 유효성검사
            resEml(comp);

        } ///////////// else ///////////////

    }); ///////////// change /////////////////////

    /********************************************* 
         키보드 입력시 이메일 체크하기 
         ___________________________

         - 키보드 관련 이벤트: keypress, keyup, keydown
         1. keypress : 키가 눌려였을때
         2. keyup : 키가 눌렸다가 올라올때
         3. keydown : 키가 눌려져서 내려갈때
         -> 과연 글자가 입력되는 순간은 어떤
         키보드 이벤트를 써야할까?
         ->>>>>>>> keyup!!!!

         - 이벤트 대상: #email1, #email2

         -> 모든 이벤트를 함수와 연결하는
         제이쿼리 메서드는? ->>> on(이벤트명,함수)

     *********************************************/
    $('#email1,#email2').on('keyup', function () {

        // 1. 현재 이벤트 대상 아이디 읽어오기
        let cid = $(this).attr("id");
        console.log("현재아이디:", cid);

        // 2. 현재 입력된 값 읽어오기
        let cv = $(this).val();
        console.log("입력값:", cv);

        // 3. 이메일 뒷주소 셋팅하기
        let backeml =
            cid === "email1" ? seleml.val() : eml2.val();
        // 변수 = 조건연산자
        // 변수 = 조건식?값1:값2
        // -> 조건연산자에서 결정된 값이 변수에 할당된다!

        // 4. 선택박스 값이 "free"(직접입력)이면
        // 이메일 뒷주소로 변경함!
        if (seleml.val() === "free") backeml = eml2.val();

        // 5. 이메일 전체주소 조합하기
        let comp = eml1.val() + "@" + backeml;
        console.log("이메일 주소:", comp);

        // 6. 이메일 유효성 검사함수 호출!
        resEml(comp);


    }); //////////// keyup //////////////////////



    /****************************************** 
        함수명: resEml (result Email)
        기능: 이메일 검사결과를 처리하여 리턴함
    ******************************************/
    const resEml = comp => { // comp - 완성된 이메일 주소
        // 이메일 정규식 검사
        // console.log("이메일검사결과:",vReg(comp,"eml"));

        // 통과시 ///////////////////
        if (vReg(comp, "eml")) {
            // 메시지 띄우기
            eml1.siblings(".msg")
                .text("적합한 이메일 형식입니다!")
                .addClass("on");
        } ////////// if : 이메일 통과시 /////
        // 불통과시 /////////////////
        else {
            // 메시지 띄우기
            eml1.siblings(".msg")
                .text("맞지않는 이메일 형식입니다!")
                .removeClass("on");

            // 불통과!!!
            pass = false;

        } ////////// if : 이메일 통과시 /////

    }; /////////////// resEml 함수 /////////////

    /******************************************************* 
         가입하기(submit) 버튼 클릭시 처리하기
         ___________________________________

         전체검사의 원리:
         전역변수 pass를 설정하여 true를 할당하고
         검사 중간에 불통과 사유발생시 false로 변경!
         유효성 검사 통과여부를 판단한다!

         검사방법:
         기존에 이벤트 함수 blur 이벤트를 강제로 발생시킨다!
         이벤트 강제 발생 메서드 -> trigger(이벤트명)

     *******************************************************/

    // 검사용 변수
    let pass;

    // 이벤트 대상: 서브밋 버튼 -> #btnj
    // 원래 서브밋버튼은 클릭시 싸고 있는 form태그의
    // action속성에 지정된 페이지로 이동하게 되어있다!
    // 여기서는 유효성검사로 이 기본기능을 막을 것이다!

    $("#btnj").click(function (e) {

        // 1. 서브밋 기본이동 막기
        e.preventDefault();

        // 2. pass 통과여부 변수에 true할당!(처음시작시)
        pass = true;

        // 3. 입력창 blur 이벤트 강제발생시키기!
        // 대상: 블러이벤트 발생했던 요소들!
        $(`input[type=text][id!=email2][class!=search],
            input[type=password]`)
            .trigger("blur");

        // 통과여부
        console.log("통과여부:", pass);

        // 4. 검사결과에 따라 메시지 보이기 및 처리
        if (pass) { // 통과시 ///////////////

            // 메시지 띄우기
            alert("회원가입을 축하드립니다! 짝짝짝!");
            // 원래는 post방식으로 DB에 회원정보를 입력후
            // DB에 입력완료시 위의 메시지를 띄워준다!

            // 로그인 페이지로 이동!
            // location.replace("login.html");
            // location.href = "login.html";
            /* 
                회원가입 후 이전페이지로 못가도록
                location.replace(주소) 를 사용하여
                페이지 캐쉬를 삭제하도록하여
                좀 더 안전한 보안을 유지한다!
            */

        } ///////// if : 통과시 ////////////////
        else { //// 불통과시 ///////////////////

            alert("입력을 수정하세요~!");

        } //////////// else : 불통과시 ///////////


    }); /////////////// click ///////////////




}); /////////////////// jQB /////////////////////

/*////////////////////////////////////////////////////////
    함수명: vReg (validation with Regular Expression)
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
    // val - 검사할값, cid - 처리구분아이디
    // //console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함
    switch (cid) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // //console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////