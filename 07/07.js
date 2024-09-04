//select 값 변경
const handlechange = (s1,s2, lb1, lb2, t1,t2) =>{
  if(s1.value==='℃') s2.value = '℉';
  else s2.value = '℃';

  lb1.innerHTML = s1.value;
  lb2.innerHTML = s2.value;

  t1.value =" ";
  t2.value =" ";
}

document.addEventListener('DOMContentLoaded',()=>{
  //요소 가져오기
  const sel1 = document.querySelector('#sel1');
  const sel2 = document.querySelector('#sel2');

  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');

  const lb1 = document.querySelector('label[for=txt1]')
  const lb2 = document.querySelector('label[for=txt2]')
  
  //select box
  sel1.addEventListener('change', ()=>{
    handlechange(sel1, sel2,lb1, lb2, txt1, txt2);
  });

  sel2.addEventListener('change', ()=>{
    handlechange(sel2, sel1,lb2,lb1, txt1, txt2);
  });

  txt1.addEventListener("input",()=>{
    if(sel1.value == '℃') {
      //섭씨온도 -> 화씨온도
      txt2.value = (parseFloat(txt1.value) * (9/5) + 32), toFixed(3);
    } else { 
      //화씨온도 -> 섭씨온도
      txt2.value = (parseFloat(txt1.value) -32) * (5/9), toFixed(3);
    }

  });
});