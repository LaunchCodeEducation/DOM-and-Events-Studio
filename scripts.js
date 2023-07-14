// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", event => {
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    takeoff.addEventListener("click", event => {
        if(confirm("Confirm that the shuttle is ready for takeoff")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10000"
        }
    });

    const landing = document.getElementById("landing");
    landing.addEventListener("click", event => {
        alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0"
        
    });

    const missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", event => {
        if (confirm("Confirm that you want to abort the mission.")) {
        flightStatus.innerHTML = "Mission aborted";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0"
        }
    });
    const rocket = document.getElementById("rocket");
    const up = document.getElementById("up");
    // up.addEventListener("click", event => {

    // });
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    left.addEventListener("click", event => {
        rocket.style.left += "10px";
        console.log("Responded left!");
    });
    const right = document.getElementById("right");
    console.log("page is fully loaded");
});