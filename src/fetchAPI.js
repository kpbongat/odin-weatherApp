export default function fetchAPI(location) {
  const API_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const FREE_API_KEY = "4HQQSPAE9XGZAA2G9LXJ7QNFZ";
  const requestURL = `${API_URL}/${location}?unitGroup=metric&elements=datetime%2Ctemp%2Cprecip%2Cprecipprob%2Cuvindex&include=hours&key=${FREE_API_KEY}`;
  const request = new Request(requestURL);
  const response = fetch(request);
  return response;
}
