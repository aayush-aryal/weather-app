const weatherInfo=document.querySelector('.weather-info')
export function displayWeather(weatherObject){
    // remove existing children
    weatherInfo.replaceChildren()
    // manipulate dom and append to weatherinfo
    const locationHeader=document.createElement('div')
    locationHeader.setAttribute('class','locationHeader')
    locationHeader.setAttribute('class','weatherDetails')
    // append name to div 
    locationHeader.innerText=weatherObject.name
    // append div to weather-info
    weatherInfo.appendChild(locationHeader)
    
    

}