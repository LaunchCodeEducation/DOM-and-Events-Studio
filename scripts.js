// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    let flightStatus = document.getElementById("flightStatus")
    let shuttleBackground = document.getElementById("shuttleBackground")
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    let takeoffButton = document.getElementById("takeoff")
    let landingButton = document.getElementById("landing")
    let missionAbortButton = document.getElementById("missionAbort")
    let upButton = document.getElementById("Up")
    let downButton = document.getElementById("Down")
    let rightButton = document.getElementById("Right")
    let leftButton = document.getElementById("Left")
    takeOffButton.addEventListener("click",function(){
        if(window.confirm(("Confirm that the shuttle is ready for takeoff."))===true){
        flightStatus.innerHTML= "Shuttle in flight.";
        }
    });
}
  window.onload = init;