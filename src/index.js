import "./style.css";

import bluesky from "./bluesky.jpg";
import mapmarker from "./map-marker.svg";

const container = document.querySelector(".container");
container.style.backgroundImage = `url(${bluesky}`;

const markerImg = document.querySelector("#location-marker");
markerImg.src = mapmarker;

async function loadWeather() {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=belgrade&appid=59189f0734d8fa112376a0986d5aec75",
    { mode: "cors" }
  );
  const json = await response.json();
  console.log(json);
  console.log(json.name);
  console.log(json.sys.country);
  console.log("wind: " + json.wind.deg);
  console.log(json.wind.speed);
  console.log(json.main.feels_like);
  console.log(json.main.humidity);
  console.log("temp: " + json.main.temp);
  console.log(json.main.temp_max);
  console.log(json.main.temp_min);
}

loadWeather();
