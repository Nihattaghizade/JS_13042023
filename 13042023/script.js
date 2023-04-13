const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherData = {
      city: data.name,
      description: data.weather[0].description,
      temperature: data.main.temp
    };
    displayWeather(weatherData);
  })
  .catch(error => console.log(error));

function displayWeather(data) {}
 
