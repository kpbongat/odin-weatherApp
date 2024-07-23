export default function createWeatherCard(parentDiv, forecastObject) {
  const date = document.createElement("h6");
  date.textContent = forecastObject.datetime;
  parentDiv.appendChild(date);

  const temp = document.createElement("span");
  temp.textContent = `${forecastObject.temp}°C`;
  parentDiv.appendChild(temp);
  const rain = document.createElement("span");
  rain.textContent = `${forecastObject.precip}mm`;
  parentDiv.appendChild(rain);
  const rainChance = document.createElement("span");
  rainChance.textContent = `${forecastObject.precipprob}%`;
  parentDiv.appendChild(rainChance);
  const uvIndex = document.createElement("span");
  uvIndex.textContent = forecastObject.uvIndex;
  parentDiv.appendChild(uvIndex);
}
