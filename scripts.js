// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){
    let status = this.document.getElementById("flightStatus");
    let bg = this.document.getElementById("shuttleBackground");
    let shuttleHeight = this.document.getElementById("spaceShuttleHeight");
    let rocketImg = this.document.getElementById("rocket");
    rocketImg.style.position = "absolute";
    rocketImg.style.left = "0px";
    rocketImg.style.bottom = "0px";

    let left = this.document.getElementById("left");
    left.addEventListener("click", function(){
        if (parseInt(rocketImg.style.left) > 0){
            rocketImg.style.left = parseInt(rocketImg.style.left) - 10 + "px";
        }
    })

    let right = this.document.getElementById("right");
    right.addEventListener("click", function(){
        if (parseInt(rocketImg.style.left) < 300){
            rocketImg.style.left = parseInt(rocketImg.style.left) + 10 + "px";
        }   
    })

    let up = this.document.getElementById("up");
    up.addEventListener("click", function(){
        if (parseInt(rocketImg.style.bottom) < 250) {
            rocketImg.style.bottom = parseInt(rocketImg.style.bottom) + 10 + "px";
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }     
    })
    let down = this.document.getElementById("down");
    down.addEventListener("click", function(){
        if (parseInt(rocketImg.style.bottom) > 0) {
        rocketImg.style.bottom = parseInt(rocketImg.style.bottom) - 10 + "px";
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }    
    })

    let takeOff = this.document.getElementById("takeOff");
    takeOff.addEventListener("click", function(){
        if (window.confirm("Are you sure the shuttle is ready for takeoff?")){
            status.innerHTML = "Shuttle in flight";
            bg.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10000";
        }
    })
    
    let landing = this.document.getElementById("landing");
    landing.addEventListener("click", function(){
            window.alert("The shuttle is landing. landing gear engaged.");
            status.innerHTML = "Shuttle landed";
            bg.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
            rocketImg.style.bottom = "0px";     
    })

    let missionAbort = this.document.getElementById("missionAbort");
    missionAbort.addEventListener("click", function(){
            window.alert("Confirm that you want to abort the mission.");
            status.innerHTML = "Mission aborted";
            bg.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
    
})
  
})