# DOM-and-Events-Studio
Use the window load event to ensure all elements have loaded before attaching event handlers.

1. When the "Take off" button is clicked, the following should happen:

A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
The flight status should change to "Shuttle in flight."
The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
The shuttle height should increase by 10,000 miles.

2. When the "Land" button is clicked, the following should happen:

A window alert should let the user know "The shuttle is landing. Landing gear engaged."
The flight status should change to "The shuttle has landed."
The background color of the shuttle flight screen should change from blue to green.
The shuttle height should go down to 0.

3.When the "Abort Mission" button is clicked, the following should happen:

A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
The flight status should change to "Mission aborted."
The background color of the shuttle flight screen should change from blue to green.
The shuttle height should go to 0.

4.When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:

The rocket image should move 10 px in the direction of the button that was clicked.
If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
23.8.3. 

5. Keep the rocket from flying off of the background.
Return the rocket to its original position on the background when it has been landed or the mission was aborted.
