// Write your JavaScript code here.
window.addEventListener("load", function () {
    // command button elements
    let takeOffButton = document.getElementById('takeoff');
    let landingButton = document.getElementById('landing');
    let abortMissionButton = document.getElementById('missionAbort');

    // direction button elements
    const upButton = document.getElementById('Up');
    const downButton = document.getElementById('Down');
    const leftButton = document.getElementById('Left');
    const rightButton = document.getElementById('Right');

    // rocket element - added to make takeoff and land on command
    const rocket = document.getElementById('rocket');
    let flightStatus = document.getElementById('flightStatus');
    const flightScreen = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');

//  2
    takeOffButton.addEventListener('click', function() {
        let confirmation = window.confirm('Confirm that the shuttle is ready for takeoff')
        if (confirmation) {
            flightStatus.innerHTML = "Shuttle in flight."
            flightScreen.style.backgroundColor = 'blue'
            rocket.style.bottom = '100px'; //move to center of square for takeoff
            shuttleHeight.innerHTML = '10000';
        }
    });

//  3
    landingButton.addEventListener('click', function() {
        let alert = window.confirm("The shuttle is landing. Landing gear engaged.")
        if (alert) {
            flightStatus.innerHTML = "The shuttle has landed."
            flightScreen.style.backgroundColor = 'green'
            shuttleHeight.innerHTML = '0';
            rocket.style.bottom = '0'; // land at bottom of square
        }
    });

    abortMissionButton.addEventListener('click', function() {
        let abort = window.confirm("Confirm that you want to abort the mission.")
        if (abort) {
            flightStatus.innerHTML = "ABORTED BOOOOOOOOOOOO."
            flightScreen.style.backgroundColor = 'purple'
            shuttleHeight.innerHTML = '0';
            rocket.style.bottom = '0';
            rocket.style.left = '2px';
        }
    });
    
// 5
    leftButton.addEventListener('click', function () {
        rocket.style.left = String(parseInt(rocket.style.left, 10) - 10) + 'px';
    });
    rightButton.addEventListener('click', function () {
        rocket.style.left = String(parseInt(rocket.style.left, 10) + 10) + 'px';
    });
    upButton.addEventListener('click', function () {
        shuttleHeight.innerHTML = String(parseInt(shuttleHeight.innerHTML, 10) + 1000) + 'px';
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) + 10) + 'px';
    });
    downButton.addEventListener('click', function () {
        shuttleHeight.innerHTML = String(parseInt(shuttleHeight.innerHTML, 10) - 1000) + 'px';
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) - 10) + 'px';
    });
});

    // Remember to pay attention to page loading!