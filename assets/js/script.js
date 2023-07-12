let storedHistory = JSON.parse(localStorage.getItem("historyValue")) || [];
let historyEl = $("#history");

const apiKey = "c66e6044917758ba641fa9e4f9995846";
const searchButton = $("#searchButton");
const locationSearch = $("#locationSearch");
const currentDate = dayjs().format('MM-DD-YYYY');

searchButton.on("click", () => {
  let searchLocation = locationSearch.val();

  storedHistory.unshift(searchLocation);
  storedHistory = storedHistory.slice(0, 15);

  localStorage.setItem("historyValue", JSON.stringify(storedHistory));

  updateHistory();

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchLocation}&limit=1&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {

      let lat = data[0].lat;
      let lon = data[0].lon;

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        .then((response) => response.json())
        .then((data) => {
          const date1 = data.list[4].dt_txt;
          const icon1 = data.list[4].weather[0].icon;
          const temp1 = data.list[4].main.temp;
          const wind1 = data.list[4].wind.speed;
          const humidity1 = data.list[4].main.humidity;
          $(".date1").text(date1);
          $(".icon1").attr("src", `http://openweathermap.org/img/w/${icon1}.png`);
          $(".temp1").text("Temperature " + temp1 + "°F");
          $(".wind1").text("Wind: " + wind1 + " MPH");
          $(".humidity1").text("Humidity " + humidity1 + "%");

          const date2 = data.list[12].dt_txt;
          const icon2 = data.list[12].weather[0].icon;
          const temp2 = data.list[12].main.temp;
          const wind2 = data.list[12].wind.speed;
          const humidity2 = data.list[12].main.humidity;
          $(".date2").text(date2);
          $(".icon2").attr("src", `http://openweathermap.org/img/w/${icon2}.png`);
          $(".temp2").text("Temperature " + temp2 + "°F");
          $(".wind2").text("Wind: " + wind2 + " MPH");
          $(".humidity2").text("Humidity " + humidity2 + "%");

          const date3 = data.list[20].dt_txt;
          const icon3 = data.list[20].weather[0].icon;
          const temp3 = data.list[20].main.temp;
          const wind3 = data.list[20].wind.speed;
          const humidity3 = data.list[20].main.humidity;
          $(".date3").text(date3);
          $(".icon3").attr("src", `http://openweathermap.org/img/w/${icon3}.png`);
          $(".temp3").text("Temperature " + temp3 + "°F");
          $(".wind3").text("Wind: " + wind3 + " MPH");
          $(".humidity3").text("Humidity " + humidity3 + "%");

          const date4 = data.list[28].dt_txt;
          const icon4 = data.list[28].weather[0].icon;
          const temp4 = data.list[28].main.temp;
          const wind4 = data.list[28].wind.speed;
          const humidity4 = data.list[28].main.humidity;
          $(".date4").text(date4);
          $(".icon4").attr("src", `http://openweathermap.org/img/w/${icon4}.png`);
          $(".temp4").text("Temperature " + temp4 + "°F");
          $(".wind4").text("Wind: " + wind4 + " MPH");
          $(".humidity4").text("Humidity " + humidity4 + "%");

          const date5 = data.list[36].dt_txt;
          const icon5 = data.list[36].weather[0].icon;
          const temp5 = data.list[36].main.temp;
          const wind5 = data.list[36].wind.speed;
          const humidity5 = data.list[36].main.humidity;
          $(".date5").text(date5);
          $(".icon5").attr("src", `http://openweathermap.org/img/w/${icon5}.png`);
          $(".temp5").text("Temperature " + temp5 + "°F");
          $(".wind5").text("Wind: " + wind5 + " MPH");
          $(".humidity5").text("Humidity " + humidity5 + "%");
            
        });

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        .then((response) => response.json())
        .then((data) => {
          const cityName = data.name;
          const cityTemp = data.main.temp;
          const cityWind = data.wind.speed;
          const cityHumidity = data.main.humidity;
          const cityIcon = data.weather[0].icon;
          $(".cityName").text(cityName);
          $(".cityDate").text(currentDate + "");
          $(".cityIcon").attr("src", `http://openweathermap.org/img/w/${cityIcon}.png`);
          $(".cityTemp").text("Temperature " + cityTemp + "°F");
          $(".cityWind").text("Wind: " + cityWind + " MPH");
          $(".cityHumidity").text("Humidity " + cityHumidity + "%");
        });
    });
});

const updateHistory = () => {
    historyEl.empty();
    for (var i = 0; i < storedHistory.length; i++) {
      $("<div>").text(storedHistory[i]).appendTo(historyEl);
    }
};
  
  updateHistory();
  
$("#clearHistory").on("click", () => {
    localStorage.clear();
    historyEl.empty();
    storedHistory = []; 
});