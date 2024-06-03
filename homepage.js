function showbutton() {

    var element=document.querySelector('.fir-player-left')
    element.innerHTML='Left';

    var element1=document.querySelector('.fir-player-right')
    element1.innerHTML='Right';
    
}
function showbutton1(){
    var element=document.querySelector('.sec-player-left')
    element.innerHTML='Left';
    var element1=document.querySelector('.sec-player-right')
    element1.innerHTML='Right';
}

function hidebutton(){
    var element=document.querySelector('.fir-player-left')
    element.innerHTML='';

    var element1=document.querySelector('.fir-player-right')
    element1.innerHTML='';
}
function hidebutton1(){
    var element=document.querySelector('.sec-player-left')
    element.innerHTML='';
    var element1=document.querySelector('.sec-player-right')
    element1.innerHTML='';
}
var Positions = [
    { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 1, y: -1 },
    { x: -1, y: -1 },                     { x: 0, y: -1 },
    { x: -1, y: 1 },  { x: 0, y: 1 },  { x: 1, y: 1 }
];
//canon moves
function canonmove(mid1,mid2,piece){
    for(let i=0;i<2;i++){
        var posX = mid1+ Positions[i].x * piece.offsetWidth;
        var posY = mid2 + Positions[i].y * piece.offsetHeight;
        var elementatpos = document.elementFromPoint(posX, posY);
        if(!elementatpos.classList.contains('game-piece')&& elementatpos.className !== 'grid-container' &&
        elementatpos.className !== 'game-board'){
             
          elementatpos.style.backgroundColor="green";
          elementatpos.classList.add('green-background');
        }
        
     } 

}
function hidemovec(mid1,mid2,piece){
    for(let i=0;i<2;i++){
       
        var posX = mid1+ Positions[i].x * piece.offsetWidth;
        var posY = mid2 + Positions[i].y * piece.offsetHeight;
        var elementatpos = document.elementFromPoint(posX, posY);
        if (!elementatpos.classList.contains('game-piece')&&
        elementatpos.className !== 'grid-container' &&
        elementatpos.className !== 'game-board') {
          
            elementatpos.style.backgroundColor = "";
          
        }
     } 
}
//titan and tank moves
function tittankmove(mid1,mid2,piece){
    for(let i=0;i<Positions.length;i++){
      
        let posX = mid1+ Positions[i].x * piece.offsetWidth;
        let posY = mid2 + Positions[i].y * piece.offsetHeight;
        let elementatpos = document.elementFromPoint(posX, posY);
        
         if ( !elementatpos.classList.contains('game-piece') &&
         elementatpos.className !== 'grid-container' &&
         elementatpos.className !== 'game-board' ){
        elementatpos.style.backgroundColor="green";
        
         }
         }  
         
}

function hidemovet(mid1,mid2,piece){
    for (let i = 0; i < Positions.length; i++) {
        var posX = mid1+ Positions[i].x * piece.offsetWidth;
        var posY = mid2 + Positions[i].y * piece.offsetHeight;
        var elementatpos = document.elementFromPoint(posX, posY);
     //   var highlighted = document.querySelectorAll('.green-background');
        if ( !elementatpos.classList.contains('game-piece')&&
        elementatpos.className !== 'grid-container' &&
        elementatpos.className !== 'game-board') {
            elementatpos.style.backgroundColor = "";
           
            
        }
    }
}


//recoit and semirecoit valid moves
function recoitsemi(mid1,mid2,piece){
    
    for(let  i=0;i<Positions.length;i++){
       var posX = mid1+ Positions[i].x * piece.offsetWidth;
        var posY = mid2 + Positions[i].y * piece.offsetHeight;
        var elementatpos = document.elementFromPoint(posX, posY);
    
    if ( !elementatpos.classList.contains('game-piece')&&
             elementatpos.className !== 'grid-container' &&
             elementatpos.className !== 'game-board' && elementatpos.classList[1]==='prop') {

    elementatpos.style.backgroundColor="green";
      }

}

}
function hidemover(mid1,mid2,piece ){
    for (let i = 0; i < Positions.length; i++) {
        var posX = mid1+ Positions[i].x * piece.offsetWidth;
        var posY = mid2 + Positions[i].y * piece.offsetHeight;
        var elementatpos = document.elementFromPoint(posX, posY);

        if ( !elementatpos.classList.contains('game-piece') &&
             elementatpos.className !== 'grid-container' &&
             elementatpos.className !== 'game-board'&& elementatpos.classList[1]==='prop') {
            elementatpos.style.backgroundColor = "";
        }
    }
}
//rotation
Window.isrotated=false;
Window.direction='';
function rotation(){
 const semirecoit1 = document.querySelector('.js-semirecoit-1');
 const recoit1 = document.querySelector('.js-recoit-1');
 const semirecoit2 = document.querySelector('.js-semirecoit-2');
 const recoit2 = document.querySelector('.js-recoit-2');
 const moveleft = document.querySelector('.fir-player-left');
 const moveright = document.querySelector('.fir-player-right');
 const moveleft1 = document.querySelector('.sec-player-left');
 const moveright1 = document.querySelector('.sec-player-right');
 
 
 function rotate(element, d, ang) {
    element.style.transformOrigin= '75% 55%' ;
     element.style.transform = 'rotate(' + ang + 'deg)';
     hidebutton();
     hidebutton1();
 if(Window.fn===1){bullet1()}
 else if(Window.fn===2){bullet2()}
     
     piece=document.querySelector('.piece')
     let obj = piece.getBoundingClientRect()
    let mid1 = Math.floor((obj.left + obj.right) / 2)
    let mid2 = Math.floor((obj.top + obj.bottom) / 2)
     hidemover(mid1, mid2, piece);
     
     Window.isrotated=true
     
  }
  
  semirecoit1.addEventListener("click", () => {
      showbutton();
      moveleft.removeEventListener("click", rotateLeftRecoit1);
      moveright.removeEventListener("click", rotateRightRecoit1);
  
      moveleft.addEventListener("click", rotateLeftSemirecoit1);
      moveright.addEventListener("click", rotateRightSemirecoit1);
     
  });
  
  
  recoit1.addEventListener("click", () => {
      showbutton();
      moveleft.removeEventListener("click", rotateLeftSemirecoit1);
      moveright.removeEventListener("click", rotateRightSemirecoit1);
  
      moveleft.addEventListener("click", rotateLeftRecoit1);
      moveright.addEventListener("click", rotateRightRecoit1);
  });
  
  
  semirecoit2.addEventListener("click", () => {
      showbutton1();
      moveleft1.removeEventListener("click", rotateLeftRecoit2);
      moveright1.removeEventListener("click", rotateRightRecoit2);
  
      moveleft1.addEventListener("click", rotateLeftSemirecoit2);
      moveright1.addEventListener("click", rotateRightSemirecoit2);
  });
  
  recoit2.addEventListener("click", () => {
      showbutton1();
      moveleft1.removeEventListener("click", rotateLeftSemirecoit2);
      moveright1.removeEventListener("click", rotateRightSemirecoit2);
  
      moveleft1.addEventListener("click", rotateLeftRecoit2);
      moveright1.addEventListener("click", rotateRightRecoit2);
  });
  
function rotateLeftSemirecoit1() {
    rotate(semirecoit1, 'left', 135);
    Window.direction='left';
}

function rotateRightSemirecoit1() {
    rotate(semirecoit1, 'right', 45);
    Window.direction='right';
}

function rotateLeftRecoit1() {
    rotate(recoit1, 'left', -45);
    Window.direction='left';
}

function rotateRightRecoit1() {
    rotate(recoit1, 'right', 45);
    Window.direction='right';
}

function rotateLeftSemirecoit2() {
    rotate(semirecoit2, 'left', 135);
    Window.direction='left';
}

function rotateRightSemirecoit2() {
    rotate(semirecoit2, 'right', 45);
    Window.direction='right';
}

function rotateLeftRecoit2() {
    rotate(recoit2, 'left', -45);
    Window.direction='left';
}
function rotateRightRecoit2() {
    rotate(recoit2, 'right', 45);
    Window.direction='right';

}

}
rotation()

