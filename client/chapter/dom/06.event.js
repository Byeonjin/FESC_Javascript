/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */
/* 
const first = getNode('.first');
const second = getNode('.second');

function handler() {
  css(".second", "display", "none")
}

first.addEventListener('click', handler);


second.addEventListener('click', function(){
  first.removeEventListener('click', handler)  
}) */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('.ball');

ground.addEventListener('click', function(e){
  ball.style.transform = `translate(calc(${e.offsetX}px - 50%),calc(${e.offsetY}px - 50%)`;
  
  
});
