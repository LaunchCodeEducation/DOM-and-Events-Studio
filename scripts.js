// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const missionAbort = document.getElementById("missionAbort");
    const takeOff = document.getElementById("takeoff");
    const landTheShip = document.getElementById("landing");
    const shipBackground = document.getElementById("shuttleBackground");
    const shipHeight = document.getElementById("spaceShuttleHeight");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const ship = document.getElementById("rocket");

    function confirmLiftOff() {
        if (confirm("Confirm that the shuttle is ready for takeoff.") == true) {
          document.getElementById("flightStatus").innerHTML = " Shuttle in flight. ";
          shipBackground.style.backgroundColor = "blue";
          shipHeight.innerHTML = " 10,000 ";
          console.log("Lift off!");
        } else {
          document.getElementById("flightStatus").innerHTML = " Space shuttle ready for takeoff ";
          console.log("Launch scrubbed.")
        }
    }

    function landThisThing () {
      alert("The shuttle is landing. Landing gear engaged.");
      document.getElementById("flightStatus").innerHTML = " The shuttle has landed. ";
      shipBackground.style.backgroundColor = "green";
      shipHeight.innerHTML = " 0 ";
      console.log("Coming in for a landing.");
    }

    function abortMission() {
      if (confirm("Confirm that you want to abort the mission.") == true) {
        document.getElementById("flightStatus").innerHTML = " Mission aborted. ";
        shipBackground.style.backgroundColor = "green";
        shipHeight.innerHTML = " 0 ";
        console.log("Abort! Abort!");
      } else {
        document.getElementById("flightStatus").innerHTML = " We're all fine here. How are you? ";
        console.log("We're still on.")
      }
    }

  /* on click launch...
  A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." 
    If the shuttle is ready for liftoff, then add parts b-d.
  The flight status should change to "Shuttle in flight."
  The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
  The shuttle height should increase by 10,000 miles.
  */
  takeOff.addEventListener("click", confirmLiftOff);

  /* on click land... 
  A window alert should let the user know "The shuttle is landing. Landing gear engaged."
  The flight status should change to "The shuttle has landed."
  The background color of the shuttle flight screen should change from blue to green.
  The shuttle height should go down to 0.
  */
  landTheShip.addEventListener("click", landThisThing);

  /* on click abort...
  A window confirm should let the user know "Confirm that you want to abort the mission." 
    If the user wants to abort the mission, then add parts b-d.
  The flight status should change to "Mission aborted."
  The background color of the shuttle flight screen should change from blue to green.
  The shuttle height should go to 0.
  */
  missionAbort.addEventListener("click", abortMission);

  /*"Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
  The rocket image should move 10 px in the direction of the button that was clicked.
  If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
  
  up.addEventListener("click", function ( event ) {
    ship.style.top += 10px;
    shipHeight.innerHTML += 10000;
  });
  
  down.addEventListener("click", function ( event ) {
    ship.style.top -= 10px;
    shipHeight.innerHTML -= 10000;
  });
  left.addEventListener("click", function ( event ) {
    ship.style.left -= 10px;
  });
  right.addEventListener("click", function ( event ) {
    ship.style.left += 10px;
  }); */

  //Bonuses
  //Keep the rocket from flying off of the background.
  //Return the rocket to its original position on the background when it has been landed or the mission was aborted.


}

window.addEventListener("load", init);