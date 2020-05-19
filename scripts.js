window.addEventListener("load", function(){

    //##########################
    // vars
    let rocket = document.getElementById("rocket");
    let height = document.getElementById("spaceShuttleHeight");
    
    let pos = {
        x: 0,
        y: Number(height.innerHTML),
        lastCommand: undefined
    }

    let flightStatus = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");

    //##########################
    // State buttons
    let buttonTakeoff = document.getElementById("takeoff");
    buttonTakeoff.addEventListener("click", function(){ makeChange("launch", 0, 10000)});
    
    let buttonLanding = document.getElementById("landing");
    buttonLanding.addEventListener("click", function(){ makeChange("land", 0, 0);});
    
    let buttonAbort = document.getElementById("missionAbort");
    buttonAbort.addEventListener("click", function(){ makeChange("abort", 0, 0);});

    //##########################
    // Movement buttons
    let buttonUp = document.getElementById("Up");
    buttonUp.addEventListener("click", function(){ makeChange("move", 0, 10000);});

    let buttonDown = document.getElementById("Down");
    buttonDown.addEventListener("click", function(){ makeChange("move", 0, -10000);});

    let buttonRight = document.getElementById("Right");
    buttonRight.addEventListener("click", function(){ makeChange("move", 10,);});

    let buttonLeft = document.getElementById("Left");
    buttonLeft.addEventListener("click", function(){ makeChange("move", -10,);});
    
    //##########################
    // Functions
    function resetShuttle(x, y){
        makeChange("move", x, y);
        rocket.style.position = "initial";
        background.style.backgroundColor = "green";
    };

    function moveShuttle(x, y){
        if(x === 0){
            pos.x = 0;
        }else if(checkBorder(x)){
            pos.x += x
        };
        
        if(y === 0){
            pos.y = 0;
        }else if(y != undefined){
            pos.y += y;
        };
    };

    function checkBorder(x){
        RocketBox = rocket.getBoundingClientRect();
        ParentBox = rocket.parentElement.getBoundingClientRect();
        return !(RocketBox.left + x <= ParentBox.left) && !(RocketBox.right + x >= ParentBox.right)
    };

    function checkStatus(){ return flightStatus.innerHTML === "Shuttle in flight."};

    function askUser(message){ return confirm(message);};

    //##########################
    // Main logic
    function makeChange(type, x, y){
        switch (type){
            
            case "launch":
                if(!checkStatus()){
                    if(askUser("Confirm that the shuttle is ready for takeoff.")){
                        // rocket.style.position = "absolute";
                        flightStatus.innerHTML = "Shuttle in flight.";
                        background.style.backgroundColor = "blue";
                        makeChange("move", x, y);
                        pos.lastCommand = "Launch"
                    };
                };
                break;

            case "land":
                if(checkStatus()){
                    alert("The shuttle is landing. Landing gear engaged.");
                    resetShuttle(x, y);
                    flightStatus.innerHTML = "The shuttle has landed.";
                    pos.lastCommand = "Land"
                };
                break;

            case "abort":
                if(askUser("Confirm that you want to abort the mission.")){
                    resetShuttle(x, y);
                    flightStatus.innerHTML = "Mission Aborted";
                    pos.lastCommand = "Abort"
                };
                break;

            case "move":
                if(checkStatus()){
                    moveShuttle(x, y);
                    rocket.style.transform = `translateX(${pos.x}px)`;
                    height.innerHTML = pos.y;
                    pos.lastCommand = "Move";
                };
                break;
                
            default:
                console.log("Unkown change type:", type);
                break;
        }
    };
});