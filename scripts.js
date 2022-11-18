// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const flightStatus = document.getElementById("flightStatus");
    const flightDisplay = document.getElementById("flightDisplay");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    console.log("Loaded")
}

window.addEventListener("load", init);

takeOff = () => {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue"
        document.getElementById("spaceShuttleHeight").innerHTML += 10000;
    }
}

let takeOffButton = document.getElementById("takeoff");
takeOffButton.addEventListener("click", takeOff)

land = () => {
    window.alert("The shuttle is landing. Landing gear engaged.")
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "green"
    document.getElementById("spaceShuttleHeight").innerHTML -= 10000;
}

let landButton = document.getElementById("landing");
landButton.addEventListener("click", land)

let abortMission = () => {
    let response = window.confirm("Confirm that you want to abort the mission.");
    if (response) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green"
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }
}

let abortMissionButton = document.getElementById("missionAbort");
abortMissionButton.addEventListener("click", abortMission)
