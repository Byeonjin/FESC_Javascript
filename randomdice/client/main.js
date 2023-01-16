import {diceAnimation, enableElement, disableElement, getNode, getNodes, visibleElement, invisibleElement, clearContents} from "./lib/index.js"

const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');

const recordListWrapper = getNode('.recordListWrapper');

const recordList = getNode('.recordList > tbody');

const dice = getNode('#cube');

// 구조분해할당

// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기 



// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기 




let index = 1;
let sum = 0;

const renderRecordListItem = (()  => {

  const recordList = getNode('.recordList > tbody');

  let dice = getNode('#cube');
  
  return () => {
    let diceNum = dice.dataset.dice;
    sum += +(diceNum);
    let template = /* html */`<td>${index++}</td>
    <td>${diceNum}</td>
    <td>${sum}</td>`
    
    recordList.insertAdjacentHTML('beforeend', template);
    recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
  }
})()




//IIFE 패턴
const diceClickHandler = (() => {
  let stopAnimation;
  let isRolling = false;  



  return () =>  {
    if(!isRolling){
      // console.log('첫번째 클릭');
      stopAnimation = setInterval(diceAnimation, 100);
      enableElement(recordButton);    
      enableElement(resetButton);
    }
    else{
      // console.log('두번째 클릭');
      clearInterval(stopAnimation);
      disableElement(recordButton);
      disableElement(resetButton);
    }

    isRolling = !isRolling;
    }
  
  })()


rollingDiceButton.addEventListener('click', diceClickHandler);

const recordClickHandler = () => {
  visibleElement(recordListWrapper);

  let diceNum = dice.dataset.dice;
  renderRecordListItem();
};

recordButton.addEventListener('click',recordClickHandler);

const resetClickHandler = () => {
  invisibleElement(recordListWrapper);
  clearContents('.recordListWrapper tbody');
  index = 1;
  sum = 0;
};

resetButton.addEventListener('click',resetClickHandler);

