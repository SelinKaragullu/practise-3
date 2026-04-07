import { useState,useRef } from "react"
import useOutsideClick from "./useOutsideClick.jsx"

export default function UseOnclickOutsideTest() {

    const [showContent,setShowContent] = useState(false)
    const ref = useRef()
useOutsideClick(ref,()=>setShowContent(false))

    return (<div>
     
     {showContent ? 
     <div ref={ref}>
        <h2>hidden box</h2>
        <p>nothing happens when you click on the box</p>  </div> :
        <button onClick={()=>setShowContent(true)}>open the box</button>
     }
    </div>)}