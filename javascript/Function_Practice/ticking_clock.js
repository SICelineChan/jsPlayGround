let currentTime = new Date();
let currentHour = currentTime.getHours();
let currentMinute = currentTime.getMinutes();
let currentSeconds = currentTime.getSeconds();

let greeting = "";
function tellTime (){
    if(currentTime < 12){
        greeting = "Good Morning";
    } else if (currentTime > 12){
        greeting= "Good Evening";
    } else greeting = "Good Day!"
    console.log(greeting);
}
tellTime();
console.log(currentTime);

const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
