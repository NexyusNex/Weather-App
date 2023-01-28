import "./style.css";

import bluesky from "./bluesky.jpg";
import mapmarker from "./map-marker.svg";
import logo from "./weatherlogo.png";
import magnify from "./magnify.svg";

const container = document.querySelector(".container");
container.style.backgroundImage = `url(${bluesky}`;

const logoImg = document.querySelector("#logo");
logoImg.src = logo;

const markerImg = document.querySelector("#location-marker");
markerImg.src = mapmarker;

const magnifyImg = document.querySelector("#magnify");
magnifyImg.src = magnify;

async function loadWeather(text) {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    text +
    "&units=metric&appid=59189f0734d8fa112376a0986d5aec75";
  const response = await fetch(url, { mode: "cors" });
  const json = await response.json();
  console.log(json);

  const city = document.querySelector("#city");
  city.textContent = json.name + ", " + json.sys.country;

  const temp = document.querySelector(".temp");
  temp.textContent = json.main.temp + "°C";

  const condition = document.querySelector(".condition");
  condition.innerHTML = "";
  const conditionImg = document.createElement("img");
  conditionImg.src =
    await `http://openweathermap.org/img/w/${json.weather[0].icon}.png`;
  const conditionText = document.createElement("div");
  conditionText.textContent = json.weather[0].main;
  condition.appendChild(conditionImg);
  condition.appendChild(conditionText);

  const feelsLike = document.querySelector(".feels-like");
  feelsLike.textContent = "Feels like: " + json.main.feels_like + "°C";

  const humidity = document.querySelector(".humidity");
  humidity.textContent = "Humidity: " + json.main.humidity + "%";

  const wind = document.querySelector(".wind");
  wind.textContent = "Wind: " + json.wind.speed;

  console.log(json.wind.speed);
  console.log(json.main.feels_like);
  console.log(json.main.temp_max);
  console.log(json.main.temp_min);
}

magnifyImg.addEventListener("click", () => {
  const text = document.querySelector("#text").value;
  loadWeather(text);
});

loadWeather("belgrade");
