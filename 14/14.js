let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]; // 9개의 요소로 이루어진 배열. 이 중 1은 폭탄, 나머지 0은 안전한 칸.
let isSuffle = false; // 게임이 섞였는지 여부를 나타내는 변수. 초기 값은 false로, 아직 게임이 시작되지 않음을 의미.
let cnt = 0; // 클릭한 안전한 칸의 수를 저장하는 변수. 게임이 시작되면 0으로 초기화됨.

document.addEventListener('DOMContentLoaded', () => {
  // DOM이 로드된 후에 실행. 즉, HTML 요소들이 완전히 준비된 상태에서 코드가 실행됨.

  const cols = document.querySelectorAll('.col'); // '.col' 클래스를 가진 모든 셀(각 칸)을 선택하여 변수에 저장.
  const bt = document.querySelector('button'); // '.bt' 클래스를 가진 버튼을 선택하여 변수에 저장.
  const msg = document.querySelector('#msg'); // '#msg' 아이디를 가진 메시지 영역을 선택하여 변수에 저장.

  // 게임 시작 및 초기화 버튼에 대한 이벤트 리스너 추가
  bt.addEventListener('click', (e) => {
    e.preventDefault(); // 기본 버튼 클릭 동작(페이지 리로드 등)을 방지.

    if (!isSuffle) {
      // 만약 게임이 아직 섞이지 않은 상태라면 (즉, 게임이 시작되지 않은 상태)
      resetGame(cols, bt, msg); // 게임을 초기 상태로 리셋하는 함수를 호출.
    }
  });

  // 각 셀에 대한 클릭 이벤트 리스너 추가
  for (let col of cols) {
    col.addEventListener('click', () => {
      // 게임이 종료된 상태라면 클릭이 불가능하게 함
      if (!isSuffle) return; // isSuffle이 false일 때는 아무 동작도 하지 않음 (즉, 게임이 시작되지 않았으면 클릭해도 반응 없음).

      // 이미 클릭한 셀은 클릭해도 반응하지 않게 처리 (하트나 폭탄 이미지가 들어가 있으면 무시)
      if (col.innerHTML.includes('img')) return;

      // 셀의 id에서 마지막 숫자를 가져와 배열의 인덱스 값으로 사용
      let idx = col.getAttribute('id').slice(-1) - 1; // 'box1', 'box2' 등에서 id의 마지막 숫자를 추출하고 1을 뺌(0부터 시작하는 배열이므로).
      console.log(idx, arr[idx]); // 클릭한 셀의 인덱스와 그 인덱스에 해당하는 배열의 값을 콘솔에 출력.

      if (arr[idx] == 0) {
        // 만약 선택한 셀이 안전한 셀(배열에서 0인 경우)이라면
        col.innerHTML = '<img src="../img/hart.png">'; // 셀에 하트 이미지를 삽입.
        cnt++;
        if (cnt === 8) {
          msg.style.color = "red"
          msg.innerHTML = "<h2> 성공👨‍⚕️🚩 </h2>";
          let win = arr.indexOf(1);
          cols[win].innerHTML = '<img src="../img/hart.png">';

        }

        // 성공

      } else {
        // 선택한 셀이 폭탄(배열에서 1인 경우)이라면
        col.innerHTML = '<img src="../img/boom.png">'; // 셀에 폭탄 이미지를 삽입.
        msg.innerHTML = '<h2>실패!!🧕🏻🏴‍☠️</h2>'; // 메시지 영역에 "실패" 메시지를 표시.
        msg.style.color = "black"
        isSuffle = false;  // 게임이 종료되었음을 표시. isSuffle을 false로 설정하여 이후 클릭을 방지.
        bt.innerHTML = '다시 시작'; // 버튼 텍스트를 '다시 시작'으로 변경.
        

      }
    });
  }
});

// 게임을 초기화하는 함수
function resetGame(cols, bt, msg) {
  // 1. 배열을 다시 섞기
  arr.sort(() => Math.random() - 0.5); // 배열을 무작위로 섞음. 폭탄(1)의 위치가 랜덤하게 변함.
  console.log(arr); // 섞인 배열을 콘솔에 출력.

  // 2. 모든 셀의 내용을 초기화
  cols.forEach(col => {
    col.innerHTML = '';  // 각 셀의 내용을 빈 문자열로 만들어 이미지(하트, 폭탄)를 제거.
  });

  // 3. 메시지 및 버튼 초기화
  msg.innerHTML = ''; // 메시지를 빈 문자열로 초기화하여 게임 결과를 지움.
  bt.innerHTML = '게임중...'; // 버튼 텍스트를 "게임중..."으로 변경하여 새로운 게임이 시작됨을 알림.

  // 4. 게임 상태 초기화
  isSuffle = true; // isSuffle을 true로 설정하여 게임이 시작되었음을 표시.
  cnt = 0;  // 클릭 횟수를 0으로 초기화.
}
