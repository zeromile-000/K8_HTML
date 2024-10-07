document.addEventListener('DOMContentLoaded', ()=>{
  // 요소 가져오기
  const dt = document.querySelector('input[type=date]');
  const mvList = document.querySelector('#mvList');

  // 어제 날짜 구하기
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1); // 어제 날짜

  // 어제 년월일 구하기 yyyy-mm-dd
  const year = yesterday.getFullYear (); // 년도를 4자리로 가져오기
  // getMonth() : 0월 ~ 11월 , 0월부터 가져오기 때문에 +1을 해줘야 1월 부터 가져올 수 있다.
  // const month = (yesterday.getMonth() + 1) > 9 // mm 단위로 가져오기
  //               ? (yesterday.getMonth() + 1) // 9보다 크면 그대로 사용
  //               : '0' +(yesterday.getMonth() + 1); // 9보다 작으면 앞에 0을 붙여서 사용


  const month = String(yesterday.getMonth()+1).padStart(2,'0'); // padStart() 자리수를 지정 및 부족할 경우 대체할 키워드를 삽입
  const day = String(yesterday.getDate()).padStart(2,'0');
  const maxDate = `${year}-${month}-${day}`; // 어제 날짜 형식 지정 및 데이터 삽입
  console.log(maxDate)

  dt.max = maxDate; // 어제 날짜이후 선택제한


  // API 데이터 가져오기
  dt.addEventListener('change', ()=> { // 날짜가 바뀌었을 떄 
    let testApikey = '82ca741a2844c5c180a208137bb92bd7' // testApikey 변수에 key정보를 할당
    url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?` // url 주소를 할당
    url = `${url}key=${testApikey}&targetDt=${dt.value.replaceAll('-','')}`
    
    console.log(url)

    fetch(url) // 서버에 url 데이터 요청
      .then(resp => resp.json()) // 받아온 url 데이터를 json 데이터로 변환
      .then(data => {
        console.log(data.boxOfficeResult.dailyBoxOfficeList); // data를 콘솔에 출력
        let mv = data.boxOfficeResult.dailyBoxOfficeList; // mv 변수에 boxOfficeResult 안에 있는 dailyBoxOfficeList의 배열 데이터를 할당
        let mvLi = '' ; // 빈 배열 생성
        for(let item of mv){ // mv를 item에 순차적으로 값을 대입
          mvLi = mvLi + `<li>${item.rank} - ${item.movieNm}</li>`; // mvLi 변수에 <li> 태그형식으로 item에 있는 순위와 movieNm을 할당
        }
        mvList.innerHTML = mvLi;  // mvList요소의 값을 mvLi으로 바꿈
      })
      .catch( err => console.err(err));  // err 발생시 콘솔에 err 출력

  });
});