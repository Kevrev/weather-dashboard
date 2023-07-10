let storedHistory = JSON.parse(localStorage.getItem("historyValue")) || [];
let historyEl = $("#history");

$("#clearHistory").on("click", () => {
  localStorage.clear();
  historyEl.empty();
});

for (var i = 0; i < 15; i++) {
    $("<div>").text(storedHistory[i]).appendTo(historyEl);
  }

const apiKey = "c66e6044917758ba641fa9e4f9995846";
const searchButton = $("#searchButton");
const searchLocation = $("#locationSearch");
const locationName = $(".locationName");

searchButton.on("click", () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationSearch}&limit={limit}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
});

// fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)