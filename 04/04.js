document.addEventListener('DOMContentLoaded',()=>{
  // 요소 가져오기
  const img = document.querySelector('#img > img');
  const bt1 = document.getElementById('bt1');

  // 이벤트 감지
  bt1.addEventListener('click',()=>{
    let n = Math.floor(Math.random() *6)+1; // 1 ~ 6까지 랜덤수 생성 
    img.setAttribute('src',`../img/img/${n}.png`)
    img.setAttribute('alt',n)
    console.log(n);
  });

});