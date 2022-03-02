const API_KEY = `9621086a0bbeb6d7a038d3e4e8678dad`;
const searchTemperature = () => {
  const cityId = document.getElementById("city-name");
  let cityName = cityId.value;
  cityId.value = "";
  cityName = cityName.toLowerCase();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWeather(data));
};

const displayWeather = (weatherData) => {
  const currentCity = document.getElementById("current-city");
  currentCity.innerText = weatherData.name;
  const temp = document.getElementById("temperature");
  temp.innerText = weatherData.main.temp;
  const condition = document.getElementById("condition");
  condition.innerText = weatherData.weather[0].main;
  const weatherIconImg = document.getElementById("weather-icon");
  const weatherIconValue = weatherData.weather[0].icon;
  weatherIconImg.src = `https://openweathermap.org/img/wn/${weatherIconValue}@2x.png`;
};
