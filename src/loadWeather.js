import returnDate from "./returnDate";

function errorFunction(error) {
  const json = error.json();
  alert(json.message);
}

export default async function loadWeather(text) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    text +
    "&units=metric&appid=59189f0734d8fa112376a0986d5aec75";
  const response = await fetch(url, { mode: "cors" });
  const json = await response.json();
  console.log(json);
  const error = document.querySelector(".error");
  if (json.message) {
    error.textContent = json.message;
    return;
  }
  error.textContent = "";
  const city = document.querySelector("#city");
  city.textContent = json.name + ", " + json.sys.country;

  const tempContainer = document.querySelector(".temperature");
  tempContainer.innerHTML = "";
  const temp = document.createElement("div");
  temp.textContent = json.main.temp + "°C";
  const tempImg = document.createElement("img");

  tempImg.src =
    await `https://openweathermap.org/img/w/${json.weather[0].icon}.png`;
  tempContainer.appendChild(temp);
  tempContainer.appendChild(tempImg);

  const condition = document.querySelector(".condition");
  condition.textContent = json.weather[0].main;

  const feelsLike = document.querySelector(".feels-like");
  feelsLike.textContent = "Feels like: " + json.main.feels_like + "°C";

  const humidity = document.querySelector(".humidity");
  humidity.textContent = "Humidity: " + json.main.humidity + "%";

  const wind = document.querySelector(".wind");
  wind.textContent = "Wind: " + json.wind.speed + "k/m";

  const cityTime = document.querySelector(".city-time");
  cityTime.textContent = returnDate(json.dt, json.timezone);
}
