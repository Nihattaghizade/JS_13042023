const apiKey = "YOUR_API_KEY_HERE"; 
    
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      
      const cityInput = document.querySelector("#city-input");
      const cityName = cityInput.value;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.querySelector("#weather-info");
          weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Feels like: ${data.main.feels_like} °C</p>
            <p>Humidity: ${data.main.humidity} %</p>
          `;
          
          cityInput.value = "";
        })
        .catch(error => {
          const weatherInfo = document.querySelector("#weather-info");
          weatherInfo.innerHTML = `
            <h2>Error</h2>
            <p>${error.message}</p>
          `;
        });
    });