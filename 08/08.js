document.addEventListener('DOMContentLoaded',()=>{
//요소 가져오기
const img = document.querySelector('.whatimg'>img);
const txt1 = document.querySelector("#Nu");
const bt1 = document.querySelector("#bt1");

let ramdom;

bt1.addEventListener("click", (e)=>{
  e.preventDefault
  Math.floor(Math.random()*100) + 1; // 버튼을 누를떄 마다 1~100사이
  console.log('radom=', ramdom);

  if(ramdom === parseInt(txt1.value)) {
    img.setAttribute('src','..');
  }
  else if (ramdom > parseInt(txt1.value)) {
  }
  else{
    img.setAttribute('src','./')
  }
})


});


