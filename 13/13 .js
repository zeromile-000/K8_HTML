//전역변수
const testAPI = '82ca741a2844c5c180a208137bb92bd7'; // testAPI 라는 이름의 변수에 API Key 값을 대입

//상세정보 가져오기 
const getDetail = (movieCd) => { //getDetail() 함수에 movieCd 파라미터를 받아서 API 요청
  const mvinfo = document.querySelector('#mvinfo'); // mvinfo 변수에 #mvinfo 요소를 불러와서 대입
  let url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?`; // url 변수에 주소 대입
  url = `${url}&key=${testAPI}&movieCd=${movieCd}`; //url 변수에 url&testAPI&movieCd 결과를 대입

  console.log(url); // url 변수를 출력
  fetch(url) //url 변수의 값 = 요청 주소를 서버에 요청
    .then(resp => resp.json()) // 서버로 부터 응답받는 데이터 형태를 json 형태로 변환
    .then(data => { //json으로 받은 데이터를 아래의 형태로 데이터를 처리
      let movieInfo = data.movieInfoResult.movieInfo; // 
      let genres = movieInfo.genres.map(item => item.genreNm).join(',');
      let companys = movieInfo.companys.map(item =>
        `${item.companyNm}(${item.companyPartNm})`)
        .join(',');
      let actors = movieInfo.actors.slice(0, 3).map(item => item.peopleNm).join(',');
      console.log(genres)
      console.log(companys)

      mvinfo.innerHTML = `
        <div>${movieInfo.movieNm} (${movieInfo.openDt})</div>
        <ul>
          <li>장르 : ${genres}</li>
          <li>출연진 : ${actors}</li>
        </ul>
      ` ;
    })
    .catch(err => console.error(err))
}


//OPEN API 데이터 가져오기
const getData = (selDt, ul, gubun) => {
  console.log('gubun = ', gubun);

  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testAPI}&targetDt=${selDt}`;
  if (gubun != 'T') {
    url = `${url}&repNationCd=${gubun}`;
  }

  console.log(url);

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList)

      let tm = dailyBoxOfficeList.map(item =>
        `<a href="#" onClick="getDetail(${item.movieCd})">
          <li class='mvli'>
            
            <span class='rank'>${item.rank}</span>
            <span class='movieNm'>${item.movieNm}</span>
            <span class='openDt'>${item.openDt}</span>
            <span class='rankInten'>
            ${item.rankInten > 0 ?
          '<span class="spRed">▲</span>' : item.rankInten < 0 ?
            '<span class="spBlue">▼</span>' : '-'}
            ${item.rankInten != 0 ? Math.abs(item.rankInten) : ''}
            </span>
          </li>
        </a>`)

      tm = tm.join('')
      ul.innerHTML = tm;
      // console.log(tm)
    })
    .catch(err => console.error(err));

}


//어제 날짜 구하기 함수
const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const year = yesterday.getFullYear();
  let month = yesterday.getMonth() + 1;
  let day = yesterday.getDate();

  //월 2자리
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  //month = `0${month}`.slice(-2) ;
  // month = `${month}`.padStart(2,0) ;
  // console.log("month =", month)

  //yyyy-mm-dd
  return `${year}-${month}-${day}`;
}

//radio 값 가져오기
const getGubun = () => {
  //radio 요소 가져오기
  // const r1 = document.querySelector('#r1') ;
  // const r2 = document.querySelector('#r2') ;
  // const r3 = document.querySelector('#r3') ;

  // console.log("r1 =", r1.checked) ;
  // console.log("r2 =", r2.checked) ;
  // console.log("r3 =", r3.checked) ;

  // if (r1.checked) return r1.value ;
  // else if (r2.checked) return r2.value ;
  // else if (r3.checked) return r3.value ;


  // radio버튼의 클릭된 것만 가져오기
  const gubun = document.querySelector('input[name=mvGubun]:checked');
  console.log('gubun = ', gubun.value);
  return gubun.value;

}


//DOM 생성후
document.addEventListener('DOMContentLoaded', () => {
  //요소 가져오기
  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec > ul');
  // const fieldset = document.querySelector('fieldset') ;
  // const radios = document.querySelectorAll('input[type=radio]') ; 
  // const radios = document.getElementsByName('mvGubun');
  const radios = document.querySelectorAll('input[name=mvGubun]');

  //어제 날짜 구하기
  let yesterday = getYesterday();
  console.log('yesterday :', yesterday);

  //date 요소 최대값 결정
  dt.max = yesterday;

  //date 기본값
  dt.value = yesterday;

  //gubun 값
  console.log(getGubun());

  //기본 첫 페이지 보이기
  getData(dt.value.replaceAll('-', ''), ul, getGubun());

  //데이터 가져오기
  dt.addEventListener('change', () => {
    getData(dt.value.replaceAll('-', ''), ul, getGubun());
  });

  // fieldset.addEventListener('click', ()=> {
  //   getData(dt.value.replaceAll('-',''), ul, getGubun());
  // });

  for (let radio of radios) {
    radio.addEventListener('click', () => {
      if (radio.checked) getData(dt.value.replaceAll('-', ''), ul, radio.value);
    })
  }
});