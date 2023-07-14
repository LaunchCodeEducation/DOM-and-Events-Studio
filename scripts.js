// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
  
    let flightStatus = document.getElementById('flightStatus');
    let takeoffButton = document.getElementById('takeoff');
    let shuttleBG = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let landButton = document.getElementById('landing');
    let abortButton = document.getElementById('missionAbort');
   
   let miles = 0;
   
   let rocket = document.getElementById('rocket');
   
   let upButton = document.getElementById('up');
   let downButton = document.getElementById('down');
   let leftButton = document.getElementById('left');
   let rightButton = document.getElementById('right');
   
   rocket.style.border = "black";
   
   rocket.style.marginTop = "250px";
   rocket.style.marginLeft = "-10px";
   
   
       function liftOff(){
           let ans = window.confirm('Confirm that the shuttle is ready for takeoff.');
           if (ans === true){
               flightStatus.innerHTML = 'Shuttle in flight.';
               shuttleBG.style.backgroundColor = 'blue';
               shuttleHeight.innerHTML = '10000';
           }
         };
   takeoffButton.addEventListener('click', liftOff);      
      
   
    function land(){
        window.alert('The shuttle is landing. Landing gear engaged.');
         flightStatus.innerHTML = 'The shuttle has landed';
         shuttleBG.style.backgroundColor = 'green';
         shuttleHeight.innerHTML = '0';
         rocket.style.marginTop = "250px";
         rocket.style.marginLeft = "-10px";
       }
   landButton.addEventListener('click', land);  
   
   function abortClicked(){
       let ans = window.confirm('Confirm that you want to abort the mission.');
      
       if (ans === true){
           flightStatus.innerHTML = 'Mission aborted.';
           shuttleBG.style.backgroundColor = 'green';
           shuttleHeight.innerHTML = '0';
           rocket.style.marginTop = "250px";
           rocket.style.marginLeft = "-10px";
       }
   }
   abortButton.addEventListener('click', abortClicked);  
   
   
   function upClicked(){
     
       let current = parseInt(rocket.style.marginTop);
       current -= 10;
       let val = current+"px";
        rocket.style.marginTop = val;
       miles += 10000 
        shuttleHeight.innerHTML = miles;
   
       }
   upButton.addEventListener('click', upClicked); 
   
   
   function downClicked(){
       let current = parseInt(rocket.style.marginTop);
       current += 10;
       let val = current+"px";
        rocket.style.marginTop = val;
        miles -= 10000;
        shuttleHeight.innerHTML = miles;
       
       
   }
   downButton.addEventListener('click', downClicked); 
   
   
   function leftClicked(){
       let current = parseInt(rocket.style.marginLeft);
       current -= 10;
       let val = current+"px";
        rocket.style.marginLeft = val;
   }
   leftButton.addEventListener('click', leftClicked); 
   
   
   function rightClicked(){
       let current = parseInt(rocket.style.marginLeft);
       current += 10;
       let val = current+"px";
        rocket.style.marginLeft = val;
   
   }
   rightButton.addEventListener('click', rightClicked); 
   
   }
   
   
   
   window.addEventListener("load", init);