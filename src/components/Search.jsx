import React from "react";  

export default function Search ({search,setSearch,fetchWeatherData}) {

function handleSearch () {
fetchWeatherData(search)
}

  return (
    <>
    <input type="text"
    onChange={(event)=>setSearch(event.target.value)}
    value={search}
    
    />
    <button onClick={handleSearch}>Search</button>
    </>
  )
}