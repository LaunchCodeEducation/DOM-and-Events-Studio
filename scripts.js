// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    const takeoff = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const landing = document.getElementById('landing');
    const missionAbort = document.getElementById('missionAbort');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const rightButton = document.getElementById('right');
    const leftButton = document.getElementById('left');
    //const rocket = document.getElementsByName('image');
    const rocket = document.getElementById('rocket');

    takeoff.addEventListener('click', function(event) {
        if (window.confirm('Confirm that the shuttle is ready for takeoff.') === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = 10000;
        }
        event.stopPropagation();
    });

    landing.addEventListener('click', function(event) {
        window.alert('The shuttle is landing.  Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
        event.stopPropagation();
    });
    
    missionAbort.addEventListener('click', function(event) {
        if (window.confirm('Confirm that you want to abort the mission.') === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
        }
        event.stopPropagation();
    });

    upButton.addEventListener('click', function(event) {
        rocket.style.top = -10 + "px";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        event.stopPropagation();
    });
    downButton.addEventListener('click', function(event) {
        rocket.style.top = 10 + "px";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        event.stopPropagation();
    });
    rightButton.addEventListener('click', function(event) {
        rocket.style.left = 10 + "px";
        event.stopPropagation();
    });
    leftButton.addEventListener('click', function(event) {
        rocket.style.left = -10 + "px";
        event.stopPropagation();
    });
}


window.addEventListener('load', init);