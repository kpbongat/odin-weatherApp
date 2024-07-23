import cleanResponse from "./cleanResponse";
import fetchAPI from "./fetchAPI";
import "./style.css";

const form = document.querySelector("form");
const input = document.querySelector("form input");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let response = await fetchAPI(input.value);
  response = await cleanResponse(response);
  console.log(response);
});
