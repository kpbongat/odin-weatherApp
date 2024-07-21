import cleanResponse from "./cleanResponse";
import fetchAPI from "./fetchAPI";
import "./style.css";

const response = await fetchAPI("Manila");
cleanResponse(response);
