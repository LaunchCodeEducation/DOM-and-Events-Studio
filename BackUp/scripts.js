// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');

    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const flightStatus = document.getElementById("flightStatus");
    const rocket = document.getElementById("rocket");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeightParagraph = document.getElementById("spaceShuttleHeight");
    const abortMission = document.getElementById("missionAbort");
    const moveLeft = document.getElementById("left");
    const moveRight = document.getElementById("right");
    const moveUp = document.getElementById("up");
    const moveDown = document.getElementById("down");

    let spaceShuttleHeight = 0;
    let inSpace = false;
    let startHorizontal = 0;
    let startVertical = 250;
    let currentHorizontal = startHorizontal;
    let currentVertical = startVertical;
    let leftMove = 0;
    let rightMove = 0;
    let upMove = 0;
    let downMove = 0;

    takeoffButton.addEventListener("click", event => {
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (answer === true) {
            upMove = currentVertical - 10;
            currentVertical = upMove;
            spaceShuttleHeight += 10000;
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue";
            let heightAsText = new Intl.NumberFormat().format(spaceShuttleHeight);
            shuttleHeightParagraph.innerHTML = `${heightAsText}`;
            rocket.style.transform = `translate(${startHorizontal}px, ${currentVertical}px)`;
            inSpace = true;
        }
      });

      landButton.addEventListener("click", event => {
          let answer = window.alert("The shuttle is landing. Landing gear engaged.");
          flightStatus.innerHTML = "The shuttle has landed.";
          shuttleHeightParagraph.innerHTML = `0`;
          shuttleBackground.style.backgroundColor = "green";
          currentHorizontal = startHorizontal;
          currentVertical = startVertical;
          rocket.style.transform = `translate(${startHorizontal}px, ${startVertical}px)`;

      });

      abortMission.addEventListener("click", event => {
        let answer = window.confirm("Confirm that you want to abort the mission.");
        if (answer === true) {
            spaceShuttleHeight = 0;
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green";
            let heightAsText = new Intl.NumberFormat().format(spaceShuttleHeight);
            shuttleHeightParagraph.innerHTML = `${heightAsText}`;
            currentHorizontal = startHorizontal;
            currentVertical = startVertical;
              rocket.style.transform = `translate(${startHorizontal}px, ${startVertical}px)`;
        }

      });

      moveLeft.addEventListener("click", event => {
        if (inSpace === true) {

          leftMove = currentHorizontal - 10;
          currentHorizontal = leftMove;
          rocket.style.transform = `translate(${leftMove}px, ${currentVertical}px)`;
        }
    });

      moveRight.addEventListener("click", event => {
        if (inSpace === true) {
            rightMove = currentHorizontal + 10;
          currentHorizontal = rightMove;
          rocket.style.transform = `translate(${rightMove}px, ${currentVertical}px)`;
        }
  });

      moveUp.addEventListener("click", event => {
        if (inSpace === true) {

            if (currentVertical < 0) {
              window.alert("Maximum altitude reached.");
            } else {
              upMove = currentVertical - 10;
              currentVertical = upMove;
              rocket.style.transform = `translate(${currentHorizontal}px, ${upMove}px)`;
              spaceShuttleHeight += 10000;
              let heightAsText = new Intl.NumberFormat().format(spaceShuttleHeight);
              shuttleHeightParagraph.innerHTML = `${heightAsText}`;
            }
        }
  });

      moveDown.addEventListener("click", event => {
        if (inSpace === true) {
          if (currentVertical >= 240) {
            window.alert("Please land instead of crashing to Earth.");
          } else {
            downMove = currentVertical + 10;
          currentVertical = downMove;
          rocket.style.transform = `translate(${currentHorizontal}px, ${downMove}px)`;
        spaceShuttleHeight -= 10000;
        let heightAsText = new Intl.NumberFormat().format(spaceShuttleHeight);
        shuttleHeightParagraph.innerHTML = `${heightAsText}`;
      }
    }
  });

});