// add the needed methods to fetch weather data and export object module

export async function getWeatherData(userinput){
    userinput=userinput.toString()
    let weatherAPIobject=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userinput}&APPID=0835900e4fbbbc9b5696bda5ee057129`)
    weatherAPIobject= await weatherAPIobject.json()
    console.log(weatherAPIobject)
}