import cleanResponse from "./cleanResponse";
import fetchAPI from "./fetchAPI";
import removeForecast from "./removeForecast";
import showForecast from "./showForecast";
import "./style.css";

const form = document.querySelector("form");
const input = document.querySelector("form input");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  removeForecast();
  let response = await fetchAPI(input.value);
  response = await cleanResponse(response);
  console.log(response);
  showForecast(response);
});
