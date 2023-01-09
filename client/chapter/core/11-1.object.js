/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-점심예!',
  name: 'nnnn',
  age: 29,
  1:2,
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열
const getPropertyList = (obj) => Object.keys(obj);

let result  = getPropertyList(authUser);

console.log(result);

// 프로퍼티 제거 or 삭제 

function removeProperty(obj, pro){
  if(typeof(pro) != 'string'){
    String(pro);
  }
  obj[pro] = null
}

removeProperty(authUser, 1);

function deleteProperty(obj, pro){
  if(typeof(pro) != 'string'){
    String(pro);
  }
  delete obj[pro];
}

deleteProperty(authUser, 1)

console.log(authUser);


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
}

console.log(student);


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
const isEmptyObject = (obj) => getPropertyList(obj).length == 0 ? true : false;

const ff = {}

console.log(isEmptyObject(ff));


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
}

function sumSalaries(obj){
  let res = 0;
  const entr = Object.entries(obj);
  for(let keyValue of entr){
    res += keyValue[1];
  }
  return res;
}

console.log( sumSalaries(salaries));

const {Ann, b, c} = salaries;

console.log(Ann, b, c);


