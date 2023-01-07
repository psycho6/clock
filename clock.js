const secondsNeedle = document.querySelector('#seconds');
const minutesNeedle = document.querySelector('#minutes');
const hoursNeedle = document.querySelector('#hours');

function Rotation(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsInDeg = ((seconds/60)*360)+270;
    secondsNeedle.style.transform = `rotate(${secondsInDeg}deg)`;
    const minutes = now.getMinutes();
    const minutesInDeg = (minutes/60)*360+270;
    minutesNeedle.style.transform = `rotate(${minutesInDeg}deg)`;
    const hours = now.getHours();
    const hoursInDeg = (hours/12)*360+270;
    hoursNeedle.style.transform = `rotate(${hoursInDeg}deg)`;
}

setInterval(Rotation,1000);