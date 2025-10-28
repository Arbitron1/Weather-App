import { useState } from 'react'
import InfoBox from './infoBox'
import SearchBox from './SearchBox'

export default function WeatherApp(){
    const[weatherInfo,setWeatherinfo]=useState({
        city:"Delhi",
        feelsLike: 30,
        humidity: 83,
        temp: 26.99,
        tempMax:26.99,
        tempMin: 26.99,
        weather: "mist"
    });

    let updateInfo=(newInfo)=>{
        setWeatherinfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}