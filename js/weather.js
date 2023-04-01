const apikey = 'c78751ad2a1b6968019e8b5d53258129';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kryvyi Rih&appid=${apikey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data && data.weather && data.weather[0] && data.weather[0].icon) {
            const weatherIcon = document.querySelector('.weather-icon');
            const weatherTemp = document.querySelector('.weather-temp');
            const weatherDescription = document.querySelector('.weather-description');
            const weatherCity = document.querySelector('.weather-city');
            console.log(data);
            weatherIcon.style.backgroundImage = `url('https://openweathermap.org/img/w/${data.weather[0].icon}.png')`;
            weatherTemp.innerHTML = `${Math.round(data.main.temp)}<sup>°C</sup>`;
            weatherDescription.innerHTML = data.weather[0].description;
            weatherCity.innerHTML = data.name;
        } else {
            console.error('Error: Data is not in the expected format');
        }
    })
    .catch(error => console.error(error));

/*  <div class="weather-widget">
        <h2>Current Weather</h2>
        <div class="weather-icon"></div>
        <div class="weather-info">
            <p class="weather-temp"></p>
            <p class="weather-description"></p>
            <p class="weather-city"></p>
        </div>
    </div>;


    .weather-widget {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    text-align: center;
    font-family: Arial, sans-serif;
    margin: 0 auto;
}

.weather-icon {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.weather-info {
    margin-top: 20px;
} */
