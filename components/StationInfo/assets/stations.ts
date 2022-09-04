import type { LineName } from '../StationInfo.types'

// 2022.03.01 updated
// prettier-ignore
const stations: { [index: string]: LineName[] } = {
  "가능역": ["01호선"],
  "가산디지털단지역": ["01호선", "07호선"],
  "간석역": ["01호선"],
  "개봉역": ["01호선"],
  "관악역": ["01호선"],
  "광명역": ["01호선"],
  "광운대역": ["01호선", "경춘선"],
  "구로역": ["01호선"],
  "구일역": ["01호선"],
  "군포역": ["01호선"],
  "금정역": ["01호선", "04호선"],
  "금천구청역": ["01호선"],
  "남영역": ["01호선"],
  "노량진역": ["01호선", "09호선"],
  "녹양역": ["01호선"],
  "녹천역": ["01호선"],
  "당정역": ["01호선"],
  "대방역": ["01호선"],
  "덕계역": ["01호선"],
  "덕정역": ["01호선"],
  "도봉산역": ["01호선", "07호선"],
  "도봉역": ["01호선"],
  "도원역": ["01호선"],
  "도화역": ["01호선"],
  "독산역": ["01호선"],
  "동대문역": ["01호선", "04호선"],
  "동두천역": ["01호선"],
  "동두천중앙역": ["01호선"],
  "동묘앞역": ["01호선", "06호선"],
  "동암역": ["01호선"],
  "동인천역": ["01호선"],
  "두정역": ["01호선"],
  "망월사역": ["01호선"],
  "명학역": ["01호선"],
  "방학역": ["01호선"],
  "배방역": ["01호선"],
  "백운역": ["01호선"],
  "병점역": ["01호선"],
  "보산역": ["01호선"],
  "봉명역": ["01호선"],
  "부개역": ["01호선"],
  "부천역": ["01호선"],
  "부평역": ["01호선", "인천선"],
  "서동탄역": ["01호선"],
  "서울역역": ["01호선", "04호선", "경의선", "공항철도"],
  "서정리역": ["01호선"],
  "석계역": ["01호선", "06호선"],
  "석수역": ["01호선"],
  "성균관대역": ["01호선"],
  "성환역": ["01호선"],
  "세류역": ["01호선"],
  "세마역": ["01호선"],
  "소사역": ["01호선", "서해선"],
  "소요산역": ["01호선"],
  "송내역": ["01호선"],
  "송탄역": ["01호선"],
  "수원역": ["01호선", "수인분당선"],
  "시청역": ["01호선", "02호선"],
  "신길역": ["01호선", "05호선"],
  "신도림역": ["01호선", "02호선"],
  "신설동역": ["01호선", "02호선", "우이신설경전철"],
  "신이문역": ["01호선"],
  "신창역": ["01호선"],
  "쌍용역": ["01호선"],
  "아산역": ["01호선"],
  "안양역": ["01호선"],
  "양주역": ["01호선"],
  "역곡역": ["01호선"],
  "영등포역": ["01호선"],
  "오류동역": ["01호선"],
  "오산대역": ["01호선"],
  "오산역": ["01호선"],
  "온수역": ["01호선", "07호선"],
  "온양온천역": ["01호선"],
  "외대앞역": ["01호선"],
  "용산역": ["01호선", "경의선"],
  "월계역": ["01호선"],
  "의왕역": ["01호선"],
  "의정부역": ["01호선"],
  "인천역": ["01호선", "수인분당선"],
  "제기동역": ["01호선"],
  "제물포역": ["01호선"],
  "종각역": ["01호선"],
  "종로3가역": ["01호선", "03호선", "05호선"],
  "종로5가역": ["01호선"],
  "주안역": ["01호선", "인천2호선"],
  "중동역": ["01호선"],
  "지행역": ["01호선"],
  "직산역": ["01호선"],
  "진위역": ["01호선"],
  "창동역": ["01호선", "04호선"],
  "천안역": ["01호선"],
  "청량리역": ["01호선", "경의선", "경춘선", "수인분당선"],
  "탕정역": ["01호선"],
  "평택역": ["01호선"],
  "평택지제역": ["01호선"],
  "화서역": ["01호선"],
  "회기역": ["01호선", "경의선", "경춘선"],
  "회룡역": ["01호선", "의정부경전철"],
  "강남역": ["02호선", "신분당선"],
  "강변역": ["02호선"],
  "건대입구역": ["02호선", "07호선"],
  "교대역": ["02호선", "03호선"],
  "구로디지털단지역": ["02호선"],
  "구의역": ["02호선"],
  "까치산역": ["02호선", "05호선"],
  "낙성대역": ["02호선"],
  "당산역": ["02호선", "09호선"],
  "대림역": ["02호선", "07호선"],
  "도림천역": ["02호선"],
  "동대문역사문화공원역": ["02호선", "04호선", "05호선"],
  "뚝섬역": ["02호선"],
  "문래역": ["02호선"],
  "방배역": ["02호선"],
  "봉천역": ["02호선"],
  "사당역": ["02호선", "04호선"],
  "삼성역": ["02호선"],
  "상왕십리역": ["02호선"],
  "서울대입구역": ["02호선"],
  "서초역": ["02호선"],
  "선릉역": ["02호선", "수인분당선"],
  "성수역": ["02호선"],
  "신답역": ["02호선"],
  "신당역": ["02호선", "06호선"],
  "신대방역": ["02호선"],
  "신림역": ["02호선"],
  "신정네거리역": ["02호선"],
  "신촌역": ["02호선", "경의선"],
  "아현역": ["02호선"],
  "양천구청역": ["02호선"],
  "역삼역": ["02호선"],
  "영등포구청역": ["02호선", "05호선"],
  "왕십리역": ["02호선", "05호선", "경의선", "수인분당선"],
  "용답역": ["02호선"],
  "용두역": ["02호선"],
  "을지로3가역": ["02호선", "03호선"],
  "을지로4가역": ["02호선", "05호선"],
  "을지로입구역": ["02호선"],
  "이대역": ["02호선"],
  "잠실나루역": ["02호선"],
  "잠실새내역": ["02호선"],
  "잠실역": ["02호선", "08호선"],
  "종합운동장역": ["02호선", "09호선"],
  "충정로역": ["02호선", "05호선"],
  "한양대역": ["02호선"],
  "합정역": ["02호선", "06호선"],
  "홍대입구역": ["02호선", "경의선", "공항철도"],
  "가락시장역": ["03호선", "08호선"],
  "경복궁역": ["03호선"],
  "경찰병원역": ["03호선"],
  "고속터미널역": ["03호선", "07호선", "09호선"],
  "구파발역": ["03호선"],
  "금호역": ["03호선"],
  "남부터미널역": ["03호선"],
  "녹번역": ["03호선"],
  "대곡역": ["03호선", "경의선"],
  "대청역": ["03호선"],
  "대치역": ["03호선"],
  "대화역": ["03호선"],
  "도곡역": ["03호선", "수인분당선"],
  "독립문역": ["03호선"],
  "동대입구역": ["03호선"],
  "마두역": ["03호선"],
  "매봉역": ["03호선"],
  "무악재역": ["03호선"],
  "백석역": ["03호선"],
  "불광역": ["03호선", "06호선"],
  "삼송역": ["03호선"],
  "수서역": ["03호선", "수인분당선"],
  "신사역": ["03호선"],
  "안국역": ["03호선"],
  "압구정역": ["03호선"],
  "약수역": ["03호선", "06호선"],
  "양재역": ["03호선", "신분당선"],
  "연신내역": ["03호선", "06호선"],
  "오금역": ["03호선", "05호선"],
  "옥수역": ["03호선", "경의선"],
  "원당역": ["03호선"],
  "원흥역": ["03호선"],
  "일원역": ["03호선"],
  "잠원역": ["03호선"],
  "정발산역": ["03호선"],
  "주엽역": ["03호선"],
  "지축역": ["03호선"],
  "충무로역": ["03호선", "04호선"],
  "학여울역": ["03호선"],
  "홍제역": ["03호선"],
  "화정역": ["03호선"],
  "경마공원역": ["04호선"],
  "고잔역": ["04호선", "수인분당선"],
  "과천역": ["04호선"],
  "길음역": ["04호선"],
  "남태령역": ["04호선"],
  "노원역": ["04호선", "07호선"],
  "당고개역": ["04호선"],
  "대공원역": ["04호선"],
  "대야미역": ["04호선"],
  "동작역": ["04호선", "09호선"],
  "명동역": ["04호선"],
  "미아사거리역": ["04호선"],
  "미아역": ["04호선"],
  "반월역": ["04호선"],
  "범계역": ["04호선"],
  "산본역": ["04호선"],
  "삼각지역": ["04호선", "06호선"],
  "상계역": ["04호선"],
  "상록수역": ["04호선"],
  "선바위역": ["04호선"],
  "성신여대입구역": ["04호선", "우이신설경전철"],
  "수리산역": ["04호선"],
  "수유역": ["04호선"],
  "숙대입구역": ["04호선"],
  "신길온천역": ["04호선", "수인분당선"],
  "신용산역": ["04호선"],
  "쌍문역": ["04호선"],
  "안산역": ["04호선", "수인분당선"],
  "오이도역": ["04호선", "수인분당선"],
  "이촌역": ["04호선", "경의선"],
  "인덕원역": ["04호선"],
  "정부과천청사역": ["04호선"],
  "정왕역": ["04호선", "수인분당선"],
  "중앙역": ["04호선", "수인분당선"],
  "초지역": ["04호선", "서해선", "수인분당선"],
  "총신대입구역": ["04호선"],
  "평촌역": ["04호선"],
  "한대앞역": ["04호선", "수인분당선"],
  "한성대입구역": ["04호선"],
  "혜화역": ["04호선"],
  "회현역": ["04호선"],
  "강동역": ["05호선"],
  "강일역": ["05호선"],
  "개롱역": ["05호선"],
  "개화산역": ["05호선"],
  "거여역": ["05호선"],
  "고덕역": ["05호선"],
  "공덕역": ["05호선", "06호선", "경의선", "공항철도"],
  "광나루역": ["05호선"],
  "광화문역": ["05호선"],
  "군자역": ["05호선", "07호선"],
  "굽은다리역": ["05호선"],
  "길동역": ["05호선"],
  "김포공항역": ["05호선", "09호선", "공항철도", "김포골드"],
  "답십리역": ["05호선"],
  "둔촌동역": ["05호선"],
  "마곡역": ["05호선"],
  "마장역": ["05호선"],
  "마천역": ["05호선"],
  "마포역": ["05호선"],
  "명일역": ["05호선"],
  "목동역": ["05호선"],
  "미사역": ["05호선"],
  "발산역": ["05호선"],
  "방이역": ["05호선"],
  "방화역": ["05호선"],
  "상일동역": ["05호선"],
  "서대문역": ["05호선"],
  "송정역": ["05호선"],
  "신금호역": ["05호선"],
  "신정역": ["05호선"],
  "아차산역": ["05호선"],
  "애오개역": ["05호선"],
  "양평역": ["05호선", "경의선"],
  "여의나루역": ["05호선"],
  "여의도역": ["05호선", "09호선"],
  "영등포시장역": ["05호선"],
  "오목교역": ["05호선"],
  "올림픽공원역": ["05호선", "09호선"],
  "우장산역": ["05호선"],
  "장한평역": ["05호선"],
  "천호역": ["05호선", "08호선"],
  "청구역": ["05호선", "06호선"],
  "하남검단산역": ["05호선"],
  "하남시청역": ["05호선"],
  "하남풍산역": ["05호선"],
  "행당역": ["05호선"],
  "화곡역": ["05호선"],
  "고려대역": ["06호선"],
  "광흥창역": ["06호선"],
  "구산역": ["06호선"],
  "녹사평역": ["06호선"],
  "대흥역": ["06호선"],
  "독바위역": ["06호선"],
  "돌곶이역": ["06호선"],
  "디지털미디어시티역": ["06호선", "경의선", "공항철도"],
  "마포구청역": ["06호선"],
  "망원역": ["06호선"],
  "버티고개역": ["06호선"],
  "보문역": ["06호선", "우이신설경전철"],
  "봉화산역": ["06호선"],
  "상수역": ["06호선"],
  "상월곡역": ["06호선"],
  "새절역": ["06호선"],
  "신내역": ["06호선", "경춘선"],
  "안암역": ["06호선"],
  "역촌역": ["06호선"],
  "월곡역": ["06호선"],
  "월드컵경기장역": ["06호선"],
  "응암역": ["06호선"],
  "이태원역": ["06호선"],
  "증산역": ["06호선"],
  "창신역": ["06호선"],
  "태릉입구역": ["06호선", "07호선"],
  "한강진역": ["06호선"],
  "화랑대역": ["06호선"],
  "효창공원앞역": ["06호선", "경의선"],
  "강남구청역": ["07호선", "수인분당선"],
  "공릉역": ["07호선"],
  "광명사거리역": ["07호선"],
  "굴포천역": ["07호선"],
  "까치울역": ["07호선"],
  "남구로역": ["07호선"],
  "남성역": ["07호선"],
  "내방역": ["07호선"],
  "논현역": ["07호선"],
  "뚝섬유원지역": ["07호선"],
  "마들역": ["07호선"],
  "먹골역": ["07호선"],
  "면목역": ["07호선"],
  "반포역": ["07호선"],
  "보라매역": ["07호선"],
  "부천시청역": ["07호선"],
  "부천종합운동장역": ["07호선"],
  "부평구청역": ["07호선", "인천선"],
  "사가정역": ["07호선"],
  "산곡역": ["07호선"],
  "삼산체육관역": ["07호선"],
  "상도역": ["07호선"],
  "상동역": ["07호선"],
  "상봉역": ["07호선", "경의선", "경춘선"],
  "석남역": ["07호선", "인천2호선"],
  "수락산역": ["07호선"],
  "숭실대입구역": ["07호선"],
  "신대방삼거리역": ["07호선"],
  "신중동역": ["07호선"],
  "신풍역": ["07호선"],
  "어린이대공원역": ["07호선"],
  "용마산역": ["07호선"],
  "이수역": ["07호선"],
  "장승배기역": ["07호선"],
  "장암역": ["07호선"],
  "중계역": ["07호선"],
  "중곡역": ["07호선"],
  "중화역": ["07호선"],
  "천왕역": ["07호선"],
  "철산역": ["07호선"],
  "청담역": ["07호선"],
  "춘의역": ["07호선"],
  "하계역": ["07호선"],
  "학동역": ["07호선"],
  "강동구청역": ["08호선"],
  "남위례역": ["08호선"],
  "남한산성입구역": ["08호선"],
  "단대오거리역": ["08호선"],
  "모란역": ["08호선", "수인분당선"],
  "몽촌토성역": ["08호선"],
  "문정역": ["08호선"],
  "복정역": ["08호선", "수인분당선"],
  "산성역": ["08호선"],
  "석촌역": ["08호선", "09호선"],
  "송파역": ["08호선"],
  "수진역": ["08호선"],
  "신흥역": ["08호선"],
  "암사역": ["08호선"],
  "장지역": ["08호선"],
  "가양역": ["09호선"],
  "개화역": ["09호선"],
  "공항시장역": ["09호선"],
  "구반포역": ["09호선"],
  "국회의사당역": ["09호선"],
  "노들역": ["09호선"],
  "둔촌오륜역": ["09호선"],
  "등촌역": ["09호선"],
  "마곡나루역": ["09호선", "공항철도"],
  "봉은사역": ["09호선"],
  "사평역": ["09호선"],
  "삼성중앙역": ["09호선"],
  "삼전역": ["09호선"],
  "샛강역": ["09호선"],
  "석촌고분역": ["09호선"],
  "선유도역": ["09호선"],
  "선정릉역": ["09호선", "수인분당선"],
  "송파나루역": ["09호선"],
  "신논현역": ["09호선"],
  "신목동역": ["09호선"],
  "신반포역": ["09호선"],
  "신방화역": ["09호선"],
  "양천향교역": ["09호선"],
  "언주역": ["09호선"],
  "염창역": ["09호선"],
  "중앙보훈병원역": ["09호선"],
  "증미역": ["09호선"],
  "한성백제역": ["09호선"],
  "흑석역": ["09호선"],
  "경기광주역": ["경강선"],
  "곤지암역": ["경강선"],
  "부발역": ["경강선"],
  "삼동역": ["경강선"],
  "세종대왕릉역": ["경강선"],
  "신둔도예촌역": ["경강선"],
  "여주역": ["경강선"],
  "이매역": ["경강선", "수인분당선"],
  "이천역": ["경강선"],
  "초월역": ["경강선"],
  "판교역": ["경강선", "신분당선"],
  "가좌역": ["경의선"],
  "강매역": ["경의선"],
  "곡산역": ["경의선"],
  "구리역": ["경의선"],
  "국수역": ["경의선"],
  "금릉역": ["경의선"],
  "금촌역": ["경의선"],
  "능곡역": ["경의선"],
  "덕소역": ["경의선"],
  "도농역": ["경의선"],
  "도심역": ["경의선"],
  "망우역": ["경의선", "경춘선"],
  "문산역": ["경의선"],
  "백마역": ["경의선"],
  "서강대역": ["경의선"],
  "서빙고역": ["경의선"],
  "수색역": ["경의선"],
  "신원역": ["경의선"],
  "아신역": ["경의선"],
  "야당역": ["경의선"],
  "양수역": ["경의선"],
  "양원역": ["경의선"],
  "양정역": ["경의선"],
  "오빈역": ["경의선"],
  "용문역": ["경의선"],
  "운길산역": ["경의선"],
  "운정역": ["경의선"],
  "원덕역": ["경의선"],
  "월롱역": ["경의선"],
  "응봉역": ["경의선"],
  "일산역": ["경의선"],
  "임진강역": ["경의선"],
  "중랑역": ["경의선", "경춘선"],
  "지평역": ["경의선"],
  "탄현역": ["경의선"],
  "파주역": ["경의선"],
  "팔당역": ["경의선"],
  "풍산역": ["경의선"],
  "한남역": ["경의선"],
  "행신역": ["경의선"],
  "화전역": ["경의선"],
  "가평역": ["경춘선"],
  "갈매역": ["경춘선"],
  "강촌역": ["경춘선"],
  "굴봉산역": ["경춘선"],
  "금곡역": ["경춘선"],
  "김유정역": ["경춘선"],
  "남춘천역": ["경춘선"],
  "대성리역": ["경춘선"],
  "마석역": ["경춘선"],
  "백양리역": ["경춘선"],
  "별내역": ["경춘선"],
  "사릉역": ["경춘선"],
  "상천역": ["경춘선"],
  "천마산역": ["경춘선"],
  "청평역": ["경춘선"],
  "춘천역": ["경춘선"],
  "퇴계원역": ["경춘선"],
  "평내호평역": ["경춘선"],
  "검암역": ["공항철도", "인천2호선"],
  "계양역": ["공항철도", "인천선"],
  "공항화물청사역": ["공항철도"],
  "영종역": ["공항철도"],
  "운서역": ["공항철도"],
  "인천공항1터미널역": ["공항철도"],
  "인천공항2터미널역": ["공항철도"],
  "청라국제도시역": ["공항철도"],
  "걸포북변역": ["김포골드"],
  "고촌역": ["김포골드"],
  "구래역": ["김포골드"],
  "마산역": ["김포골드"],
  "사우역": ["김포골드"],
  "양촌역": ["김포골드"],
  "운양역": ["김포골드"],
  "장기역": ["김포골드"],
  "풍무역": ["김포골드"],
  "달미역": ["서해선"],
  "선부역": ["서해선"],
  "소새울역": ["서해선"],
  "시우역": ["서해선"],
  "시흥능곡역": ["서해선"],
  "시흥대야역": ["서해선"],
  "시흥시청역": ["서해선"],
  "신천역": ["서해선"],
  "신현역": ["서해선"],
  "원시역": ["서해선"],
  "가천대역": ["수인분당선"],
  "개포동역": ["수인분당선"],
  "고색역": ["수인분당선"],
  "구룡역": ["수인분당선"],
  "구성역": ["수인분당선"],
  "기흥역": ["수인분당선", "용인경전철"],
  "남동인더스파크역": ["수인분당선"],
  "달월역": ["수인분당선"],
  "대모산입구역": ["수인분당선"],
  "망포역": ["수인분당선"],
  "매교역": ["수인분당선"],
  "매탄권선역": ["수인분당선"],
  "미금역": ["수인분당선", "신분당선"],
  "보정역": ["수인분당선"],
  "사리역": ["수인분당선"],
  "상갈역": ["수인분당선"],
  "서울숲역": ["수인분당선"],
  "서현역": ["수인분당선"],
  "소래포구역": ["수인분당선"],
  "송도역": ["수인분당선"],
  "수내역": ["수인분당선"],
  "수원시청역": ["수인분당선"],
  "숭의역": ["수인분당선"],
  "신갈역": ["수인분당선"],
  "신포역": ["수인분당선"],
  "압구정로데오역": ["수인분당선"],
  "야목역": ["수인분당선"],
  "야탑역": ["수인분당선"],
  "어천역": ["수인분당선"],
  "연수역": ["수인분당선"],
  "영통역": ["수인분당선"],
  "오리역": ["수인분당선"],
  "오목천역": ["수인분당선"],
  "원인재역": ["수인분당선", "인천선"],
  "월곶역": ["수인분당선"],
  "인천논현역": ["수인분당선"],
  "인하대역": ["수인분당선"],
  "정자역": ["수인분당선", "신분당선"],
  "죽전역": ["수인분당선"],
  "청명역": ["수인분당선"],
  "태평역": ["수인분당선"],
  "한티역": ["수인분당선"],
  "호구포역": ["수인분당선"],
  "광교역": ["신분당선"],
  "광교중앙역": ["신분당선"],
  "동천역": ["신분당선"],
  "상현역": ["신분당선"],
  "성복역": ["신분당선"],
  "수지구청역": ["신분당선"],
  "양재시민의숲역": ["신분당선"],
  "청계산입구역": ["신분당선"],
  "강남대역": ["용인경전철"],
  "고진역": ["용인경전철"],
  "김량장역": ["용인경전철"],
  "동백역": ["용인경전철"],
  "둔전역": ["용인경전철"],
  "명지대역": ["용인경전철"],
  "보평역": ["용인경전철"],
  "삼가역": ["용인경전철"],
  "시청.용인대역": ["용인경전철"],
  "어정역": ["용인경전철"],
  "운동장.송담대역": ["용인경전철"],
  "전대.에버랜드역": ["용인경전철"],
  "지석역": ["용인경전철"],
  "초당역": ["용인경전철"],
  "4·19민주묘지역": ["우이신설경전철"],
  "가오리역": ["우이신설경전철"],
  "북한산보국문역": ["우이신설경전철"],
  "북한산우이역": ["우이신설경전철"],
  "삼양사거리역": ["우이신설경전철"],
  "삼양역": ["우이신설경전철"],
  "솔밭공원역": ["우이신설경전철"],
  "솔샘역": ["우이신설경전철"],
  "정릉역": ["우이신설경전철"],
  "화계역": ["우이신설경전철"],
  "경기도청북부청사역": ["의정부경전철"],
  "경전철의정부역": ["의정부경전철"],
  "곤제역": ["의정부경전철"],
  "동오역": ["의정부경전철"],
  "발곡역": ["의정부경전철"],
  "범골역": ["의정부경전철"],
  "새말역": ["의정부경전철"],
  "송산역": ["의정부경전철"],
  "어룡역": ["의정부경전철"],
  "의정부시청역": ["의정부경전철"],
  "의정부중앙역": ["의정부경전철"],
  "탑석역": ["의정부경전철"],
  "효자역": ["의정부경전철"],
  "흥선역": ["의정부경전철"],
  "가재울역": ["인천2호선"],
  "가정역": ["인천2호선"],
  "가정중앙시장역": ["인천2호선"],
  "검단사거리역": ["인천2호선"],
  "검단오류역": ["인천2호선"],
  "검바위역": ["인천2호선"],
  "남동구청역": ["인천2호선"],
  "독정역": ["인천2호선"],
  "마전역": ["인천2호선"],
  "만수역": ["인천2호선"],
  "모래내시장역": ["인천2호선"],
  "서구청역": ["인천2호선"],
  "서부여성회관역": ["인천2호선"],
  "석바위시장역": ["인천2호선"],
  "석천사거리역": ["인천2호선"],
  "시민공원역": ["인천2호선"],
  "아시아드경기장역": ["인천2호선"],
  "완정역": ["인천2호선"],
  "왕길역": ["인천2호선"],
  "운연역": ["인천2호선"],
  "인천가좌역": ["인천2호선"],
  "인천대공원역": ["인천2호선"],
  "인천시청역": ["인천2호선", "인천선"],
  "주안국가산단역": ["인천2호선"],
  "간석오거리역": ["인천선"],
  "갈산역": ["인천선"],
  "경인교대입구역": ["인천선"],
  "계산역": ["인천선"],
  "국제업무지구역": ["인천선"],
  "귤현역": ["인천선"],
  "동막역": ["인천선"],
  "동수역": ["인천선"],
  "동춘역": ["인천선"],
  "문학경기장역": ["인천선"],
  "박촌역": ["인천선"],
  "부평삼거리역": ["인천선"],
  "부평시장역": ["인천선"],
  "선학역": ["인천선"],
  "센트럴파크역": ["인천선"],
  "송도달빛축제공원역": ["인천선"],
  "신연수역": ["인천선"],
  "예술회관역": ["인천선"],
  "인천대입구역": ["인천선"],
  "인천터미널역": ["인천선"],
  "임학역": ["인천선"],
  "작전역": ["인천선"],
  "지식정보단지역": ["인천선"],
  "캠퍼스타운역": ["인천선"],
  "테크노파크역": ["인천선"]
};

export default stations
