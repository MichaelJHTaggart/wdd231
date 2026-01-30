const urlForForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=38.83&lon=-104.80&units=imperial&appid=05a9a07c5eb9a1d817177514101741b5"
const weatherForecast = document.querySelector("#three-day-forecast")

async function getForecastData(){
    const response = await fetch(urlForForecast)
    const data = await response.json()

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    const dayOneTemp = getMaxTempForDate(today, data);
    const dayTwoTemp = getMaxTempForDate(tomorrow, data);
    const dayThreeTemp = getMaxTempForDate(dayAfterTomorrow, data);
    
    const dayTwoDayOfWeek = tomorrow.toLocaleDateString('en-US', { weekday: 'long' });
    const dayThreeDayOfWeek = dayAfterTomorrow.toLocaleDateString('en-US', { weekday: 'long' });

    displayWeatherForcast(dayOneTemp, dayTwoDayOfWeek, dayTwoTemp, dayThreeDayOfWeek, dayThreeTemp);

    return response;
}

function getMaxTempForDate(targetDate, forecast) {
    const targetDay = targetDate.getDate();
    const targetMonth = targetDate.getMonth();
    const targetYear = targetDate.getFullYear();
    
    const temps = forecast.list
        .filter((item) => {
            const itemDate = new Date(item.dt * 1000);
            return itemDate.getDate() === targetDay && itemDate.getMonth() === targetMonth && itemDate.getFullYear() === targetYear;
        })
        .map((item) => item.main.temp_max);

    return Math.round(Math.max(...temps));
}

function displayWeatherForcast(dayOneTemp, dayTwoDayOfWeek, dayTwoTemp, dayThreeDayOfWeek, dayThreeTemp) {
    const dayOne = document.createElement("p");
    const dayTwo = document.createElement("p");
    const dayThree = document.createElement("p");

    dayOne.textContent = `Today: ${dayOneTemp} \u00B0F`;
    dayTwo.textContent = `${dayTwoDayOfWeek}: ${dayTwoTemp} \u00B0F`;
    dayThree.textContent = `${dayThreeDayOfWeek}: ${dayThreeTemp} \u00B0F`;

    weatherForecast.appendChild(dayOne);
    weatherForecast.appendChild(dayTwo);
    weatherForecast.appendChild(dayThree);
}

getForecastData();