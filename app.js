import { API_KEY } from "./config.js";

const searchBtn = document.querySelector("#search-btn");
let citySearchInput = document.querySelector("#citySearch");

searchBtn.addEventListener("click", async (e) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${citySearchInput.value}`
  );
  const data = await response.json();
  console.log(data);
});

citySearchInput.addEventListener("keypress", async (key) => {
  if (key.key === "Enter") {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${citySearchInput.value}`
    );
    const data = await response.json();
    console.log(data);
  }
});
