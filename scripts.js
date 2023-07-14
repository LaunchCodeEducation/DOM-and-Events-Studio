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
    rocket.style.left = "0px";
    rocket.style.bottom = "0px";
    const up = document.getElementById("up");
    up.addEventListener("click", event => {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        spaceShuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML) + 10000)
    });
    const down = document.getElementById("down");
    down.addEventListener("click", event => {
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        spaceShuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML) - 10000)
    });
    const left = document.getElementById("left");
    left.addEventListener("click", event => {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
    });
    const right = document.getElementById("right");
    right.addEventListener("click", event => {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
    });
    console.log("page is fully loaded");
});