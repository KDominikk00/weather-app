import { API_KEY } from "./config.js";

const searchBtn = document.querySelector("#search-btn");
let citySearchInput = document.querySelector("#citySearch");

searchBtn.addEventListener("click", async (e) => {
  let citySearch = document.querySelector("#citySearch").value;

  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${citySearch}`;
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
});

citySearchInput.addEventListener("keypress", async (key) => {
  if (key.key === "Enter") {
    let citySearch = document.querySelector("#citySearch").value;

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${citySearch}`;
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
  }
});
