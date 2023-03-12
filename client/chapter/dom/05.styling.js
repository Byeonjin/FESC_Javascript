/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

const first = getNode('.first')
first.classList.add('hello')
//first.classList.remove('hello')

// class 포함 여부를 확인하는 방법
//console.log(first.classList.contains('hello'));

// function addClass(ele, className){
//   if(typeof(ele) !== "string" ){
//     typeError('첫 인자로 string type이 주어져야합니다.');
//   }
//   else if(typeof(className) !== "string"){
//     typeError('두번째 인자로 string type이 주어져야합니다.');
//   }

//   ele = getNode(ele);
  
//   ele.classList.add(className);
// }

// function removeClass(ele, className){
//   if(typeof(ele) !== "string" ){
//     typeError('첫 인자로 string type이 주어져야합니다.');
//   }
//   else{
//     ele = getNode(ele);
//   }

//   if(!className){
//     ele.className = '';
//     return;
//   }
//   else if(typeof(className) !== "string"){
//     typeError('두번째 인자로 string type이 주어져야합니다.');
//   }

//   if(!ele.classList.contains(className)){
//     throw new Error('해당 class가 존재하지 않습니다.');
//   }

//   ele.classList.remove(className);
// }

// function toggleClass(ele, className){
//   if(typeof(ele) !== "string" ){
//     typeError('첫 인자로 string type이 주어져야합니다.');
//   }
//   else{
//     ele = getNode(ele);
//   }
//   if(typeof(className) !== "string"){
//     typeError('두번째 인자로 string type이 주어져야합니다.');
//   }

//   ele.classList.toggle(className)
// }



/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = 'red';
first.style.transform = 'rotate(360deg)';

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(css(".first", "fontSize", "100px"));
console.log(css(".first", "fontSize"));
