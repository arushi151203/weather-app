# ??? Weather App

Welcome to the Weather App repository! This project was developed during my internship at UptoSkills using HTML, CSS, and JavaScript. It fetches real-time weather data using the OpenWeatherMap API and displays temperature, humidity, and weather conditions in a clean and responsive UI.

## ?? Features

- ?? Search weather by city name
- ?? Detect current location and fetch local weather
- ??? Displays temperature, min/max temp and weather condition
- ?? Shows current date and day
- ??? Dynamic background image changes based on searched city
- ??? Reverse geocoding using OpenCage API

## ??? Tech Stack

| Technology | Usage |
|-----------|-------|
| HTML | Structure |
| CSS | Styling and Layout |
| JavaScript | Logic and API calls |
| OpenWeatherMap API | Real-time weather data |
| OpenCage API | Reverse geocoding |

## ?? Project Structure

\\\
weather-app/
+-- index.html      # Main HTML file
+-- style.css       # Styling
+-- app.js          # JavaScript logic and API calls
\\\

## ?? Getting Started

1. Clone the repository
   \\\ash
   git clone https://github.com/arushi151203/weather-app.git
   cd weather-app
   \\\

2. Open index.html directly in your browser — no installation needed!

## ?? API Keys

This project uses two APIs:
- OpenWeatherMap — https://openweathermap.org/api
- OpenCage Geocoding — https://opencagedata.com/

Replace the placeholders in app.js with your own free API keys:
\\\javascript
const weatherApi = {
    key: YOUR_OPENWEATHERMAP_API_KEY,
}
const apiKey = YOUR_OPENCAGE_API_KEY;
\\\

## ????? Author
**Arushi** — Intern at UptoSkills
