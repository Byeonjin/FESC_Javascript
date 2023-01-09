function getNode(nodeName){

  if(typeof (nodeName) !== 'string') {
    throw new Error('인수로 문자열!')
  }

  return  document.querySelector(nodeName);
}
