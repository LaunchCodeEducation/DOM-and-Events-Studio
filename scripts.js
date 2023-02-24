// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
     
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let status=document.getElementById("flightStatus");
    let missionAbortButton=document.getElementById("missionAbort");
    let up =document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let shuttleHeight=document.getElementById("spaceShuttleHeight")
    let imgObj=document.getElementById("rocket");


    imgObj.style.position = 'absolute';
    imgObj.style.bottom='0px';
    imgObj.style.left='0px';


    takeOffButton.addEventListener('click',function(event){
        let response = window.confirm("Is the shuttle  ready for takeoff");
        if(response){
      status.innerHTML= "Shuttle in flight.";
      document.getElementById("shuttleBackground").style.backgroundColor = 'blue';
      //spaceShuttleHeight
      parseIntdocument.getElementById("spaceShuttleHeight").innerHTML=10000;

      
        }
    })

    landButton.addEventListener('click',function(event){
        window.alert("The shuttle is landing. Landing gear engaged");
        status.innerHTML= "The shuttle has landed";
        document.getElementById("shuttleBackground").style.backgroundColor = 'green';
        document.getElementById("spaceShuttleHeight").innerHTML=0;
        imgObj.style.position = 'absolute';
    imgObj.style.bottom='0px';
    imgObj.style.left='0px';
    })

     missionAbortButton.addEventListener('click',function(event){

        let response = window.confirm("Confirm that you want to abort the mission.");
        if(response){

            status.innerHTML= "Mission aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = 'green';
            //spaceShuttleHeight
            document.getElementById("spaceShuttleHeight").innerHTML=0;
            imgObj.style.position = 'absolute';
            imgObj.style.bottom='0px';
            imgObj.style.left='0px';

        }
     })
up.addEventListener('click',function(event){
 
    let movement =parseInt(imgObj.style.bottom) + 10 + 'px';
    imgObj.style.bottom = movement;
    shuttleHeight.innerHTML= pareInt(shuttleHeight.innerHTML) + 10000;
 
})
down.addEventListener('click',function(){
    let movement =parseInt(imgObj.style.bottom) - 10 + 'px';
    imgObj.style.bottom = movement;
    shuttleHeight.innerHTML= pareInt(shuttleHeight.innerHTML) - 10000;
})
right.addEventListener('click',function(){
    let movement =parseInt(imgObj.style.left) + 10 + 'px';
    imgObj.style.left = movement;
    
})
left.addEventListener('click',function(){
    let movement =parseInt(imgObj.style.left) - 10 + 'px';
    imgObj.style.left = movement;
})
}

window.addEventListener("load", init);