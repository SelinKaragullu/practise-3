import { useState } from "react";


export default function GithubProfileFinder () {
    const [userName,setUserName] = useState("")
    const [userData,setUserData] = useState(null)
    const [loading,setLoading] = useState(false)

    function handleSubmit() {
fetchGithubUserData()
    }

    async function fetchGithubUserData () {
        setLoading(true)
            const res = await fetch(`https://api.github.com/users/${userName}`)
            const data = await res.json()
            setUserData(data)
            setLoading(false)
            setUserName("")
    }


    console.log(userData)
    return <>
    <input type="text" value={userName} onChange={(event)=>setUserName(event.target.value)}/>
    <button onClick={handleSubmit}>Search</button>

{loading? <h1>Data Loading...</h1> : null}
{userData !== null ? <User user={userData}/> : null
}
    </>
}