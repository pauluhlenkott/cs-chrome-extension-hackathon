//start by getting the start button and real timer division 
//the division in html has to be initiated first 
//now, the startbutton button is global, so does the real timer 
  const startButton = document.getElementById('start-button'); 
  const realTimer = document.getElementById('real-timer'); 
  const backgroundMusic = document.getElementById('background-music');

//only start the real-timer timer when we click 
startButton.addEventListener('click', 
    function(){

    startButton.textContent = "breath...";
    //disable after one click 
    startButton.disabled = true; 
    
    //play background music 
    backgroundMusic.play();

    startTimer(60, realTimer)
    }
); 
  
//pass in duration and display parameters 
function startTimer(duration,display){
  //initialize  
  let timer = duration;
  let isInhale = true; 

//setInterval is to start/set the interval 
//interval = set internal func 
//set internal func has a callback 
// the callback will be called every 1000 ms
//until we call clear interval 
  const interval = 
    setInterval(function () {

    //when timer is divisible by 5, swtiching from inhale to exhale or vice versa.     
    if (timer % 5===0){
      if (isInhale){
        startButton.textContent = "inhale"; 
      }else{
        startButton.textContent = "exhale"; 
      }
      isInhale = !isInhale; 
    }

        //timer/60 -> minute 
        //10 -> cut of the residuals of the numer (timer / 60) or (timer % 60)
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        //if the number is < 10, then add a 0 in string before so it shows xx:0x; 
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //.textContent belongs to DOM. it is to set the text content. 
        //display points at html 
        //because  display = document.getElementById('real-timer');, this text content is manipulating real-timers display 
      
        display.textContent = minutes + ":" + seconds;

        //reduce timer 
        //if reduce timer -1 ends up < 0 
        ////clearInterval is to clear the interval 
        if (--timer < 0) {
          clearInterval(interval); // Stops the timer at 0
          //change the displayed content to below 
          display.textContent = "♨️How are you feeling?♨️";


          startButton.textContent = "Start";
          //re-able this click 
          //put the start back 
          startButton.disabled = false;
        }
      }, 1000);
}
