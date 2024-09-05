document.addEventListener('DOMContentLoaded', () => {
  // 요소 가져오기

  const txt1 = document.querySelector("#txt1");
  const txt2 = document.querySelector("#txt2");
  const bt1 = document.querySelector("#bt1");
  const bt2 = document.querySelector("#bt2");
  

  //회문처리
  bt1.addEventListener('click', (e)=>{
    e.preventDefault();
    let s1 = txt1.value.replaceAll('', ''); //문자열 안의 모든 공백을 제거.
    let s2 = '';

    // //반복문 이용 예시
    // for(let i = s1.length -1 ; i >= 0; i--)
    //   s2 = s2 + s1[i];
    s2 = s1.split('').reverse().join('') //split로 문자를 배열로 만들고 reverse로 뒤집고 join으로 문자배열의 붙여주다.


    console.log('s1=',s1)
    console.log('s2=',s2)
    
    if(s1==s2) txt1.value = '회문입니다.';
    else txt2.value = '회문이 아닙니다.'

  });

  //숫자합계 
  bt2.addEventListener('click', (e)=>{
    e.preventDefault();
    let total = 0; // 합계를 저장할 함수
    let cnt = 0;
    for(let c of txt1.value){
      if(c != ' ' && !isNaN(c)){
        total = total + parseInt(c);
        cnt++;
      }
    }
    if(total==0)
      txt2.value = '숫자가 존재하지 않습니다.';
      else
      txt2.value = total;
    


    txt2.value = total;






    console.log()

  });

});