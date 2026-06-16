// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.8275&lon=-106.2039&units=imperial&appid=2cd88e160d4bec559b33df1aa1b21695';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.8275&lon=-106.2039&units=imperial&appid=2cd88e160d4bec559b33df1aa1b21695';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function forecastFetch() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

forecastFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {

    const threeDayForecast = data.list.filter(item =>
        item.dt_txt.includes('12:00:00')
    );

    for (let i = 0; i < 3; i++) {

        const temp = Math.round(threeDayForecast[i].main.temp);
        const desc = threeDayForecast[i].weather[0].description;
        const icon = threeDayForecast[i].weather[0].icon;

        const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;

        // Convert date string into weekday name
        const date = new Date(threeDayForecast[i].dt_txt);

        const dayName = date.toLocaleDateString('en-US', {
            weekday: 'long'
        });

        const div = document.createElement('div');

        div.innerHTML = `
            <h3>${dayName}</h3>
            <img src="${iconsrc}" alt="${desc}">
            <p>${temp}&deg;F</p>
            <p>${desc}</p>
        `;

        forecast.appendChild(div);
    }
}