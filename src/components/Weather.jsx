import React from "react";  
import Search from "./Search.jsx"
import {useState} from 'react'
import {useEffect} from 'react'

export default function Weather () {
const [search,setSearch] = useState("")
const [weatherData,setWeatherData] = useState(null)
const [loading,setLoading] = useState(false)
const [error,setError] = useState('')

function getCurrentDate() {
  return new Date().toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

async function fetchWeatherData(param) {
  try {
setLoading(true)
setError('')
const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`)
const data = await res.json()
setWeatherData(data)

    setLoading(false)
    setError('')
  }catch{
    setLoading(false)
    setError("city not found")
  }    
}

useEffect (()=>{
  fetchWeatherData()
},[])


  return (<>

 <div>
    <Search search={search} setSearch={setSearch} fetchWeatherData={fetchWeatherData} />
    </div>

   { loading? <div>Loading</div> : (<div>

<div>{weatherData?.main?.temp}</div>
<div>{weatherData?.weather[0]?.description}</div>
<div>{getCurrentDate()}</div>
</div>
    )}
    </>
  )
}