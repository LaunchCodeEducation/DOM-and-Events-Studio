// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoffButton = null;
let landingButton = null;
let missionAbortButton = null;
let rocketPosition = null;
let upButton = null;
let downButton = null;
let rightButton = null;
let leftButton = null;

function init(){
    flightStatus = document.getElementById("flightStatus");
    shuttleBackground = document.getElementById("shuttleBackground");
    spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    takeoffButton = document.getElementById("takeoff");
    landingButton = document.getElementById("landing");
    missionAbortButton = document.getElementById("missionAbort");
    rocketPosition = 0;
    upButton = document.getElementById("up");
    downButton = document.getElementById("down");
    rightButton = document.getElementById("right");
    leftButton = document.getElementById("left");
    
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
        rocketPosition += 10;
        shuttleBackground.style.bottom = `${rocketPosition}px`;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;

    })
    downButton.addEventListener("click", function(){
        rocketPosition -= 10;
        shuttleBackground.style.bottom = `${rocketPosition}px`;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    })
    rightButton.addEventListener("click", function(){
        rocketPosition += 10;
        shuttleBackground.style.left = `${rocketPosition}px`;

    })
    leftButton.addEventListener("click", function(){
        rocketPosition -= 10;
        shuttleBackground.style.left = `${rocketPosition}px`;
    })
}
window.onload = init;
