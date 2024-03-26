
const searchbox = document.querySelector('.inputbox');
const searchbtn = document.querySelector('.button')


    async function getWeather(city) {  
        const apikey = 'c11405ab1d9697285d5a375aaec19f1a';
        const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
        const data = await fetch(`${apiurl}&appid=${apikey}`).then(response => response.json());

        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.windspeed').innerHTML = data.wind.speed + 'km/h';
    }

    
      searchbtn.addEventListener('click', () => {
      getWeather(searchbox.value);
    });