const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const API_KEY = "e39702122c7154635a20ed0288ad6ed6";

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        showWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weather.innerHTML = `<h2>Error fetching weather data: ${error.message}</h2>`;
    }
};

const showWeather = (data) => {
    if (data.cod === "404") {
        weather.innerHTML = `<h2>City Not Found</h2>`;
        return;
    }
    if (!data.weather || data.weather.length === 0) {
        weather.innerHTML = `<h2>No weather data available</h2>`;
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `;
};

form.addEventListener("submit", function(event) {
    getWeather(search.value);
    event.preventDefault();
});
