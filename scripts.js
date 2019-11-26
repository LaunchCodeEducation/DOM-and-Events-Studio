// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let takeoffButton = document.getElementById("takeoff");
    let landingButton = document.getElementById("landing");
    let missionAbortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("Up");
    let downButton = document.getElementById("Down");
    let rightButton = document.getElementById("Right");
    let leftButton = document.getElementById("Left");
    let rocket = document.getElementById("rocket");
    rocket.style.bottom = 0;
    rocket.style.top = 0;
    takeoffButton.addEventListener("click",function(){
        if(window.confirm(("Confirm that the shuttle is ready for takeoff."))===true){
        flightStatus.innerHTML= "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = 10000;
        }
    })
    landingButton.addEventListener("click", function(){
        if((window.confirm("The shuttle is landing. Landing gear engaged."))=== true){
            flightStatus.innerHTML= "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    })
    missionAbortButton.addEventListener("click", function(){
        if((window.confirm("Confirm that you want to abort the mission."))=== true){
        flightStatus.innerHTML= "Mission aborted";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        }
    })
    upButton.addEventListener("click", function(){
        rocket.style.position -= 10;
    })
    downButton.addEventListener("click", function(){
        rocket.style.position += 10;
    })
    
}
window.onload = init;
