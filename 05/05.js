document.addEventListener('DOMContentLoaded',()=>{
  const bt = document.querySelector('button');
  const img = document.querySelector('#msg > img ');

  

  bt.addEventListener('click', ()=>{
    let n = Math.floor(Math.random()* 6) + 1; //1~6까지 생성
    img.setAttribute('src', `./img/${n}.png`);
    img.setAttribute('alt', `${n}`);
    alert(bt.innerHTML);

  });
});