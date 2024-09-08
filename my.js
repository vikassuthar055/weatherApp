const apiKey ="19109a238bbf795754c307f49fa4ab17";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("input");
const searchBtn =  document.querySelector("button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");


 async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
     
    if (response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    } else{var data = await response.json();
        console.log(data)

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed  + "mph";
    
        if (data.weather[0].main =="Clouds"){
            weatherIcon.src="clouds.png";
        }
        else if (data.weather[0].main =="Clear"){
            weatherIcon.src="clear.png";
        }
        else if (data.weather[0].main =="Rain"){
            weatherIcon.src="rain.png";
        }
        else if (data.weather[0].main =="drizzle"){
            weatherIcon.src="drizzle.png";
        }
        else if (data.weather[0].main =="MIst"){
            weatherIcon.src="mist.png";
        }
        weather.style.display="block";
        document.querySelector(".error").style.display="none";

    }
};
searchBtn.addEventListener("click", ()=>{
 checkWeather(searchBox.value);
});


