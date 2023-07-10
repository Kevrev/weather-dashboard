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
const locationSearch = $("#locationSearch");

searchButton.on("click", () => {
    let searchLocation = locationSearch.val();
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchLocation}&limit=1&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let lat = data[0].lat;
        let lon = data[0].lon;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
    });
});