document.addEventListener('DOMContentLoaded', () => {
  // 요소 가져오기
  const imgCom = document.querySelector('#com');
  const imgUser = document.querySelector('#user');
  const bts = document.querySelectorAll('button');
  const msg = document.querySelector('#msg');

  // 이벤트 감지
  for (let bt of bts) {
    bt.addEventListener('click', () => {
      let nUser = bt.textContent.charAt(0);
      // console.log(nUser);
      let nCom = Math.floor(Math.random() * 6) + 1; // 1 ~ 6��

      //이미지 변경
      imgCom.setAttribute('src', `../img/img/${nCom}.png`)
      imgUser.setAttribute('src', `../img/img/${nUser}.png`)

      // 결과 확인
      if (nCom == nUser) {
        msg.innerHTML = '<h3 id ="ho">맞음</h3>';
      }
      else {
        msg.innerHTML = '<h3 id = "hx">틀림</h3>';
      }
    });
  }
});