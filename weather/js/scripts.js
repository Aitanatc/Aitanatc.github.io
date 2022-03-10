const hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive');}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive');};
///////////
let speed = 2;
let temp = 18;

let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

console.log(windChill);

windChill = Math.floor(windChill);

windChill = (windChill > temp) ? temp : windChill;

console.log(windChill);

document.querySelector("#wind-chill").textContent = windChill + '°F';
