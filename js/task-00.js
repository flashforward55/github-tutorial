const apikey = 'c78751ad2a1b6968019e8b5d53258129';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apikey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data && data.weather && data.weather[0] && data.weather[0].icon) {
            const weatherIcon = document.querySelector('.weather-icon');
            const weatherTemp = document.querySelector('.weather-temp');
            const weatherDescription = document.querySelector('.weather-description');
            const weatherCity = document.querySelector('.weather-city');

            weatherIcon.style.backgroundImage = `url('https://openweathermap.org/img/w/${data.weather[0].icon}.png')`;
            weatherTemp.innerHTML = `${Math.round(data.main.temp)}<sup>°C</sup>`;
            weatherDescription.innerHTML = data.weather[0].description;
            weatherCity.innerHTML = data.name;
        } else {
            console.error('Error: Data is not in the expected format');
        }
    })
    .catch(error => console.error(error));
