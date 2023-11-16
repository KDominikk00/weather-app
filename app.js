import { API_KEY } from "./config.js";

const searchBtn = document.querySelector("#search-btn");
let citySearchInput = document.querySelector("#citySearch");

searchBtn.addEventListener("click", async (e) => {
  await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${citySearchInput.value}&days=1&aqi=no&alerts=no`)

    .then((data) => {
      if (!data.ok) throw new Error("Invalid response");
      return data.json();
    })

    .then((dataobject) => {

      document.querySelector("#locname").textContent = dataobject.location.name;

      document.querySelector("#mainimg").src = dataobject.current.condition.icon;

      document.querySelector("#temp").textContent = dataobject.current.temp_c + "°C";

      document.querySelector("#currtemp").textContent = dataobject.current.temp_c + "°";

      document.querySelector("#minimainimg").src = dataobject.current.condition.icon;

      let forecasttemp = document.querySelectorAll(".forecasttemp");
      let forecasttime = document.querySelectorAll(".forecasttime");
      let forecastimg = document.querySelectorAll(".forecastimg");

      forecasttemp.forEach((element) => {
        for (let i = 0; i < 4; i++) {
          forecasttemp[i].textContent =
            Math.round(dataobject.forecast.forecastday[0].hour[i].temp_c) + "°";
          
          forecastimg[i].src = dataobject.forecast.forecastday[0].hour[i].condition.icon;
        }
      });

      forecasttime.forEach((element) => {
        for (let i = 0; i < 4; i++) {
          let currTime = dataobject.current.last_updated.slice(11, 13)
          if(currTime.includes("0")) {
            Number(currTime) + i + 1;
            forecasttime[i].textContent = currTime;
          }else {
            
          }
          // let currTime = Number(dataobject.current.last_updated.slice(11, 13) + i + 1)
          // let forTime = "0" + String(currTime);
          // forecasttime[i].textContent = forTime;
        }
      }
      );
})

.catch((error) => {
  console.log(error);
});

citySearchInput.addEventListener("keypress", async (key) => {
  if (key.key === "Enter") {
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${citySearchInput.value}&days=1&aqi=no&alerts=no`)

    .then((data) => {
      if (!data.ok) throw new Error("Invalid response");
      return data.json();
    })

    .then((dataobject) => {

      document.querySelector("#locname").textContent = dataobject.location.name;

      document.querySelector("#mainimg").src = dataobject.current.condition.icon;

      document.querySelector("#temp").textContent = dataobject.current.temp_c + "°C";

      document.querySelector("#currtemp").textContent = dataobject.current.temp_c + "°";

      document.querySelector("#minimainimg").src = dataobject.current.condition.icon;

      let forecasttemp = document.querySelectorAll(".forecasttemp");
      let forecasttime = document.querySelectorAll(".forecasttime");
      let forecastimg = document.querySelectorAll(".forecastimg");

      forecasttemp.forEach((element) => {
        for (let i = 0; i < 4; i++) {
          forecasttemp[i].textContent =
            Math.round(dataobject.forecast.forecastday[0].hour[i].temp_c) + "°";
          
          forecastimg[i].src = dataobject.forecast.forecastday[0].hour[i].condition.icon;
        }
      });

      forecasttime.forEach((element) => {
        for (let i = 0; i < 4; i++) {
          forecasttime[i].textContent = dataobject.forecast.forecastday[0].hour[
            i
          ].time.slice(11, 13);
        }
      });
})

    .catch((error) => {
      console.log(error);
    })
  }
})
})