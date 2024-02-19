
const key = "7867e5b0f752bfbc463bb28084ac0572"

const apiurl = "http://api.openweathermap.org/data/2.5/weather?&units=metric&q="
 
let wicon = document.getElementById('wicon');
let button = document.getElementById('button');
let input =document.getElementById('input');


async function weather(city){
const response = await fetch(apiurl + city + `&appid=${key}`)
const data = await response.json();
if(response.status == 404){
  document.querySelector('.weather').style.display = 'none';
}else{
  console.log(data)
document.getElementById("temp").innerHTML = Math.floor(data.main.temp) + '°C';
document.getElementById('humid').innerHTML= data.main.humidity + "%";
document.getElementById('wind').innerHTML =data.wind.speed + "km/h";
document.getElementById('city').innerHTML = data.name;
if(data.weather[0].main == 'Clouds'){
  wicon.src = "images/clouds.png"
}else if(data.weather[0].main == "Clear"){
  wicon.src = "images/clear.png"
}else if(data.weather[0].main == "Wind"){
  wicon.src = "images/wind.png"
}else if(data.weather[0].main == "Snow"){
  wicon.src = "images/snow.png"
}else if(data.weather[0].main == "Rain"){
  wicon.src = "images/rain.png"
}
 
document.querySelector('.weather').style.display = 'block';
}


}




button.addEventListener('click',()=>{
  weather(input.value)
 
})
input.addEventListener('keypress',function(e){
  if(e.key == 'Enter'){
    weather(input.value)
  }
})