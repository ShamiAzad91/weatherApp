const API_KEY = "Your Secret Key";


const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");

const cityName = document.getElementById("city-name");
const cityRegion = document.getElementById("city-region");
const temperature = document.getElementById("temperature");
const cityCondition = document.getElementById("condition");



async function getData(city,API_KEY){
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`)
        const data = await response.json();
        console.log("hi",data);
        
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Could not fetch weather data. Please check your input and try again.");
    }

}

searchBtn.addEventListener("click",async()=>{
    // console.log(cityInput.value);
    const city = cityInput.value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }
    const  result = await getData(city,API_KEY);
    console.log(result);


    cityName.innerText = `${result.location.name}`;
    cityRegion.innerText = `${result.location.region}`;
    temperature.innerText = `${result.current.temp_c}--°C`;
    cityCondition.innerText = `${result.current.condition.text}`
    
})