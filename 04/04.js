//dom 생성된 후 이벤트 감지
document.addEventListener('DOMContentLoaded', ()=>{
  //버튼 요소 가져오기
  const bt1 = document.getElementById('bt1');
  const bt2 = document.querySelector('#bt2');
  const bt3 = document.querySelector('#bt3');
  const msg = document.querySelector('#msg');
  //const msf = document.querySelector('#msf');

  //버튼 이벤트 달기
  bt1.addEventListener('click', ()=>{
    alert(bt1.innerHTML);
  });
  
  bt2.addEventListener('click', ()=>{
    alert(bt2.textContent);
  //msg.innerHTML = '<h2>26살</h2>';
  });

  bt3.addEventListener('click', ()=>{
    //msg.innerHTML = '<h2>동의대학교 경영정보학과 18학번</h2>';
    let n = Math.floor(Math.random( ) *500) +1 ;
    console.log('n',n);
    msg.innerHTML = `<h2>${bt3.textContent}:   <span>${n}</span></h2>`
  });
});