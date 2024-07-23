export default function createWeatherCard(parentDiv, forecastObject) {
  const date = document.createElement("h6");
  date.textContent = forecastObject.datetime;
  parentDiv.appendChild(date);

  const temp = document.createElement("span");
  temp.textContent = `Temp: ${forecastObject.temp}°C`;
  parentDiv.appendChild(temp);
  const rain = document.createElement("span");
  rain.textContent = `Rain: ${forecastObject.precip}mm`;
  parentDiv.appendChild(rain);
  const rainChance = document.createElement("span");
  rainChance.textContent = `Chance: ${forecastObject.precipprob}%`;
  parentDiv.appendChild(rainChance);
  const uvIndex = document.createElement("span");
  uvIndex.textContent = `UV Index: ${forecastObject.uvindex}`;
  parentDiv.appendChild(uvIndex);
}
