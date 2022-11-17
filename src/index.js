import {getWeatherData} from './fetchData'


const submitButton=document.querySelector('.submitButton')
const locationInput=document.querySelector('.location-input')

submitButton.addEventListener('click',(e)=>{
   // prevent refresh
   e.preventDefault()
   // get location
   const location=locationInput.value.toString()
   // check if empty
   if (location=='')return 
   // else make api call
   const locationData=getWeatherData(location)
   // check if found 
   locationData.then((LocationObj)=>{
      console.log(LocationObj)
   })
})


