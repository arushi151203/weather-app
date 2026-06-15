// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key: "YOUR_OPENWEATHERMAP_API_KEY",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function getMyLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Get address from OpenCage
            const address = await reverseGeocode(lat, lon);

            // Show the address on the page
            document.getElementById("city").innerText = address;

            // Get weather using lat/lon
            fetch(`${weatherApi.baseUrl}?lat=${lat}&lon=${lon}&appid=${weatherApi.key}&units=metric`)
                .then(res => res.json())
                .then(showWeatherReport)
                .catch(err => {
                    alert("Weather fetch failed.");
                });

            document.querySelector('.weather-body').style.display = "block";

        }, () => {
            alert("Location access denied.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}



function reverseGeocode(lat, lon) {
    const apiKey = "YOUR_OPENCAGE_API_KEY"; // replace with your key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                return data.results[0].formatted; // full formatted address
            } else {
                return "Unknown Location";
            }
        })
        .catch(error => {
            console.error("Reverse geocoding failed:", error);
            return "Location fetch error";
        });
}


// Show Weather Report
function showWeatherReport(weather){

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    let weather_iconEl = document.getElementById('weather-icon');
    weather_iconEl.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png">
    <div class="weather" id="weather">${weather.weather[0].main}</div>
    `
    let cityname = `${weather.name}` ;
    document.body.style.background = "url('https://source.unsplash.com/1600x900/?" + cityname +"') no-repeat"
    document.body.style.backgroundSize = "cover"  
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    
    return `${date} ${month} (${day}), ${year}`;
}
