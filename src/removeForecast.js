export default function removeForecast() {
  const forecastDiv = document.querySelector(".forecast");
  if (forecastDiv) {
    forecastDiv.remove();
  }
}
