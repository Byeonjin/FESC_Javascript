
function addClass(ele, className){
  if(typeof(ele) !== "string" ){
    typeError('첫 인자로 string type이 주어져야합니다.');
  }
  else if(typeof(className) !== "string"){
    typeError('두번째 인자로 string type이 주어져야합니다.');
  }

  ele = getNode(ele);
  
  ele.classList.add(className);
}

function removeClass(ele, className){
  if(typeof(ele) !== "string" ){
    typeError('첫 인자로 string type이 주어져야합니다.');
  }
  else{
    ele = getNode(ele);
  }

  if(!className){
    ele.className = '';
    return;
  }
  else if(typeof(className) !== "string"){
    typeError('두번째 인자로 string type이 주어져야합니다.');
  }

  if(!ele.classList.contains(className)){
    throw new Error('해당 class가 존재하지 않습니다.');
  }

  ele.classList.remove(className);
}

function toggleClass(ele, className){
  if(typeof(ele) !== "string" ){
    typeError('첫 인자로 string type이 주어져야합니다.');
  }
  else{
    ele = getNode(ele);
  }
  if(typeof(className) !== "string"){
    typeError('두번째 인자로 string type이 주어져야합니다.');
  }

  ele.classList.toggle(className)
}

function getCss(ele, style){
  let elementComputedStyle;
  if(typeof(ele) !== 'string'){
    typeError('첫 인자가 string타입이 아닙니다.');
  }
  else{
    ele = getNode(ele);
    elementComputedStyle = getComputedStyle(ele);
  }

  if(typeof(style) !== 'string'){
    typeError('두번째 인자가 string타입이 아닙니다.');
  }

  if(!(style in elementComputedStyle)){
    throw new Error('해당 style이 존재하지 않습니다.')
  }

  return elementComputedStyle[style];
}

function setCss(ele, sty, value){
  let elementComputedStyle;
  if(typeof(ele) !== 'string'){
    typeError('첫 인자가 string타입이 아닙니다.');
  }
  else{
    ele = getNode(ele);
    elementComputedStyle = getComputedStyle(ele);
  }

  if(typeof(sty) !== 'string'){
    typeError('두번째 인자가 string타입이 아닙니다.');
  }
  if(typeof(value) !== 'string'){
    typeError('세번째 인자가 string타입이 아닙니다.');
  }

  if(!(sty in elementComputedStyle)){
    throw new Error('해당 style이 존재하지 않습니다.')
  }

  ele.style[sty] = value;
}

const css = (ele, sty, value) => value !== undefined ? setCss(ele, sty, value) : getCss(ele,sty);