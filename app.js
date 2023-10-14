import { API_KEY } from "./config.js";

let cityName = document.querySelector("#cityName");
let cityNameString = cityName.textContent;
console.log(cityNameString);

const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityNameString}`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
