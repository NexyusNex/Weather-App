import "./style.css";

import bluesky from "./bluesky.jpg";

const container = document.querySelector(".container");
container.style.backgroundImage = `url(${bluesky}`;

async function loadWeather() {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=belgrade&appid=59189f0734d8fa112376a0986d5aec75",
    { mode: "cors" }
  );
  console.log(response);
  const json = await response.json();
  console.log(json);
}

loadWeather();
