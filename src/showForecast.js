import createWeatherCard from "./createWeatherCard";

export default function showForecast(response) {
  const main = document.querySelector(".main");
  const address = document.querySelector(".title");
  address.textContent = response.resolvedAddress;

  const forecastGrid = document.createElement("div");
  forecastGrid.classList.toggle("grid");
  forecastGrid.classList.toggle("forecast");
  main.appendChild(forecastGrid);

  response.days.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.toggle("flex");
    dayDiv.classList.toggle("flex-column");
    dayDiv.classList.toggle("span-end");
    createWeatherCard(dayDiv, day);
    forecastGrid.appendChild(dayDiv);

    day.hours.forEach((hour) => {
      const hourDiv = document.createElement("div");
      hourDiv.classList.toggle("flex");
      hourDiv.classList.toggle("flex-column");
      createWeatherCard(hourDiv, hour);
      forecastGrid.appendChild(hourDiv);
    });
  });
}
