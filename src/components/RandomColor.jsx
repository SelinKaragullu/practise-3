import {useState} from 'react'


export default function RandomColor () {
const[typeOfColor,setTypeOfColor] = useState("hex")
const[color,setColor] = useState("#000000")
let style = {width:"100vw", height:"100vh", backgroundColor:color}

    return <div style={style}>
    
    <button onClick={()=>{}}>select HEX color</button>
    <button onClick={()=>{}}>select RGB color</button>
    <button onClick={()=>{}}>select Random color</button>
    <h1>{color}</h1>
       
    </div>
}