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
    const rocket = document.getElementById('rocket');


    takeoff.addEventListener('click', function(event) {
        if (window.confirm('Confirm that the shuttle is ready for takeoff.') === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = 10000;
            rocket.style.position = "relative";
            rocket.style.top = 240 + "px";  //250 is the max
            rocket.style.left = 0 + "px"; //330 is the max
        }
        event.stopPropagation();
    });

    landing.addEventListener('click', function(event) {
        if (Number(spaceShuttleHeight.innerHTML) === 0) {
            flightStatus.innerHTML = 'Shuttle is still on the launch pad.'
        } else {
            window.alert('The shuttle is landing.  Landing gear engaged.');
            flightStatus.innerHTML = 'The shuttle has landed.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.top = 0 + 'px';
            rocket.style.left = 0 + 'px';
            event.stopPropagation();
        }
    });
    
    missionAbort.addEventListener('click', function(event) {
        if (window.confirm('Confirm that you want to abort the mission.') === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.top = 0 + 'px';
            rocket.style.left = 0 + 'px';
        }
        event.stopPropagation();
    });

    upButton.addEventListener('click', function(event) {
        if(Number(spaceShuttleHeight.innerHTML) === 0) {
            flightStatus.innerHTML = 'Shuttle needs to takeoff before gaining altitude.';
        } else {
            if(parseInt(rocket.style.top) - 10 >= 0) {
                rocket.style.top = parseInt(rocket.style.top) - 10 + "px";
                spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
                flightStatus.innerHTML = 'Shuttle in flight.';
            } else {
                flightStatus.innerHTML = 'Shuttle is at it\'s highest altitude.';
            }
        }    
        event.stopPropagation();
    });

    downButton.addEventListener('click', function(event) {
        if(parseInt(rocket.style.top) + 10 <= 250) {
            rocket.style.top = parseInt(rocket.style.top) + 10 + "px";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
            flightStatus.innerHTML = 'Shuttle in flight.';
            if(parseInt(rocket.style.top) === 250) {
                window.alert('The shuttle is landing.  Landing gear engaged.');
                flightStatus.innerHTML = 'Shuttle has landed.';
                shuttleBackground.style.backgroundColor = 'green';
                rocket.style.top = 0 + 'px';
                rocket.style.left = 0 + 'px';
            }
        } else {
            flightStatus.innerHTML = 'Shuttle has landed.';
        }
        event.stopPropagation();
    });

    rightButton.addEventListener('click', function(event) {
        if(parseInt(spaceShuttleHeight.innerHTML) < 10000) {
            flightStatus.innerHTML = 'Shuttle cannot move right before taking off.';
        } else {
            if(parseInt(rocket.style.left) + 10 <= 330) {
                rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
                flightStatus.innerHTML = 'Shuttle in flight.';
            } else {
                flightStatus.innerHTML = 'Shuttle cannot leave the galaxy.';
            }
    }
        event.stopPropagation();
    });

    leftButton.addEventListener('click', function(event) {
        if(parseInt(spaceShuttleHeight.innerHTML) < 10000) {
            flightStatus.innerHTML = 'Shuttle cannot move left before taking off.';
        } else {
            if(parseInt(rocket.style.left) - 10 >= -330) {
                rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
                flightStatus.innerHTML = 'Shuttle in flight.';
            } else {
                flightStatus.innerHTML = 'Shuttle cannot leave the galaxy.';
            }
        }    
        event.stopPropagation();
    });
}

window.addEventListener('load', init);