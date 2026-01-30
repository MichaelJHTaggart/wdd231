const weather = {
    "coord": {
        "lon": -104.8,
        "lat": 38.83
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 45.75,
        "feels_like": 41.58,
        "temp_min": 42.84,
        "temp_max": 47.41,
        "pressure": 1024,
        "humidity": 35,
        "sea_level": 1024,
        "grnd_level": 787
    },
    "visibility": 10000,
    "wind": {
        "speed": 8.05,
        "deg": 120
    },
    "clouds": {
        "all": 40
    },
    "dt": 1769808163,
    "sys": {
        "type": 2,
        "id": 2101230,
        "country": "US",
        "sunrise": 1769782019,
        "sunset": 1769818673
    },
    "timezone": -25200,
    "id": 5417598,
    "name": "Colorado Springs",
    "cod": 200
}

// const urlForWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=38.83&lon=-104.80&units=imperial&appid=05a9a07c5eb9a1d817177514101741b5'; 
const currentWeather = document.querySelector("#weather-info");

async function getWeatherData(){
    const response = weather;
    // const response = await fetch(urlForWeather)
    // const data = await response.json()
    console.table(weather)
    createWeather(weather)
    // displayBusiness(data)
    return response
}


function createWeather(data){
    const img = data.weather[0].icon;

    const temp = document.createElement("p");
    const weather = document.createElement("p");
    const temp_max = document.createElement("p");
    const temp_min = document.createElement("p");
    const humidity = document.createElement("p");
    const sunrise = document.createElement("p");
    const sunset = document.createElement("p");


    temp.textContent = `${Math.round(data.main.temp)} \u00B0F`
    weather.textContent = `${data.weather[0].description}`
    temp_max.textContent = `High: ${Math.round(data.main.temp_max)} \u00B0F`
    temp_min.textContent = `Low: ${Math.round(data.main.temp_min)} \u00B0F`
    sunrise.textContent = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`
    sunset.textContent = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`

    currentWeather.appendChild(temp)
    currentWeather.appendChild(weather)
    currentWeather.appendChild(temp_max)
    currentWeather.appendChild(temp_min)
    currentWeather.appendChild(sunrise)
    currentWeather.appendChild(sunset)

}

getWeatherData()