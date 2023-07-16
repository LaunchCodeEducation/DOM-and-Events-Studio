// Write your JavaScript code here.
// Remember to pay attention to page loading!
// 23.8.2.1
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');

    const buttonTakeOff = document.getElementById("takeoff");
    const buttonLanding = document.getElementById("landing");
    const flightStatus = document.getElementById("flightStatus");
    const rocket = document.getElementById("rocket");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const paragraphShuttleHeight = document.getElementById("spaceShuttleHeight");
    const buttonMissionAbort = document.getElementById("missionAbort");
    const buttonLeft = document.getElementById("left");
    const buttonRight = document.getElementById("right");
    const buttonUp = document.getElementById("up");
    const buttonDown = document.getElementById("down");
    //
    // Assumes Landing is at the bottom\center of shuttleBackground (0, 250); Maximum height is 0 and minimum is 250.
    // No limit on horizontal moves (left and right). Display warning if vertical limit exceeded.
    // Uses transform.translate property to position rocket
    //
    let rocketHeight = 0;
    let rocketLaunched = false;
    let rocketXStart = 0;
    let rocketYStart = 250;
    let rocketXCurrent = rocketXStart;
    let rocketYCurrent = rocketYStart;
	//
	// 23.8.2.2
    buttonTakeOff.addEventListener("click", event => {
        let confirmTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmTakeOff === true) {
            rocketYCurrent = rocketYCurrent - 10;
            rocketHeight += 10000;
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue";
           	paragraphShuttleHeight.innerHTML = `${rocketHeight}`;
            rocket.style.transform = `translate(${rocketXCurrent}px, ${rocketYCurrent}px)`;
            rocketLaunched = true;
        }
      });
		// 23.8.2.3
      buttonLanding.addEventListener("click", event => {
          let confirmLanding = window.alert("The shuttle is landing. Landing gear engaged.");
          flightStatus.innerHTML = "The shuttle has landed.";
          paragraphShuttleHeight.innerHTML = `0`;
          shuttleBackground.style.backgroundColor = "green";
          rocketXCurrent = rocketXStart;
          rocketYCurrent = rocketYStart;
          rocket.style.transform = `translate(${rocketXCurrent}px, ${rocketYCurrent}px)`;
          rocketLaunched = false;

      });
	// 23.8.2.4
      buttonMissionAbort.addEventListener("click", event => {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort === true) {
            rocketHeight = 0;
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green";
            paragraphShuttleHeight.innerHTML = `${rocketHeight}`;
            rocketXCurrent = rocketXStart;
            rocketYCurrent = rocketYStart;
            rocket.style.transform = `translate(${rocketXCurrent}px, ${rocketYCurrent}px)`;
        }

      });
	// 23.8.2.5 - Left
      buttonLeft.addEventListener("click", event => {
        if (rocketLaunched === true) {

          rocketXCurrent = rocketXCurrent - 10;
          rocket.style.transform = `translate(${rocketXCurrent}px, ${rocketYCurrent}px)`;
        }
    });
	// 23.8.2.5 - Right
      buttonRight.addEventListener("click", event => {
        if (rocketLaunched === true) {
          rocketXCurrent = rocketXCurrent + 10;
          rocket.style.transform = `translate(${rocketXCurrent}px, ${rocketYCurrent}px)`;
        }
  });
	// 23.8.2.5 - Up

      buttonUp.addEventListener("click", event => {
        if (rocketLaunched === true) {

            if (rocketYCurrent < 0) {
              window.alert("Maximum altitude reached.");
            } else {
              rocketYCurrent = rocketYCurrent - 10;
              rocket.style.transform = `translate(${rocketXCurrent}px, ${rocketYCurrent}px)`;
              rocketHeight += 10000;
              paragraphShuttleHeight.innerHTML = `${rocketHeight}`;
            }
        }
  });
	// 23.8.2.5 - Down

      buttonDown.addEventListener("click", event => {
        if (rocketLaunched === true) {
          if (rocketYCurrent >= rocketYStart) {
            window.alert("Engage landing.");
          } else {
          rocketYCurrent = rocketYCurrent + 10;
          rocket.style.transform = `translate(${rocketXCurrent}px, ${rocketYCurrent}px)`;
        rocketHeight -= 10000;
        paragraphShuttleHeight.innerHTML = `${rocketHeight}`;
      }
    }
  });

});