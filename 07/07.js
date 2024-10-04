document.addEventListener('DOMContentLoaded', () => {
  
  //Dom 생성 후 img, input, button 가져오기
  const upDownimg = document.querySelector('#da');
  const numInput = document.querySelector('#num1');
  const Bt = document.querySelector('button');

  // input focus
  numInput.focus();

  // ramdom 변수
  let n;

  // flag 변수
  let flag = false;

  // button 클릭시
  Bt.addEventListener('click',(e)=>{
    e.preventDefault(); // 기본 이벤트 취소
    // 랜덤수 생성
    if (!flag) { // 랜덤수 변수가 false 일떄
      n = Math.floor(Math.random() * 100) +1; //1 ~ 100까지의 랜덤수 지정
      console.log(n);
      flag = true;  // 랜덤수를 맞추기 전 까지 게임종료를 방지

      // 입력 초기화
      if(numInput.style.display == "none"){
        numInput.style.display = "inline";
        numInput.value = '';
        numInput.focus();
        Bt.innerHTML = "확인";
        upDownimg.setAttribute('src','../img/img/what.png');
        return ;
      }
    }

    // 숫자 비교
    if (n === parseInt(numInput.value)){ //맞춘경우
      upDownimg.setAttribute('src','../img/img/good.png');
      numInput.style.display = "none";
      Bt.innerHTML = "숫자를 재생성 하시오."
      flag = false;
    }
    else if (n > parseInt(numInput.value)) { // UP 이미지 도출
      upDownimg.setAttribute('src','../img/img/up.png'); 
    }
    else {
      // down 이미지 도출
      upDownimg.setAttribute('src','../img/img/down.png');
      }

  });


});