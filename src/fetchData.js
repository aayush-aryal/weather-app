import './styles.css'
// add the needed methods to fetch weather data and export object module

export async function getWeatherData(userinput){
    try {
        let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userinput}&units=metric&APPID=0835900e4fbbbc9b5696bda5ee057129`,{mode:'cors'})
        let responseweatherAPIobject=await response.json()
        let filteredObject={temperature:
            responseweatherAPIobject.main.temp,
            name:responseweatherAPIobject.name ,
            temp_min:responseweatherAPIobject.main.temp_min ,
            temp_max:responseweatherAPIobject.main.temp_max,
            main:responseweatherAPIobject.weather[0].main,
            description:responseweatherAPIobject.weather[0].description,
            icon:responseweatherAPIobject.weather[0].icon,
            wind:responseweatherAPIobject.wind.speed
        }
        document.querySelector('.weather-info').classList.remove('loading')
        return filteredObject

    }catch (err){
        let filteredObject={name:'unavailable'}
        return filteredObject

    }
   
}
