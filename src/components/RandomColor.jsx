import {useState} from 'react'


export default function RandomColor () {
const[typeOfColor,setTypeOfColor] = useState("hex")
const[color,setColor] = useState("#000000")
let style = {width:"100vw", height:"100vh", backgroundColor:color}

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

    return <div style={style}>
    
    <button onClick={()=>{}}>select HEX color</button>
    <button onClick={()=>{}}>select RGB color</button>
    <button onClick={()=>{}}>select Random color</button>
    <h1>{color}</h1>
       
    </div>
}