// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    flightStatusMsg = document.getElementById("flightStatus");
    shuttleBackgroundColor = document.getElementById("shuttleBackground");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    takeOffButton = document.getElementById("takeoff");
    landButton = document.getElementById("landing");
    abortMissionButton = document.getElementById("missionAbort");

    upButton = document.getElementById("up");
    downButton = document.getElementById("down");
    rightButton = document.getElementById("right");
    leftButton = document.getElementById("left");

    rocket = document.getElementById("rocket");
    rocket.style.position = "relative";

    takeOffButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatusMsg.innerHTML = "Shuttle in flight.";
            shuttleBackgroundColor.style.background = "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    })

    landButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatusMsg.innerHTML = "The shuttle has landed.";
        updateRocketPosition();
    })

    abortMissionButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatusMsg.innerHTML = "Mission Aborted.";
            updateRocketPosition();
        }
    })

    leftButton.addEventListener("click", function() {
        rocket.style.left = updatePosition(rocket.style.left, false);
    })

    rightButton.addEventListener("click", function() {
        rocket.style.left = updatePosition(rocket.style.left, true);
    })

    upButton.addEventListener("click", function() {
        if (Number(shuttleHeight.innerHTML) < 0) {
            rocket.style.top = updatePosition(rocket.style.top, false);
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;;
        }
    })

    downButton.addEventListener("click", function() {
        rocket.style.top = updatePosition(rocket.style.top, true);
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;;
    })
})

function updatePosition (positionStatus, positive) {
    let position = (positionStatus).slice(0, positionStatus.length - 2);
    if (positive) {
        return Number(position) + 10 + "px";
    } else {
        return Number(position) - 10 + "px";
    }
}

function updateRocketPosition() {
        shuttleBackgroundColor.style.background = "green",
        shuttleHeight.innerHTML = 0,
        rocket.style.left = "0px",
        rocket.style.top = "0px"
}