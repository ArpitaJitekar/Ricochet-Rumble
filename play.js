

const timedisplay=document.createElement('div')
timedisplay.style.backgroundColor='#D3D3D3'
timedisplay.style.textAlign='center'
timedisplay.style.width='100px'
timedisplay.style.height='25px'
timedisplay.style.marginLeft='40px'
timedisplay.style.marginRight='20px'
timedisplay.style.borderRadius='6px'


let timer;
  let timeleft = 60;

  function starttimer() {
    clearTimeout(timer); 
    timeleft = 60; 
    updateTimerDisplay();

    function countdown() {
      if (timeleft > 0) {
        timeleft -= 1;
        updateTimerDisplay();
        timer = setTimeout(countdown, 1000);
      } else {
        //alert('Time is up! Your opponent Wins');
       
      }
    }

    timer = setTimeout(countdown, 1000);
    return timeleft;  
  }

  function updateTimerDisplay() {
    timedisplay.textContent =`Time :${ timeleft}`;
     if(timeleft==0){starttimer()}
  }
 
 
  starttimer()
  restarttimer()
  function restarttimer(){
    if(Window.fn===1|| Window.fn===2){
        starttimer()
        
    }
  }
let parent
  if(Window.width<768){
     parent=document.querySelector('.display-responsive')
    console.log("mobile")
}
else{
     parent=document.querySelector('.display')
     
}

parent.appendChild(timedisplay)






let player1=prompt("Enter name of the first player")
Window.p1=player1
let player2=prompt("Enter name of the second player")
alert("Game is going to start")
Window.p2=player2

const player=document.querySelector('.first_player');
//player.innerHTML=`${currentplayer} Turn`
player.style.color="white";
player.style.textAlign="center";
function callplayer1move(){
    var currentplayer=player1;
    player.innerHTML=`${currentplayer}\'s Turn`
    player1move();
    setTimeout(callplayer2move,10000)//60-timeleft
}
function callplayer2move(){
    var currentplayer=player2;
    player.innerHTML=`${currentplayer}\'s Turn`
    player2move();
    setTimeout(callplayer1move,)//60-timeleft
}
callplayer2move()