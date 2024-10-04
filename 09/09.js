document.addEventListener('DOMContentLoaded',()=>{
  
  // 요소 가져오기
  const numSec = document.querySelector('#numSec');
  const bt = document.querySelector('button');
  
  bt.addEventListener('click', (e)=>{
    e.preventDefault();
    let arr = [];

    while(arr.length < 7){ // arr 배열의 길이가 7보다 작을 떄 반복
      let n = Math.floor(Math.random()*45)+1; // 1 ~ 45번 까지의 랜덤수 생성
      
      // 중복된 숫자 제거
      if(arr.includes(n) == false) { 
        arr.push(n);
    }
  }
    let tags = arr.map(item => `<span class="sp${Math.floor(item/10)}">${item}</span>`); // arr배열을 map메서드로 반복, clss를 요소를 10으로 나눈 몫을 내림, 값에 요소를 삽입하여 tags에 대입
    tags.splice(6,0,`<span class="spplus">+</span>`); // tags의 6번쨰 위치에 + 기호를 삽입
    tags = tags.join(''); // tags의 배열을 join을 통해 하나의 문자열로 변환
    console.log(tags); 
    numSec.innerHTML = tags; // nunSec에 tags의 값을 대입(화면에 뿌리기)


  });
});