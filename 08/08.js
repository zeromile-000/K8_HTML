document.addEventListener('DOMContentLoaded',()=>{
  //요소 가져오기
  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');
  const bts = document.querySelectorAll('.bt1');

  // 회문 버튼 
  bts[0].addEventListener('click',(e)=>{
    e.preventDefault(); // 자기 자신 호출 방지

    // 문자열
    let t1 = txt1.value.replaceAll(' ', '') // 공백을 제거
    let t2 = txt1.value.replaceAll(' ', '').split('').reverse().join(''); // txt2의 값을 하나씩 구분하여 새로운 배열로 만들고 요소를 뒤집어서 반환, join(배열의 요소를 하나의 문자열로 합치기)
    console.log("t1=",t1) // 문자열로 출력
    console.log("t2=",t2) // 배열로 출력

    if (t1 === t2) {
      txt2.style.cssText = 'color : blue';
      txt2.value = "회문입니다.";
    } 
    else {
      txt2.style.cssText = 'color : red';
      txt2.value = "회문이아닙니다.";
    }

  });

  // 숫자 합계 버튼
  bts[1].addEventListener('click',(e)=>{
    e.preventDefault();

    let total = 0;
    // 전체 문자열을 순회하면서 숫자 찾기
    for(let c of txt1.value){
      // 숫자 구분 : 0 ~ 9 까지만
      if (c >= '0' && c <= '9') {
        if(!isNaN(c)){ // isNan : 숫자이면 false를 반환 , c의 값이 false 이면 total 변수에 문자를 정수형으로 변환한 c의 값을 더해준다.
          total = total + parseInt(c)
        }
      }
    }
    
    txt2.value = total; //txt 2 변수 값에 total를 대입한다.
    
  });
});