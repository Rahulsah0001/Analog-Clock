//Get refrences to DOM elements 
const body = document.querySelector("body");
hourHand = document.querySelector(".hour");
minuteHand = document.querySelector(".minute");
secondHand = document.querySelector(".second");
modeswitch = document.querySelector(".mode-switch");

if(localStorage.getItem("mode") === "Dark Mode"){
    body.classList.add("dark");
    modeswitch.textContent = "Light Mode";
}

//add a click vent listner to mode switch 
modeswitch.addEventListener('click', () => {
    //toggle the dark class on the body element 
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    modeswitch.textContent = isDarkMode ? "Light Mode " : "Dark Mode";

    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");

});

const updateTime = () => {
    // get current time and calculate degrees for clock hands 
    let date = new Date();
    secToDeg = (date.getSeconds() / 60) * 360;
    hoursToDeg = (date.getHours() / 12) * 360;
    minuteToDeg = (date.getMinutes() / 60) * 360;

    //Rotate the clock hands to the appropriate degree based on the current time 
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteToDeg}deg)`;
};

//call updateTime to set clock hands every second 
setInterval(updateTime, 1000);

//call update Time function on page reload
updateTime();