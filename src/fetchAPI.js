export default async function fetchAPI(location) {
  const API_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const FREE_API_KEY = "4HQQSPAE9XGZAA2G9LXJ7QNFZ";
  const requestURL = `${API_URL}/${location}?key=${FREE_API_KEY}`;
  const request = new Request(requestURL);
  const response = await fetch(request);
  return response;
}
