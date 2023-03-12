import { getNode } from "../dom/getNode.js";

function delay(callback, timeout = 1000){
  setTimeout(callback, timeout);
}

/* 
delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
}) */


export function delayP(timeout = 1000){
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('성공');
    }, timeout);
  });
}
