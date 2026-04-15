import {useState,useEffect} from 'react'


export default function RandomColor () {
const[typeOfColor,setTypeOfColor] = useState("hex")
const[color,setColor] = useState("#000000")
let style = {width:"100vw", height:"100vh", backgroundColor:color}


useEffect (()=>{
typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor()
},[typeOfColor])

function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
}

function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let hexColor = "#"

    for(let i =0; i<6; i++)
    {
        hexColor+=hex[randomColorUtility(hex.length)]
    }
setColor(hexColor)
}

function handleCreateRandomRgbColor () {
   const r = randomColorUtility(256)
   const g = randomColorUtility(256)
   const b = randomColorUtility(256)
    setColor(`rgb(${r},${g},${b})`)
}

    return <div style={style}>
    
    <button onClick={()=>{setTypeOfColor('hex')}}>select HEX color</button>
    <button onClick={()=>{setTypeOfColor('rgb')}}>select RGB color</button>
    <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>select Random color</button>
    <h1>{color}</h1>
       
    </div>
}