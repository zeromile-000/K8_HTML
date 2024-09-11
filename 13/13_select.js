// OPEN API를 통해 데이터를 가져오는 함수
const getData = (selDt, ul, gubun) => {
  console.log('gubun = ', gubun); // 선택된 국가 코드를 콘솔에 출력

  // API 키
  const testAPI = '82ca741a2844c5c180a208137bb92bd7';

  // 기본 API URL 설정
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  
  // 선택된 날짜(selDt)와 API 키를 URL에 추가
  url = `${url}key=${testAPI}&targetDt=${selDt}`;

  // 만약 gubun(국가 코드)이 'T'가 아니면, URL에 국가 코드 파라미터 추가
  if (gubun !== 'T') {
    url = `${url}&repNationCd=${gubun}`;
  }

  console.log(url); // 최종 URL을 콘솔에 출력

  // fetch를 이용해 API 호출
  fetch(url)
    .then(resp => resp.json()) // 응답을 JSON 형식으로 변환
    .then(data => {
      // dailyBoxOfficeList 배열에 박스오피스 데이터를 할당
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList); // 박스오피스 데이터를 콘솔에 출력

      // 박스오피스 데이터를 이용해 리스트 아이템 생성
      let tm = dailyBoxOfficeList.map(item => 
        `<li class='mvli'>
            <span class='rank'>${item.rank}</span> 
            <span class='movieNm'>${item.movieNm}</span> 
            <span class='openDt'>${item.openDt}</span> 
            <span class='rankInten'>${item.rankInten > 0? `<span class = "spRed">▲</span>` :item.rankInten < 0? `<span class = "spBlue">▼</span>` : '-'}
            ${item.rankInten !=0? Math.abs(item.rankInten) : ''}
            </span>
          </li>`);

      tm = tm.join(''); // 리스트 아이템을 문자열로 변환
      ul.innerHTML = tm; // ul 요소에 생성된 리스트 추가
      console.log(tm); // 생성된 HTML을 콘솔에 출력
    })
    .catch(err => console.error(err)); // 에러 발생 시 콘솔에 에러 출력
}

// 어제 날짜를 반환하는 함수
const getYesterday = () => {
  const yesterday = new Date(); // 현재 날짜를 생성
  yesterday.setDate(yesterday.getDate() - 1); // 하루 전 날짜로 설정

  const year = yesterday.getFullYear(); // 연도 추출
  let month = yesterday.getMonth() + 1; // 월 추출 (0부터 시작하므로 +1)
  let day = yesterday.getDate(); // 일 추출

  // 월이 10보다 작을 경우 앞에 '0'을 붙여 2자리로 맞춤
  month = month < 10 ? '0' + month : month;

  // 일이 10보다 작을 경우 앞에 '0'을 붙여 2자리로 맞춤
  day = day < 10 ? '0' + day : day;

  // 'yyyy-mm-dd' 형식으로 날짜 반환
  return `${year}-${month}-${day}`;
}

// DOM이 모두 로드된 후 실행되는 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
  // 날짜 선택 요소, ul 리스트, 국가 코드 선택 요소 가져오기
  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec > ul');
  const NationCd = document.querySelector('#NationCd');

  // 어제 날짜 구하기
  let yesterday = getYesterday();
  console.log('yesterday :', yesterday); // 어제 날짜 콘솔에 출력

  // date 요소의 최대값을 어제 날짜로 설정
  dt.max = yesterday;

// date 기본값
  dt.value = yesterday;

  // 기본 첫 페이지 보이기
  getData(dt.value.replaceAll('-', ''), ul, NationCd.value);


  // 날짜가 변경될 때 데이터를 가져오는 이벤트 리스너 추가
  dt.addEventListener('change', () => {
    getData(dt.value.replaceAll('-', ''), ul, NationCd.value);// 선택된 날짜에서 하이픈을 제거하고, 국가 코드와 함께 API 요청
  });
  NationCd.addEventListener('change', () => {
    getData(dt.value.replaceAll('-', ''), ul, NationCd.value);// 선택된 날짜에서 하이픈을 제거하고, 국가 코드와 함께 API 요청
  });
});
