import clear from "./clear.jpg";
import clouds from "./clouds.jpg";
import snow from "./snow.jpg";
import thunder from "./thunder.jpg";
import rain from "./rain.jpg";
import drizzle from "./drizzle.jpg";
import mist from "./mist.jpg";

export default function changeBackground(weather) {
  console.log(weather);
  const container = document.querySelector(".container");
  if (weather == "Clear") {
    container.style.backgroundImage = `url(${clear})`;
    return;
  }
  if (weather == "Clouds") {
    container.style.backgroundImage = `url(${clouds})`;
    return;
  }
  if (weather == "Snow") {
    container.style.backgroundImage = `url(${snow})`;
    return;
  }
  if (weather == "Thunderstorm") {
    container.style.backgroundImage = `url(${thunder})`;
    return;
  }
  if (weather == "Rain") {
    container.style.backgroundImage = `url(${rain})`;
    return;
  }
  if (weather == "Drizzle") {
    container.style.backgroundImage = `url(${drizzle})`;
    return;
  }
  container.style.backgroundImage = `url(${mist})`;
}
