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

    document.querySelector("header").style.marginTop = 0;

    document.querySelector(".weather-info").style.display = "flex"

    document.querySelector(".container").style.width = "400px"

    document.querySelector(".container").style.height = "460px"

    document.querySelector("#locname").textContent = dataobject.location.name;

    document.querySelector("#mainimg").src = dataobject.current.condition.icon;

    document.querySelector("#temp").textContent = dataobject.current.temp_c + "°C";

    document.querySelector("#currtemp").textContent = dataobject.current.temp_c + "°";

    document.querySelector("#minimainimg").src = dataobject.current.condition.icon;

    let forecasttemp = document.querySelectorAll(".forecasttemp");
    let forecasttime = document.querySelectorAll(".forecasttime");
    let forecastimg = document.querySelectorAll(".forecastimg");
    let currTime = Number(dataobject.current.last_updated.slice(11, 13))

    forecasttime.forEach((element) => {
      for (let i = 0; i < 4; i++) {
        let forTime = String(currTime + 1 + i);
        forecasttime[i].textContent = forTime;
        }
      }),

    forecasttemp.forEach((element) => {
      for (let i = 0; i < 4; i++) {
        forecasttemp[i].textContent =
          Math.round(dataobject.forecast.forecastday[0].hour[currTime + 1 + i].temp_c) + "°";
        
        forecastimg[i].src = dataobject.forecast.forecastday[0].hour[currTime + 1 + i].condition.icon; 
      }
    });

    if(dataobject.current.is_day == 0) {
      document.querySelector(".container").style.backgroundImage = "url('Images/nightSkybg.avif')"
    }else if(dataobject.current.is_day == 1 && dataobject.current.condition.text.includes("rain", "snow")) {
      document.querySelector(".container").style.backgroundImage = "url('https://images.unsplash.com/photo-1595949389862-dcc5a5945217?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JheSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D')" 
    }else if(dataobject.current.is_day == 1) {
      document.querySelector(".container").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/1/16/Appearance_of_sky_for_weather_forecast%2C_Dhaka%2C_Bangladesh.JPG')"
    }
})

.catch((error) => {
console.log(error);
});
}
)

citySearchInput.addEventListener("keypress", async (key) => {
  if (key.key === "Enter") {
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${citySearchInput.value}&days=1&aqi=no&alerts=no`)

    .then((data) => {
      if (!data.ok) throw new Error("Invalid response");
      return data.json();
    })

    .then((dataobject) => {

      document.querySelector("header").style.marginTop = 0;

      document.querySelector(".weather-info").style.display = "flex"

      document.querySelector(".container").style.width = "400px"

      document.querySelector(".container").style.height = "460px"

      document.querySelector("#locname").textContent = dataobject.location.name;

      document.querySelector("#mainimg").src = dataobject.current.condition.icon;

      document.querySelector("#temp").textContent = dataobject.current.temp_c + "°C";

      document.querySelector("#currtemp").textContent = dataobject.current.temp_c + "°";

      document.querySelector("#minimainimg").src = dataobject.current.condition.icon;

      let forecasttemp = document.querySelectorAll(".forecasttemp");
      let forecasttime = document.querySelectorAll(".forecasttime");
      let forecastimg = document.querySelectorAll(".forecastimg");
      let currTime = Number(dataobject.current.last_updated.slice(11, 13))

      forecasttime.forEach((element) => {
        for (let i = 0; i < 4; i++) {
          let forTime = String(currTime + 1 + i);
          forecasttime[i].textContent = forTime;
          }
        }),

      forecasttemp.forEach((element) => {
        for (let i = 0; i < 4; i++) {
          forecasttemp[i].textContent =
            Math.round(dataobject.forecast.forecastday[0].hour[currTime + 1 + i].temp_c) + "°";
          
          forecastimg[i].src = dataobject.forecast.forecastday[0].hour[currTime + 1 + i].condition.icon; 
        }
      });

      if(dataobject.current.is_day == 0) {
        document.querySelector(".container").style.backgroundImage = "url('Images/nightSkybg.avif')"
      }else if(dataobject.current.is_day == 1 && dataobject.current.condition.text.includes("rain", "snow")) {
        document.querySelector(".container").style.backgroundImage = "url('https://images.unsplash.com/photo-1595949389862-dcc5a5945217?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JheSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D')" 
      }else if(dataobject.current.is_day == 1) {
        document.querySelector(".container").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/1/16/Appearance_of_sky_for_weather_forecast%2C_Dhaka%2C_Bangladesh.JPG')"
      }
})

.catch((error) => {
  console.log(error);
});
  }
})
