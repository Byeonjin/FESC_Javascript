/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */
const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', function(){
  console.log('%c visual', 'background: dodgerblue');
})

news.addEventListener('click', function(){
  console.log('%c visual', 'background: orange');
})

desc.addEventListener('click', function(e){
  e.stopPropagation();
  console.log('%c visual', 'background: pink; color: black;');
})

/* 캡처링 ----------------------------------------------------------------- */