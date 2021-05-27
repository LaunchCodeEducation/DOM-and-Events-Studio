// Write your JavaScript code here.
// Remember to pay attention to page loading!


function init () {
    const takeOff = document.getElementById("takeoff");
    const button = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const box = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const pic = document.getElementById("pic");

    takeOff.addEventListener('click', function (event) {
        let txt;
        let go = confirm("Confirm that the shuttle is ready for takeoff.");
        if (go == true ) {
            flightStatus.innerHTML = "Shuttle in flight";
            box.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
            event.stopPropagation();
        };
    });

    button.addEventListener('click', function (event) {
        let stop = confirm("The shuttle is landing. Landing gear engaged.");
        if (stop == true) {
            flightStatus.innerHTML = "The shuttle has landed.";
            box.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            event.stopPropagation();
        };
    });

    abortButton.addEventListener('click', function (event) {
        let skip = confirm("Confirm that you want to abort the mission.");
        if (skip == true) {
            flightStatus.innerHTML = "Mission aborted"
            box.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            event.stopPropagation();
        };
    });


};

window.addEventListener("load", init);