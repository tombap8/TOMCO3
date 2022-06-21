// 보그 JS 카데고리 페이지 JS - category.js

///// 각 서브별 데이터 셋팅하기 /////
const sinfo = {
    "fashion": {
        "제목": "Fashion",
        "메뉴": ["전체", "트렌드", "아이템", "피플", "화보"],
        "경로": "fashion",
        "타이틀": [
            "&lt;고양이를 부탁해&gt;의 20주년 기획전",
            "패션계에서 가장 주목받는 신인 디자이너, 자크무스",
            "서울국제여성영화제 장편 경쟁 한국 영화 4편",
            "드라마 &lt;알고 있지만&gt;의 나비가 유행이라고?",
            "홍콩 누아르 영화 주인공으로 변신한 민주",
            "MSG워너비여, 영원하라!"
        ]
    },
    "beauty": {
        "제목": "Beauty",
        "메뉴": ["전체", "트렌드", "아이템", "헬스", "피플"],
        "경로": "beauty",
        "타이틀": [
            "매실의 놀라운 효능",
            "맥시멀 뷰티의 신세계",
            "브라렛보다 니플 패치?",
            "지금 고쳐야 할 샤워 습관 6",
            "‘급찐살’ 저격! 셀럽들의 비건 식단",
            "팝한 여름 헤어 액세서리 활용법"
        ]
    },
    "living": {
        "제목": "Living",
        "메뉴": ["전체", "여행", "음식", "문화", "인테리어", "키즈", "테크"],
        "경로": "living",
        "타이틀": [
            "파리에 도버 스트리트 ‘리틀’ 마켓이 오픈했다",
            "전망 좋은 홈 오피스",
            "랜선 눈꽃 여행",
            "2021년 새 계절을 위한 새것 모음",
            "눈 호강 제대로, 뉴 호텔 5",
            "고요한 겨울, 호캉스"
        ]
    },
    "people": {
        "제목": "People",
        "메뉴": "없음",
        "경로": "people",
        "타이틀": [
            "아르마니의 시간, 아르마니의 약속",
            "슈퍼모델 나오미 캠벨의 그림 같은 빌라",
            "가구와 오브제를 창조하는 젊은 디자이너 6인",
            "지지와 벨라의 엄마, 욜란다가 말하는 ‘라임병’",
            "성별 고정관념을 깨는 파격 캐스팅",
            "멋쟁이 엄마를 소개합니다"
        ]
    },
    "video": {
        "제목": "Video",
        "메뉴": "없음",
        "경로": "video",
        "타이틀": [
            "발렌시아가의 50th 꾸뛰르 컬렉션 라이브 스트리밍",
            "뉴욕 패션 위크에 소개된 한국 디자이너 브랜드",
            "에디터 제니가 선택한 주얼리는?",
            "디올 FALL-WINTER 2021-2022 레디 투 웨어 컬렉션 라이브 스트리밍",
            "프라다 2021 F/W 시즌 여성복 컬렉션 라이브 스트리밍",
            "발렌시아가 SUMMER 21 (PRE-COLLECTION)"
        ]
    },
    "runway": {
        "제목": "Runway",
        "메뉴": "없음",
        "경로": "runway",
        "타이틀": [
            "<small>Ready To Wear 2021 F/W</small><br>Rick Owens",
            "<small>Ready To Wear 2021 F/W</small><br>We11done",
            "<small>Ready To Wear 2021 F/W</small><br>Comme des Garçons",
            "<small>Ready To Wear 2021 F/W</small><br>Chloé",
            "<small>Ready To Wear 2021 F/W</small><br>Balmain",
            "<small>Ready To Wear 2021 F/W</small><br>Loewe"
        ]
    },
    "shopping": {
        "제목": "Shopping",
        "메뉴": ["전체", "패션", "뷰티", "리빙"],
        "경로": "shopping",
        "타이틀": [
            "여름과 찰떡궁합! 세라믹 바구니",
            "사용할수록 매력적인 테크 제품",
            "취향 있는 플랜터",
            "감사의 마음을 담은, 부모님을 위한 선물",
            "성년을 위한 선물",
            "작고 소중한 아이들을 위한 선물"
        ]
    },
    "time & gem": {
        "제목": "TIME & GEM",
        "메뉴": "없음",
        "경로": "time-gem",
        "타이틀": [
            "욕망으로 가득한 초현실적 시간",
            "몸과 주얼리, 질감의 관능",
            "젠더리스 주얼리",
            "열한 가지 시간의 얼굴",
            "하이 주얼리와 보디가드의 영화적 만남",
            "덴마크 보석 디자이너만의 ‘바로크 펑크’ 기술"
        ]
    }
}; ////////// sinfo ////////////////

// URL로 넘어온 파라미터 전달값 받기 ///
// GET방식으로 넘어온 (키=값) 쌍을 받는다!
// 변수 = location.href -> url값을 읽어옴!
let pm = location.href;
// 현재 파라미터값만 필요하므로
// 물음표(?)로 잘라서 뒤엣것 -> [1]
// 이퀄(=)로 잘라서 뒤엣것 -> [1]
pm = pm.split('?')[1].split('=')[1];
pm = decodeURIComponent(pm);
console.log(pm);
// 특수문자가 있으므로 (time & gem) 이것을 보낼때
// encodeURIComponent()로 변환하여 보내고 
// 받는 곳에서는 decodeURIComponent()로 복원함

$(() => { ///////////// 로드구역 //////////////////

    // 1. 해당 카테고리의 데이터 셋업
    const data = sinfo[pm];
    console.log(data);

    // 2. 데이터 페이지 바인딩하기 ///
    // (1) 타이틀 넣기
    $(".stit").text(data['제목']);

    // (2) .cont에 카테고리 클래스 넣기(배경이미지나옴)
    // -> "경로"데이터로 클래스명을 줘야함!
    // 대상: .cont
    $(".cont").addClass(data['경로']);

    // (3) LNB 메뉴 셋팅하기
    // "메뉴"데이터로 값이 "없음"이 아닐경우
    // 메뉴수만큼 ul>li>a 의 구조로 메뉴를 구성함!
    let menu = data['메뉴'];
    console.log("메뉴:", menu);
    // 대상: .lnb
    let lnb = $(".lnb");
    // 임시코드변수(ul>li>a담을변수)
    let hcode = "";
    // 분기: 조건 - 데이터가 "없음"인가?
    if (menu === "없음") lnb.remove();
    else { // 메뉴만들기
        hcode += "<ul>";

        // 메뉴배열만큼 코드만들기!
        // 배열 forEach()문에서 함수전달값이 하나이면
        // 그것은 바로 배열값이다! val변수가 배열값!
        menu.forEach(val => {
            hcode += "<li>";
            hcode += `<a href="#">${val}</a>`;
            hcode += "</li>";
        }); /////// forEach /////////

        hcode += "</ul>";

        // 코드넣기
        lnb.html(hcode);

    } ///////// else /////////

    // (4) 각 컨텐츠박스 타이틀 넣기
    // 대상: .cbx h2
    // 데이터: "타이틀"의 배열
    // each((순번,요소자신)=>{코드})
    $(".cbx h2").each(
        (idx,ele)=>$(ele).html(data['타이틀'][idx]));
        // data['타이틀'][배열순번]
        // 배열순번 === h2요소순번 === idx

}); ///////////////// jQB //////////////////////