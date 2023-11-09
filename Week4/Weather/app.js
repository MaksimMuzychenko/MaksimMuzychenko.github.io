
const cityInput = document.getElementById("cityInput");
const button = document.getElementById("btn");
const weather = document.getElementById("weather-info");

button.addEventListener("click",function(){
const input = cityInput.value;
if (input === ''){
    alert("Enter a city name:");
    return;
}
var xml = new XMLHttpRequest();
xml.open("GET", 'https//api.openweathermap.org/data/2.5/weather?q=${city}&appid=524901&appid=b69d5aee977399bda82f71d396ddd1d6');
xml.onload = function(){
    if (xml.status != 200){
        alert("City not found");
        return;
    }
    else{
        if(xml.status != 200){
        const weatherData = JSON.parse(xml.responseText);
        const weatherDescription = weatherData.weather[0].description;
        const temp = (weatherData.main.temp -273);
        const wind = weatherData.wind.speed;
        var textOnWeather = '<p>The weather in ${city} is ${weatherDescription} The temperature is ${temp} with the wind speed of ${wind}</p>';
        weather.innerHTML = textOnWeather;
           }   
           else{
            weather.innerHTML = '<p>The weather could not be fetched due to API issues. </p>';
           }
        }
}
try{
    xml.send();
}catch(error){
    alert("NETWORK ERROR");
}
})


