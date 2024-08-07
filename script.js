const btn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");

const API_Key = "742af5a8e1df4935f7377ce6562802ce";

async function fetchData(city) {
  try {
    console.log("city name", city);
    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
      );
      let result = await response.json();
      if (result.message) {
        console.log("hii");
        document.getElementById('secondID').innerHTML=`<h1>${city} ${result.message}</h1>`     
      }
      console.log(result);
    
      displayWeather(result);
  } catch (error) {
    console.log(err.message);
  }
  

  
}

btn.addEventListener("click", () => {
  fetchData(cityName.value);
});

function displayWeather({ name, main, wind }) {
  div = `<div id="weatherInfo">
<p id="temp">${main.temp}</p>
<p id="city">${name}</p>
<div class="otherInfo">
<div class="Wind">
    <p>Wind</p>
    <p>${wind.speed}m/s</p>  
</div>
<div class="Wind">
    <p>Pressure</p>
    <p>${main.pressure}ma</p>
</div>
<div class="Wind">
    <p>Humidity</p>
    <p>${main.humidity}%</p>
</div>
</div>
</div> 
`;
  document.getElementById("secondID").innerHTML = div;
}
document.getElementById('currLoc').addEventListener('click',()=>{
    navigator.geolocation.getCurrentPosition((postion)=>{
 let lati =postion.getCurrentPosition
 let longi =postion.getCurrentPosition

    })
})