// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(event){
let takeoff=document.getElementById("takeoff");
let status=document.getElementById("flightStatus");
let background=document.getElementById("shuttleBackground");
let shuttleHeight=document.getElementById("spaceShuttleHeight");
let land=document.getElementById("landing");
let abort=document.getElementById("missionAbort");
takeoff.addEventListener("click",function(event){
    let response=window.confirm("Confirm that the shuttle is ready for takeoff");
    if(response)
    {
        status.innerHTML="Shuttle in flight.";
        background.style.backgroundColor="blue";
        shuttleHeight.innerHTML=10000;
    }
})

land.addEventListener("click",function(event){
    let response=window.confirm("The shuttle is landing. Landing gear engaged.");
    if(response)
    {
        status.innerHTML="The shuttle has landed.";
        background.style.backgroundColor="green";
        shuttleHeight.innerHTML=0;
    }
})

abort.addEventListener("click",function(event){
    let response=window.confirm("Confirm that you want to abort the mission.");
    if(response)
    {
        status.innerHTML="Mission aborted.";
        background.style.backgroundColor="green";
        shuttleHeight.innerHTML=0;
    }
})
})
