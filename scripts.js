// Write your JavaScript code here.

// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let imgObj = document.getElementById('rocket');
    imgObj.style.position= 'absolute';
    imgObj.style.left = '-20px';
    imgObj.style.bottom = '0px';
    let status = document.getElementById('flightStatus');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    // bonus 
    let shuttleWidth = document.getElementById('spaceShuttleWidth');
    //
    let bg = document.getElementById('shuttleBackground');

    let right = this.document.getElementById('right');
    right.addEventListener("click", function () {
      // if statement is bonus 
      if (shuttleWidth.innerHTML != "280000"){
        movement = parseInt(imgObj.style.left) + 10 + 'px';
        imgObj.style.left = movement;
        shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) + 10000;
      }
    });

    let left = this.document.getElementById('left');
    left.addEventListener("click", function () {
      // if statement is bonus 
      if (shuttleWidth.innerHTML != "0"){
        movement = parseInt(imgObj.style.left) - 10 +'px';
        imgObj.style.left = movement;
        shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) - 10000;
      }
    });

    let down = this.document.getElementById('down');
    down.addEventListener("click", function () {
      // if statement is bonus 
      if (shuttleHeight.innerHTML != "0"){
        movement = parseInt(imgObj.style.bottom) - 10 + 'px';
        imgObj.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
      }
    });

    let up = this.document.getElementById('up');
    up.addEventListener("click", function () {
      // if statment is bonus 
      if (shuttleHeight.innerHTML != "250000"){
        movement = parseInt(imgObj.style.bottom) + 10 + 'px';
        imgObj.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
      }
    });

    let takeOff = this.document.getElementById('takeoff');
    takeOff.addEventListener("click", function () {
        result = window.confirm("Are you sure the shuttle is ready for takeoff?");
        if (result) {
            bg.style.backgroundColor = 'blue';
            // bonus 
            movement = parseInt(imgObj.style.bottom) + 200 + 'px';
            imgObj.style.bottom = movement;
            //
            shuttleHeight.innerHTML = '10000';
            status.innerHTML = "Shuttle in flight";
        }
    });

    let land = this.document.getElementById('landing');
    land.addEventListener("click", function () {
        bg.style.backgroundColor = 'green';
       result= window.confirm('The shuttle is landing. Landing gear engaged.');
       if(result){ shuttleHeight.innerHTML = '0';
        shuttleWidth.innerHTML = '0';
        status.innerHTML = "Shuttle landed";
        imgObj.style.bottom = '0px';
        imgObj.style.left = '-20px';}
    });

    let missionAbort = this.document.getElementById('missionAbort');
    missionAbort.addEventListener("click", function () {
        result = window.confirm("Are you sure you want to end the mission?");
        if (result) {
            bg.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = '0';
            shuttleWidth.innerHTML = '0';
            status.innerHTML = "Mission aborted";
            imgObj.style.bottom = '0px';
            imgObj.style.left = '-20px';
        }
    });

});
// window.addEventListener("load", function(){
 
   
//     let takeOffbtn=this.document.getElementById("takeoff");
//     let flightStatus=this.document.getElementById("flightStatus");
//     let backgroundColor=this.document.getElementById("shuttleBackground");
//     let shuttleHeight= this.document.getElementById("spaceShuttleHeight");

//     let landbtn=this.document.getElementById("landing");

//     let abbortMissionbtn=this.document.getElementById("missionAbort");


//     takeOffbtn.addEventListener("click", function(){
   
//      let response=window.confirm("Confirm that the shuttle is ready for takeoff.");
//      if(response)
//      {
//     flightStatus.innerHTML= "Shuttle in flight";
//      backgroundColor.style.backgroundColor="blue";
//      shuttleHeight.innerHTML=10000;
//      }

//     });


//     landbtn.addEventListener("click", function(){
   
//         let response=window.confirm("The shuttle is landing. Landing gear engaged.");
//         if(response)
//         {
//        flightStatus.innerHTML= "The shuttle has landed.";
//         backgroundColor.style.backgroundColor="green";
//         shuttleHeight.innerHTML=0;
//         }
   
//        });

//        abbortMissionbtn.addEventListener("click", function(){
   
//         let response=window.confirm("Confirm that you want to abort the mission.");
//         if(response)
//         {
//        flightStatus.innerHTML= "Mission aborted.";
//         backgroundColor.style.backgroundColor="green";
//         shuttleHeight.innerHTML=0;
//         }
   
//        });
       
// });
