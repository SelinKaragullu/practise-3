import { useState } from "react";


export default function GithubProfileFinder () {
    const [userName,setUserName] = useState("")

    function handleSubmit() {
console.log(userName)
    }

    return <>
    <input type="text" value={userName} onChange={(event)=>setUserName(event.target.value)}/>
    <button onClick={handleSubmit}>Search</button>
    </>
}