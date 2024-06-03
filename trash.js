 //old code
   /*document.addEventListener("click",(event)=>{
       if(event.target.classList.contains('game-piece')  ){
    let selectedelement=event.target.className;
    let piece=document.getElementsByClassName(selectedelement)[0];
    piece.classList.add('piece')
    let obj=piece.getBoundingClientRect();
    let left=obj.left;
    let right=obj.right;
    let top=obj.top;
    let bottom=obj.bottom;
    let mid1=Math.floor((left+right)/2);
    let mid2=Math.floor((top+bottom)/2);
     if(selectedelement.includes('canon')){
        canonmove(mid1,mid2,piece);
        for(let i=1;i<eleclasses.length;i++){
            if(event.target.classList.contains(eleclasses[i])[4]){
                event.target.removeEventListener('click',movement)
            }}
        addEventListener('click',movement)
        piece.onclick=hidemovec(mid1,mid2,piece);
     }
     
     
    }
  
}
);
//tank
document.addEventListener("click",(event)=>{
       
    if(event.target.classList.contains('game-piece')  ){
    
    let selectedelement=event.target.className;
    let piece=document.getElementsByClassName(selectedelement)[0]
    piece.classList.add('piece')
    let obj=piece.getBoundingClientRect()
    let left=obj.left
    let right=obj.right
    let top=obj.top
    let bottom=obj.bottom
    let mid1=Math.floor((left+right)/2)
    let mid2=Math.floor((top+bottom)/2)
    if(selectedelement.includes('tank')){
        tittankmove(mid1,mid2,piece) 
        for(let i=0;i<eleclasses.length;i++){
         if(eleclasses[i]==='tank'){
             continue
         }
         if(event.target.classList.contains(eleclasses[i])[4]){
             event.target.removeEventListener('click',movement)
         }
     }
        
        piece.onclick= hidemovet(mid1,mid2,piece);
        addEventListener('click',movement)
       piece.onclick= hidemovet(mid1,mid2,piece);
    }
}})
//titan
document.addEventListener("click",(event)=>{
       
    if(event.target.classList.contains('game-piece')  ){
   
    let selectedelement=event.target.className;
    let piece=document.getElementsByClassName(selectedelement)[0];
    piece.classList.add('piece')
    let obj=piece.getBoundingClientRect();
    let left=obj.left;
    let right=obj.right;
    let top=obj.top;
    let bottom=obj.bottom;
    let mid1=Math.floor((left+right)/2)
    let mid2=Math.floor((top+bottom)/2)
  

if( selectedelement.includes('titan')){
    tittankmove(mid1,mid2,piece) 
    for(let i=0;i<eleclasses.length;i++){
        if(eleclasses[i]==='titan'){
            continue
        }
        if(event.target.classList.contains(eleclasses[i])[4]){
            event.target.removeEventListener('click',movement)
        }
    }
       addEventListener('click',movement)
      piece.onclick= hidemovet(mid1,mid2,piece);
 }}})

//recocit
    document.addEventListener("click",(event)=>{
       
    if(event.target.classList.contains('game-piece')  ){
    
    let selectedelement=event.target.className;
    let piece=document.getElementsByClassName(selectedelement)[0];
    piece.classList.add('piece')
    let obj=piece.getBoundingClientRect();
    let left=obj.left;
    let right=obj.right;
    let top=obj.top;
    let bottom=obj.bottom;
    let mid1=Math.floor((left+right)/2);
    let mid2=Math.floor((top+bottom)/2);
  
if(selectedelement.includes('recoit')  ){
    recoitsemi(mid1,mid2,piece); 
    for(let i=0;i<eleclasses.length;i++){
        if(eleclasses[i]==='recoit'){
            continue
        }
        if(event.target.classList.contains(eleclasses[i])[4]){
            event.target.removeEventListener('click',movement)
        }
    }
        addEventListener('click',movement)
        piece.onclick=hidemover(mid1,mid2,piece);
      
 }}})
 //semi-recocit
 
 document.addEventListener("click",(event)=>{
       
    if(event.target.classList.contains('game-piece')  ){
    
    let selectedelement=event.target.className;
    let piece=document.getElementsByClassName(selectedelement)[0];
    piece.classList.add('piece')
    let obj=piece.getBoundingClientRect();
    let left=obj.left;
    let right=obj.right;
    let top=obj.top;
    let bottom=obj.bottom;
    let mid1=Math.floor((left+right)/2);
    let mid2=Math.floor((top+bottom)/2);
 if(selectedelement.includes('semirecoit')){
    recoitsemi(mid1,mid2,piece); 
    for(let i=0;i<eleclasses.length;i++){
        if(eleclasses[i]==='semirecoit'){
            continue
        }
        if(event.target.classList.contains(eleclasses[i])[4]){
            event.target.removeEventListener('click',movement)
        }
    }
  
    addEventListener('click',movement)
    piece.onclick=hidemover(mid1,mid2,piece);
  
 }}})*/


 /*function recoitsemi(clickeditemx, clickeditemy, piece) {
    if (piece.className.includes('recoit-firstplayer') || piece.className.includes('recoit-secondplayer')) {
        // Calculate positions based on the angle and size of recoit piece
        // Adjust positions to account for the angle
        // Iterate over grid elements, check if within line, change color if not
        for (let i = 0; i < Positions.length; i++) {
            let posX = clickeditemx + Positions[i].x * piece.offsetWidth;
            let posY = clickeditemy + Positions[i].y * piece.offsetHeight;
            let elementAtPos = document.elementFromPoint(posX, posY);

            // Check if the element is not the "recoit" piece's own div or any container elements
            if (elementAtPos && elementAtPos.id !== 'ele' &&
                elementAtPos.className !== 'grid-container' &&
                elementAtPos.className !== 'game-board') {
                elementAtPos.style.backgroundColor = "green";
            }
        }
    } else if (piece.className.includes('semirecoit-firstplayer') || piece.className.includes('semirecoit-secondplayer')) {
        // Calculate positions based on the angle and size of semirecoit piece
        // Adjust positions to account for the angle
        // Determine equations of lines representing triangle edges
        // Iterate over grid elements, check if within triangle, change color if not
    }
}*/