const hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive');}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive');};
/////////// wind child
let speed = 2;
let temp = 18;

let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

console.log(windChill);

windChill = Math.floor(windChill);

windChill = (windChill > temp) ? temp : windChill;

console.log(windChill);

document.querySelector("#wind-chill").textContent = windChill + '°F';

////////// api json weather
const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Preston,5604473&appid=0205b06aab5afe13a29d9528615f45fe&units=imperial";
fetch(apiURL)
    .then((Response) => Response.json())
    .then((jsObject) =>{
        console.log(jsObject);
        const summary = jsObject;
        document.querySelector('#currently').innerHTML = summary.weather[0].main;
        document.querySelector('#temperature').textContent = summary.main.temp_max;
        document.querySelector('#currtemp').textContent = summary.main.temp;
        document.querySelector('#humidity').innerHTML = summary.main.humidity;
        document.querySelector('#windSpeed').innerText = summary.wind.speed;

    });
//// five day forecast
const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=0205b06aab5afe13a29d9528615f45fe&units=imperial";


fetch(forecastURL)
  .then(function (response) {
	return response.json();
  })
  .then(function (jsonObject) {
	const forecast = jsonObject["list"].filter((forecast) => {
		if(forecast.dt_txt.includes(" 18:00:00")) {
			return forecast;
		}
	});

    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i = 0; i < forecast.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('class', 'temp');
        document.querySelector('div.forecast').appendChild(card);

        let spanTemp = document.createElement("span");
        spanTemp.setAttribute("class", "data");
        let floatTemp = parseFloat(forecast[i].main.temp);
        let roundTemp = Math.round(floatTemp);
        spanTemp.textContent = roundTemp + "F";
        card.appendChild(spanTemp);
    }
});


