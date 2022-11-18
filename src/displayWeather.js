const weatherInfo=document.querySelector('.weather-info')
export function displayWeather(weatherObject){
    console.log(weatherObject)
    // remove existing children
    weatherInfo.replaceChildren()
    // manipulate dom and append to weatherinfo
    const locationHeader=document.createElement('div')
    locationHeader.classList.add('weatherDetails','name')
    // change text content
    locationHeader.textContent="Weather in " + weatherObject.name
    //append
    weatherInfo.appendChild(locationHeader)
    // temperature
    const temperature=document.createElement('div')
    temperature.classList.add('weatherDetails','temp')
    temperature.textContent="Feels like: "+weatherObject.temperature+ " °C"
    weatherInfo.appendChild(temperature)
    // minimum 
    const mintemp=document.createElement('div')
    mintemp.classList.add('weatherDetails','mintemp')
    mintemp.textContent="Minimum: "+weatherObject.temp_min + " °C"
    weatherInfo.append(mintemp)
    // maximum
    const maxtemp=document.createElement('div')
    maxtemp.classList.add('weatherDetails','maxtemp')
    maxtemp.textContent="Maximum: "+weatherObject.temp_max +"°C"
    weatherInfo.append(maxtemp)
    // wind
    const wind=document.createElement('div')
    wind.classList.add('weatherDetails','wind')
    wind.textContent= "Wind: "+weatherObject.wind + " m/s"
    weatherInfo.append(wind)
    // humidity
    const humidity=document.createElement('div')
    humidity.classList.add('weatherDetails','humidity')
    humidity.textContent= "Humidity: "+ weatherObject.humidity + "%"
    weatherInfo.append(humidity)

    // description
    const description=document.createElement('div')
    description.classList.add('weatherDetails','description')
    description.textContent=weatherObject.description
    weatherInfo.append(description)
    //icon
    const icon=document.createElement('img')
    //  //get icon through http://openweathermap.org/img/w/10d.png
    icon.src=`http://openweathermap.org/img/w/${weatherObject.icon}.png`
    icon.classList.add('icon')
    weatherInfo.append(icon)

}