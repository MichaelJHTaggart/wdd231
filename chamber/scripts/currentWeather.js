const urlForWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=38.83&lon=-104.80&units=imperial&appid=05a9a07c5eb9a1d817177514101741b5'; 
const currentWeather = document.querySelector("#weather-info");

async function getWeatherData(){
    const response = await fetch(urlForWeather)
    const data = await response.json()
    // console.table(data)
    createWeather(data)
    return response
}

function createWeather(data){
    const weatherImage = document.createElement("img") 
    
    const temp = document.createElement("p");
    const weather = document.createElement("p");
    const temp_max = document.createElement("p");
    const temp_min = document.createElement("p");
    const humidity = document.createElement("p");
    const sunrise = document.createElement("p");
    const sunset = document.createElement("p");
    
    weatherImage.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
    weatherImage.setAttribute("alt", `of the weather in the city of ${data.name}`)
    weatherImage.setAttribute("loading", `lazy`)
    weatherImage.setAttribute("width", `200`)
    weatherImage.setAttribute("height", `200`)
    weatherImage.setAttribute("class", `business-image`)

    temp.textContent = `${Math.round(data.main.temp)} \u00B0F`
    weather.textContent = `${data.weather[0].description}`
    temp_max.textContent = `High: ${Math.round(data.main.temp_max)} \u00B0F`
    temp_min.textContent = `Low: ${Math.round(data.main.temp_min)} \u00B0F`
    sunrise.textContent = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`
    sunset.textContent = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`

    currentWeather.appendChild(weatherImage)
    currentWeather.appendChild(temp)
    currentWeather.appendChild(weather)
    currentWeather.appendChild(temp_max)
    currentWeather.appendChild(temp_min)
    currentWeather.appendChild(humidity)
    currentWeather.appendChild(sunrise)
    currentWeather.appendChild(sunset)
}

getWeatherData()