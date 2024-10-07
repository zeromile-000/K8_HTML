document.addEventListener('DOMContentLoaded',()=>{
  // 요소 가져오기 (txt1 : input Box의 요소)
  const txt1 = document.querySelector('#txt1');

  // 요소 가져오기 (버튼)
  const bt1s = document.querySelectorAll('.objBt1'); // 추가
  const bt2s = document.querySelectorAll('.objBt2'); // 삭제
  const bt3s = document.querySelectorAll('.objBt3'); // 수정
  const bt4s = document.querySelectorAll('.objBt4'); // json

  // 오브젝트 이모지 객체 생성
  const emoji = {'사과' :'🍎',
                '바나나' :'🍌',
                '오렌지' :'🍊',
                '수박' :'🍉',
                '당근' :'🥕',
                '오이' :'🥒',
                '브로콜리' :'🥦',
  }

  // 추가 함수 생성
  for(let bt of bt1s){
    bt.addEventListener('click',(e)=>{ // bt를 클릭할 경우
      e.preventDefault();
      btkey = bt.innerHTML.replace('추가','') ; // bt의 속성을 btkey에 할당, replace를 사용하여 '추가'라는 문자열을 삭제
      txt1.value = txt1.value + emoji[btkey]; // txt1
      console.log(btkey); //출력


    });
  }

  // 삭제 함수 생성
  for(let bt of bt2s){
    bt.addEventListener('click',(e)=>{ // bt를 클릭할 경우
      e.preventDefault();
      btkey = bt.innerHTML.replace('삭제','') ; // bt의 속성을 btkey에 할당, replace를 사용하여 '추가'라는 문자열을 삭제
      let tmArr = Array.from(txt1.value);  
      tmArr = tmArr.filter( item => item != emoji[btkey])
      txt1.value = tmArr.join(''); // txt1
      console.log(btkey); //출력


    });
  }


});
