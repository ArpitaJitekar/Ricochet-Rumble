 let classfortitan1=['titan-firstplayer' ,'js-titan-1',  'game-piece', 'titan','firstplayer']
let classfortitan2=['titan-secondplayer','js-titan-2','game-piece','titan','secondplayer']
let target1=['canon-firstplayer','titan-firstplayer','tank-firstplayer','recoit-firstplayer','semirecoit-firstplayer']
let target2=['canon-secondplayer','titan-secondplayer','tank-secondplayer','recoit-secondplayer','semirecoit-secondplayer']
document.addEventListener('DOMContentLoaded',()=>{  
   //titan creation
  function createtitan1(){
    const parent=document.getElementById('titan1div')
 const titan1=document.createElement('div')
 titan1.textContent='Titan';
classfortitan1.forEach(element => {
 titan1.classList.add(element)
 });
 parent.appendChild(titan1)
  }
  function createtitan2(){
    const parent=document.getElementById('titan2div')
 const titan2=document.createElement('div')
 titan2.textContent='Titan';
classfortitan2.forEach(element => {
 titan2.classList.add(element)
 });
 parent.appendChild(titan2)
  }
  createtitan1();
  createtitan2();
})

//bullet movement


  function bullet1(){
      const parent=document.getElementById('shooter1')
      
      const b1=document.createElement('div')
      b1.classList.add('bul-1')
      b1.classList.add('game-piece')
      parent.appendChild(b1)
      let bulletinterval = setInterval(() => {
          const bulletrect = b1.getBoundingClientRect();

          
          target1.forEach(target1 => {
             const target=document.querySelector(`.${target1}`)
              const targetrect = target.getBoundingClientRect();
              if (bulletrect.left < targetrect.right &&
               bulletrect.right > targetrect.left &&
                  bulletrect.top < targetrect.bottom &&
                  bulletrect.bottom > targetrect.top) {
                  
                  if(target==='titan-firstplayer'){
                     titan.remove()
                     alert(`${Window.p1} Wins`)
                  }
                
                  if(target==='recoit-firstplayer' || target==='semirecoit-firstplayer'){
                     if(Window.direction='left'){
                        b2.style.left = `${bulletrect.left + 5}px`; //left
                     }
                     if(Window.direction='right'){
                        b2.style.left = `${bulletrect.left - 5}px`; //right
                     }
                   }
                   if(target==='tank-firstplayer' || target==='canon-firstplayer'){
                     clearInterval(bulletinterval);
                     b1.remove();
                       
                   }
              }
          });

          
          if (bulletrect.top > window.innerHeight) {
              clearInterval(bulletinterval);
              b1.remove();
          }
          else if(bulletrect.left>window.innerWidth|| bulletrect.right>window.innerWidth){
            clearInterval(bulletinterval);
            b1.remove();
         }
          else {
           
              b1.style.top = `${bulletrect.top +5}px`;
             
          }
      }, 200);
  }
  
  


  function bullet2(){
   const parent1=document.getElementById('shooter2')
   
   const b2=document.createElement('div')
   b2.classList.add('bul-2')
   b2.classList.add('game-piece')
   parent1.appendChild(b2)
   let bulletinterval = setInterval(() => {
     const bulletrect = b2.getBoundingClientRect();

     
     target2.forEach(target1 => {
        const target=document.querySelector(`.${target1}`)
         const targetrect = target.getBoundingClientRect();
         if (bulletrect.left < targetrect.right &&
          bulletrect.right > targetrect.left &&
             bulletrect.top < targetrect.bottom &&
             bulletrect.bottom > targetrect.top) {
             
             if(target1==='titan-secondplayer'){
                titan.remove()
                alert(`${Window.p2} Wins`)
             }
            if(target1==='recoit-secondplayer' || target1==='semirecoit-secondplayer'){
              if(Window.direction='right'){
                 b2.style.left = `${bulletrect.left + 5}px`; //right
              }
              if(Window.direction='left'){
                 b2.style.left = `${bulletrect.left - 5}px`; //left 
              }
            }
           
            
         }
     });

  
     if (bulletrect.top > window.innerHeight) {
         clearInterval(bulletinterval);
         b2.remove();
     }
     else if(bulletrect.left>window.innerWidth|| bulletrect.right>window.innerWidth){
        clearInterval(bulletinterval);
        b2.remove();
     }
      else {

         b2.style.top = `${bulletrect.top-5}px`; 
     }
 }, 200);}



   

