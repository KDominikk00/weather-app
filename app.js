import { API_KEY } from "./config.js";

const searchBtn = document.querySelector("#search-btn");
let citySearchInput = document.querySelector("#citySearch");

searchBtn.addEventListener("click", async (e) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${citySearchInput.value}&days=1&aqi=no&alerts=no`
  )
    .then((data) => {
      if (!data.ok) throw new Error("Invalid response");
      return data.json();
    })
    .then((dataobject) => {
      console.log(dataobject);
      let locname = (document.querySelector("#locname").textContent =
        dataobject.location.name);

      let temp = (document.querySelector("#temp").textContent =
        dataobject.current.temp_c + "°C");

      let currtemp = (document.querySelector("#currtemp").textContent =
        dataobject.current.temp_c + "°");

      let forecasttemp = document.querySelectorAll(".forecasttemp");
      let forecasttime = document.querySelectorAll(".forecasttime");

      forecasttemp.forEach((element) => {
        for (let i = 0; i < 4; i++) {
          forecasttemp[i].textContent =
            Math.round(dataobject.forecast.forecastday[0].hour[i].temp_c) + "°";
        }
      });
      forecasttime.forEach((element) => {
        for (let i = 0; i < 4; i++) {
          forecasttime[i].textContent = dataobject.forecast.forecastday[0].hour[
            i
          ].time.slice(11, 13);
        }
      });
      // prettier-ignore
      if (
        (dataobject.current.condition.text =
          "Mist" && dataobject.current.condition.icon.includes("night"))
      ) {
        let img = (document.querySelector("#mainimg").src =
          "Images/cloudynight.png");
      } else if ((dataobject.current.condition.text = "Mist")) {
        let img = (document.querySelector("#mainimg").src =
          "Images/cloudy.png");
      } else if ((dataobject.current.condition.text = "Partly cloudy")) {
        let img = (document.querySelector("#mainimg").src =
          "Images/cloudy.png");
      } else if ((dataobject.current.condition.text = "Partly cloudy" && dataobject.current.condition.icon.includes("night"))) {
        let img = (document.querySelector("#mainimg").src =
          "Images/cloudynight.png");
      }else if(dataobject.current.condition.text = "Clear") {
        let img = (document.querySelector("#mainimg").src =
        "Images/sunny.png");
      }else if(dataobject.current.condition.text = "Clear" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/clearnight.png");
      }else if(dataobject.current.condition.text = "Overcast") {
        let img = (document.querySelector("#mainimg").src =
        "Images/overcast.png");
      }else if(dataobject.current.condition.text = "Overcast" && dataobject.current.condition.icon.includes("night"))   {
        let img = (document.querySelector("#mainimg").src =
        "Images/overcastnight.png");
      }else if(dataobject.current.condition.text = "Sunny") {
        let img = (document.querySelector("#mainimg").src =
        "Images/sunny.png");
      }else if(dataobject.current.condition.text = "Sunny" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/clearnight.png");
      }else if(dataobject.current.condition.text = "Moderate rain") {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainy.png");
      }else if(dataobject.current.condition.text = "Moderate rain" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainynight.png");
      }else if(dataobject.current.condition.text = "Light rain") {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainy.png");
      }else if(dataobject.current.condition.text = "Light rain" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainynight.png");
      }else if(dataobject.current.condition.text = "Light drizzle") {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainy.png");
      }else if(dataobject.current.condition.text = "Light drizzle" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainynight.png");
      }else if(dataobject.current.condition.text = "Light snow") {
        let img = (document.querySelector("#mainimg").src =
        "Images/snowy.png");
      }else if(dataobject.current.condition.text = "Light snow" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/snowynight.png");
      }
      console.log(dataobject.current.condition.text);
    })

    .catch((error) => {
      console.log(error);
    });
});

citySearchInput.addEventListener("keypress", async (key) => {
  if (key.key === "Enter") {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${citySearchInput.value}&days=1&aqi=no&alerts=no`
    )
      .then((data) => {
        if (!data.ok) throw new Error("Invalid response");
        return data.json();
      })
      .then((dataobject) => {
        let locname = (document.querySelector("#locname").textContent =
          dataobject.location.name);

        let temp = (document.querySelector("#temp").textContent =
          dataobject.current.temp_c + "°C");

        let currtemp = (document.querySelector("#currtemp").textContent =
          dataobject.current.temp_c + "°");

        let forecasttemp = document.querySelectorAll(".forecasttemp");
        let forecasttime = document.querySelectorAll(".forecasttime");

        forecasttemp.forEach((element) => {
          for (let i = 0; i < 4; i++) {
            forecasttemp[i].textContent =
              Math.round(dataobject.forecast.forecastday[0].hour[i].temp_c) +
              "°";
          }
        });
        forecasttime.forEach((element) => {
          for (let i = 0; i < 4; i++) {
            forecasttime[i].textContent =
              dataobject.forecast.forecastday[0].hour[i].time.slice(11, 13);
          }
        });
        // prettier-ignore
        if (
        (dataobject.current.condition.text =
          "Mist" && dataobject.current.condition.icon.includes("night"))
      ) {
        let img = (document.querySelector("#mainimg").src =
          "Images/cloudynight.png");
      } else if ((dataobject.current.condition.text = "Mist")) {
        let img = (document.querySelector("#mainimg").src =
          "Images/cloudy.png");
      } else if ((dataobject.current.condition.text = "Partly cloudy")) {
        let img = (document.querySelector("#mainimg").src =
          "Images/cloudy.png");
      } else if ((dataobject.current.condition.text = "Partly cloudy" && dataobject.current.condition.icon.includes("night"))) {
        let img = (document.querySelector("#mainimg").src =
          "Images/cloudynight.png");
      }else if(dataobject.current.condition.text = "Clear") {
        let img = (document.querySelector("#mainimg").src =
        "Images/sunny.png");
      }else if(dataobject.current.condition.text = "Clear" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/clearnight.png");
      }else if(dataobject.current.condition.text = "Overcast") {
        let img = (document.querySelector("#mainimg").src =
        "Images/overcast.png");
      }else if(dataobject.current.condition.text = "Overcast" && dataobject.current.condition.icon.includes("night"))   {
        let img = (document.querySelector("#mainimg").src =
        "Images/overcastnight.png");
      }else if(dataobject.current.condition.text = "Sunny") {
        let img = (document.querySelector("#mainimg").src =
        "Images/sunny.png");
      }else if(dataobject.current.condition.text = "Sunny" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/clearnight.png");
      }else if(dataobject.current.condition.text = "Moderate rain") {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainy.png");
      }else if(dataobject.current.condition.text = "Moderate rain" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainynight.png");
      }else if(dataobject.current.condition.text = "Light rain") {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainy.png");
      }else if(dataobject.current.condition.text = "Light rain" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainynight.png");
      }else if(dataobject.current.condition.text = "Light drizzle") {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainy.png");
      }else if(dataobject.current.condition.text = "Light drizzle" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/rainynight.png");
      }else if(dataobject.current.condition.text = "Light snow") {
        let img = (document.querySelector("#mainimg").src =
        "Images/snowy.png");
      }else if(dataobject.current.condition.text = "Light snow" && dataobject.current.condition.icon.includes("night")) {
        let img = (document.querySelector("#mainimg").src =
        "Images/snowynight.png");
      }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
