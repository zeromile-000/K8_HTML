// DOM이 완전히 로드된 후에 실행되는 이벤트 리스너입니다
document.addEventListener('DOMContentLoaded', () => {
  
  // 'dice' 클래스 하위의 모든 이미지 요소를 선택합니다
  const imgs = document.querySelectorAll('.dice > img');
  
  // 모든 버튼 요소를 선택합니다
  const bts = document.querySelectorAll('button');
  
  // 결과를 표시할 요소를 선택합니다
  const msg = document.querySelector('#msg');

  // 버튼 요소들을 콘솔에 출력하여 확인합니다
  console.log(bts);

  // 각 버튼에 클릭 이벤트 리스너를 추가합니다
  for (let bt of bts) {
    // 현재 버튼 요소를 콘솔에 출력하여 확인합니다
    console.log(bt);
    
    // 버튼 클릭 시 실행될 함수 정의
    bt.addEventListener('click', () => {
      // 컴퓨터가 선택할 랜덤 수를 생성합니다 (1부터 6까지)
      let comN = Math.floor(Math.random() * 6) + 1; // 1~6
      
      // 컴퓨터의 주사위 이미지를 랜덤 수에 맞게 업데이트합니다
      imgs[0].setAttribute('src', `../img/${comN}.png`);
      imgs[0].setAttribute('alt', `${comN}.png`);
      
      // 사용자가 선택한 숫자를 추출합니다
      let userN = parseInt(bt.textContent.charAt(0));
      
      // 사용자의 주사위 이미지를 선택한 숫자에 맞게 업데이트합니다
      imgs[1].setAttribute('src', `../img/${userN}.png`);
      imgs[1].setAttribute('alt', `${userN}.png`);
      
      // 컴퓨터와 사용자의 선택을 비교하여 결과를 표시합니다
      if (comN === userN) {
        msg.textContent = '맞음'; // 두 숫자가 같으면 '맞음' 표시
      } else {
        msg.textContent = '틀림'; // 두 숫자가 다르면 '틀림' 표시
      }
    });
  }
});
