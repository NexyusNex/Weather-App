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

function returnDate(dt, timezone) {
  let date = new Date();
  let localTime = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let local_date = utc + 1000 * timezone;
  return new Date(local_date).toLocaleString();
}

magnifyImg.addEventListener("click", () => {
  const text = document.querySelector("#text").value;
  loadWeather(text);
});

loadWeather("belgrade");
