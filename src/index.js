import "./style.css";

import bluesky from "./bluesky.jpg";
import mapmarker from "./map-marker.svg";
import logo from "./weatherlogo.png";
import magnify from "./magnify.svg";

import loadWeather from "./loadWeather";

const container = document.querySelector(".container");
container.style.backgroundImage = `url(${bluesky}`;

const logoImg = document.querySelector("#logo");
logoImg.src = logo;

const markerImg = document.querySelector("#location-marker");
markerImg.src = mapmarker;

const magnifyImg = document.querySelector("#magnify");
magnifyImg.src = magnify;

magnifyImg.addEventListener("click", () => {
  const text = document.querySelector("#text").value;
  if (text == "") return;
  loadWeather(text);
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    const text = document.querySelector("#text").value;
    if (text == "") return;
    loadWeather(text);
  }
});

loadWeather("belgrade");
