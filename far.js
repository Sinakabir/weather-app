const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const apikey = "7867e5b0f752bfbc463bb28084ac0572" ;
const wicon =document.querySelector('.wicon');
const input =document.querySelector('.input-box input');
const button = document.querySelector('.input-box button');

async function checkWeather(city){
const response = await fetch(apiurl + city + `&appid=${apikey}`);

if(response.status == 404){
  document.querySelector('.error').style.display = 'block';
  document.querySelector('.weather').style.display = 'none'
}
var data = await response.json();

document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + '°C';
document.querySelector('.humid').innerHTML= data.main.humidity + "%";
document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"
document.querySelector('.city').innerHTML = data.name;

if(data.weather[0].main == 'Clouds'){
  wicon.src = "images/clouds.png"
}else if(data.weather[0].main == 'Rain'){
 wicon.src = "images/rain.png"
}else if(data.weather[0].main == 'Drizzle'){
  wicon.src = "images/drizzle.png"
 }else if(data.weather[0].main == 'Clear'){
  wicon.src = "images/Clear.png"
 }else if(data.weather[0].main == 'Mist'){
  wicon.src = "images/mist.png"
 }else if(data.weather[0].main == 'Snow'){
  wicon.src = "images/snow.png"
 }
 document.querySelector('.weather').style.display = 'block'
 document.querySelector('.error').style.display = 'none';

console.log(data)
}

button.addEventListener('click',()=>{

  checkWeather(input.value);
})


input.addEventListener('keypress', function(e){
  if(e.key === "Enter"){
    e.preventDefault();
    button.click();
  }
})