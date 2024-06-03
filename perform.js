
const eleclasses1=['canon-firstplayer','tank-firstplayer','titan-firstplayer','recoit-firstplayer','semirecoit-firstplayer']
const eleclasses2=['canon-secondplayer','tank-secondplayer','titan-secondplayer','recoit-secondplayer','semirecoit-secondplayer']

function player1move(){
    window.fn=1;
    console.log("first player is playing")
    document.addEventListener('click',clicked)
    function clicked(event){
        
        let selectedelementclass=eleclasses1.find((cls)=>{return event.target.classList.contains(`${cls}`)})
        if(event.target.classList.contains('game-piece')  ){
                handlemovebyclick(event.target,selectedelementclass)
        }
            eleclasses1.forEach(cls => {
           
                if (cls !== selectedelementclass) {
                    let elements = document.querySelectorAll(`.${cls}`);
                    elements.forEach(el => {
                        el.removeEventListener('click', movement);
                    });
            } });
            movement(event.target)
    }
    function handlemovebyclick(target,classname){
       let piece=document.querySelector(`.${classname}`)
       console.log(piece);
       piece.classList.add('piece')
       let obj = piece.getBoundingClientRect()
        let mid1 = Math.floor((obj.left + obj.right) / 2)
        let mid2 = Math.floor((obj.top + obj.bottom) / 2)
        switch(classname){
            case 'canon-firstplayer':   canonmove(mid1,mid2,piece);
                            break;
            case 'tank-firstplayer':  tittankmove(mid1,mid2,piece) ;
                          break;
    
            case 'titan-firstplayer':tittankmove(mid1,mid2,piece) ;
                         break;
            case 'recoit-firstplayer': recoitsemi(mid1,mid2,piece); 
                           break;
    
            case 'semirecoit-firstplayer': recoitsemi(mid1,mid2,piece); 
                               break;
        }
        piece.addEventListener('click', () => hidemove(mid1, mid2, piece))
    }
    function movement(target){ 
        var c =target.className;
        var div=document.getElementsByClassName(c)[0];
        var obj1=div.getBoundingClientRect();
        piece=document.querySelector('.piece')
        let obj=piece.getBoundingClientRect()
        let left=obj.left;
        let right=obj.right;
        let top=obj.top;
        let bottom=obj.bottom;
        let mid1=Math.floor((left+right)/2)
        let mid2=Math.floor((top+bottom)/2)
        if(piece.classList.contains('semirecoit-firstplayer')){
           setTimeout(() => {if(!Window.isrotated){
            hidemove(mid1,mid2,piece);
            piece.style.left=obj1.left+3+'px ';
            piece.style.top=obj1.top-20+'px ';
                 hidebutton()
                 hidebutton1()
            
           } },3000)
        }
           else if(piece.classList.contains('recoit-firstplayer')){
            setTimeout(() => {if(!Window.isrotated){
                hidemove(mid1,mid2,piece);
                piece.style.left=obj1.left+25+'px ';
                piece.style.top=obj1.top-2+'px ';
                     hidebutton()
                     hidebutton1()
                
               } },3000)
           }
        else{
        if (!target.classList.contains('game-piece')&& target.style.backgroundColor==="green"){
           hidemove(mid1,mid2,piece);
           piece.style.left=obj1.left+3+'px ';
        piece.style.top=obj1.top+'px ';
        bullet1();
      
        }
    }    
    }
    function hidemove(mid1, mid2, piece) {
     const classname=piece.classList[0]
        switch (classname) {
            case 'canon-firstplayer':
                hidemovec(mid1, mid2, piece);
                break;
            case 'tank-firstplayer':
            case 'titan-firstplayer':
                hidemovet(mid1, mid2, piece);
                break;
            case 'recoit-firstplayer':
            case 'semirecoit-firstplayer':
                hidemover(mid1, mid2, piece);
                break;
                Window.played=1
        }
    }  
    
}

function player2move(){
    Window.fn=2;
    
    
    document.addEventListener('click',clicked2)
    function clicked2(event){
        
        let selectedelementclass=eleclasses2.find((cls)=>{return event.target.classList.contains(`${cls}`)})
        if(event.target.classList.contains('game-piece')  ){
                handlemovebyclick(event.target,selectedelementclass)
        }
            eleclasses2.forEach(cls => {
           
                if (cls !== selectedelementclass) {
                    let elements = document.querySelectorAll(`.${cls}`);
                    elements.forEach(el => {
                        el.removeEventListener('click', movement);
                    });
            } });
            movement(event.target)
    }
    function handlemovebyclick(target,classname){
       let piece=document.querySelector(`.${classname}`)
       console.log(piece);
       piece.classList.add('piece')
       let obj = piece.getBoundingClientRect()
        let mid1 = Math.floor((obj.left + obj.right) / 2)
        let mid2 = Math.floor((obj.top + obj.bottom) / 2)
        switch(classname){
            case 'canon-secondplayer':   canonmove(mid1,mid2,piece);
                            break;
            case 'tank-secondplayer':  tittankmove(mid1,mid2,piece) ;
                          break;
    
            case 'titan-secondplayer':tittankmove(mid1,mid2,piece) ;
                         break;
            case 'recoit-secondplayer': recoitsemi(mid1,mid2,piece); 
                           break;
    
            case 'semirecoit-secondplayer': recoitsemi(mid1,mid2,piece); 
                               break;
        }
        piece.addEventListener('click', () => hidemove(mid1, mid2, piece))
    }
    function movement(target){ 
        var c =target.className;
        var div=document.getElementsByClassName(c)[0];
        var obj1=div.getBoundingClientRect();
        piece=document.querySelector('.piece')
        let obj=piece.getBoundingClientRect()
        let left=obj.left;
        let right=obj.right;
        let top=obj.top;
        let bottom=obj.bottom;
        let mid1=Math.floor((left+right)/2)
        let mid2=Math.floor((top+bottom)/2)
        if(piece.classList.contains('semirecoit-firstplayer')){
           setTimeout(() => {if(!Window.isrotated){
            hidemove(mid1,mid2,piece);
            piece.style.left=obj1.left+3+'px ';
            piece.style.top=obj1.top-20+'px ';
                 hidebutton()
                 hidebutton1()
            
           } },3000)
        }
           else if(piece.classList.contains('recoit-firstplayer')){
            setTimeout(() => {if(!Window.isrotated){
                hidemove(mid1,mid2,piece);
                piece.style.left=obj1.left+25+'px ';
                piece.style.top=obj1.top-2+'px ';
                     hidebutton()
                     hidebutton1()
                
               } },3000)
           }
        else{
        if (!target.classList.contains('game-piece')&& target.style.backgroundColor==="green"){
           hidemove(mid1,mid2,piece);
           piece.style.left=obj1.left+3+'px ';
        piece.style.top=obj1.top+154+'px ';
      bullet2();
    
        }
    }    
    }
    function hidemove(mid1, mid2, piece) {
        
       
     const classname=piece.classList[0]
        switch (classname) {
            case 'canon-secondplayer':
                hidemovec(mid1, mid2, piece);
                break;
            case 'tank-secondplayer':
            case 'titan-secondplayer':
                hidemovet(mid1, mid2, piece);
                break;
            case 'recoit-secondplayer':
            case 'semirecoit-secondplayerr':
                hidemover(mid1, mid2, piece);
                break;
             
        }
       
    }

}


//currentplayer=(currentplayer==='Red\'s')?'Blue\'s':'Red\'s'
//player.innerHTML=`${currentplayer} Turn`



   

    
    






   