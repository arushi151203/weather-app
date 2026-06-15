const API_KEY = "937f5b7d9ae98e8c640c16f30bc7c085"; 

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("cityName").textContent = `Weather in ${data.name}`;
      document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById("description").textContent = `Condition: ${data.weather[0].description}`;
      document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;

      weatherResult.classList.remove("hidden");
    })
    .catch(error => {
      alert("Error: " + error.message);
      weatherResult.classList.add("hidden");
    });
}
