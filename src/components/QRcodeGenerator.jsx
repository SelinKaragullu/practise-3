import {useState} from 'react'


export default function QRcodeGenerator () {
const[query,setQuery] = useState ("")

function handleQuery (e) {
   setQuery (e.target.value)
   console.log(e.target.value)
}

function handleGenerate () {
     console.log(query)
    setQuery("")
}

    return <>
    <input 
    onChange={handleQuery}
    value={query} 
    type="text" />
    <button onClick={handleGenerate}>Generate</button>
    </>
}