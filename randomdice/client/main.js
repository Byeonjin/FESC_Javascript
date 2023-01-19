/* global gsap */
import { attr, renderSpinner, renderEmptyCard, xhrData, insertLast, xhrPromise, tiger, delayP, getNode, renderUserCard, changeColor } from "./lib/index.js";

const userCardContainer = getNode('.user-card-inner');

const deleteBtns = gsap.utils.toArray('.delete');

async function rendingUserList(){
  renderSpinner(userCardContainer);
  try{
    await delayP(2000);

    getNode('.loadingSpinner').remove();
    
    
    let userList = await tiger.get('http://localhost:3000/users');
    let userData = userList.data;
  
   /*  for(let user of userData){
      renderUserCard(userCardContainer, user);
    }
   */
    userData.forEach(user => renderUserCard(userCardContainer, user));
  
  
    // gsap.to(gsap.utils.toArray('.user-card'), {
    //   x:100, 
    //   rotation: 360, 
    //   //duration: 3,
    //   stagger: {
    //     amount:1,
    //     from: 'center'//center, edge, end ...
    //   },
    
    // });
    changeColor('.user-card')
  
    gsap.to(gsap.utils.toArray('.user-card'), {
      x:0,
      opacity:1,
      duration: 0.4,
      stagger: 0.2,
    })
  
  }
  catch(err){
    renderEmptyCard(userCardContainer);
  }
  
}
rendingUserList();

const handler =(e) => {
  if(attr(e.target, 'class') === 'delete'){

    let idx = attr(e.target.closest('article.user-card'), 'data-index')
    let idxNum = idx.slice(5);

    tiger.delete(`http://localhost:3000/users/${idxNum}`).then(() => {
      userCardContainer.innerHTML = "";
      rendingUserList();
    });
    //e.target.closest('article.user-card').remove();

  }
}

userCardContainer.addEventListener('click', handler);

/* 




*/