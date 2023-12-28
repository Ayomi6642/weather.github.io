
const apikey ="0bffe662730f4c056e6eaa41ab4b49bd";

const weatherDataE1 = document.getElementById ("weather-data")

const cityInputE1 = document.getElementById("city-input")

const formE1 = document.querySelector("form")

formE1.addEventListener("submit", (event) =>{
    event.preventDefault();
    const cityValue = cityInputE1.value; 
    getweatherData(cityValue);
});

 async function getweatherData(cityValue){
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric')
    
        if(!response.ok){
            throw new Error("Network reponse was not ok")
        }

        const data = await response.json()

        console.log(data);
    } 
    catch (error) {
        
    }
}