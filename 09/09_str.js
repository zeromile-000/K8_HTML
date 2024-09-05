//문자열 연습
let s = 'Hello js!!';



console.log('문자열길이 : ', s); 
console.log('문자열길이 : ', s.length); // 문자열 길이 반환 함수
console.log('문자열대문자변환 : ', s.toUpperCase()); //대문자 변환 함수
console.log('숫자확인 : ', isNaN(s));
console.log('첫번쨰글자 : ',s.charAt(0)); // 메서드 접근
console.log('첫번쨰글자 : ',s[0]); // 인덱스 접근
console.log('맨 마지막 글자 : ', s[s.length -1]);
console.log('첫번쨰글자 : ',s.charAt(s.length-1));
console.log('맨 마지막 글자 : ', s.slice(-1));
console.log('**문자열 분리 : ', s.split('')); //배열로 문자열 분리 !!!!

//문자열 순회
for(let c of s) {
  console.log(c);
} // 한 글자씩 가져오기(값을 가져오는 것)

for(let i in s) {
  console.log(i, '=>', s[i]);
} // 글자의 인덱스를 가져오기(키를 가져온다.) => 인덱스 위치

//문자열확인
console.log('h문자열 확인 : ', s.includes('js')) // 대소문자 구별(문자가 안에 있다, 없다.)
console.log('h문자열 확인 : ', s.indexOf('js')) // 문자의 위치를 반환

//문자열 자르기
console.log('문자열 자르기 : ', s.slice(5, 0)); // 음수 인덱스 허용
console.log('문자열 자르기 : ', s.substring(5, 0)); 

// s = '1234';
// console.log('문자열 : ', s); 
// console.log('숫자확인 : ', isNaN(s)); // 숫자 확인 함수