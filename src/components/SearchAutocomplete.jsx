
import { useState, useEffect } from 'react'

export default function SearchAutocomplete() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchListOfUsers() {

        try {
            setLoading(true)
            const res = await fetch("https://dummyjson.com/users")
            const data = await res.json()
          if(data && data.users)  {setUsers(
                data.users.map((user)=>user.firstName)
            )}
            setLoading(false)
        } catch(err) {
            setLoading(false)
            setError(err.message)
            console.log(err)
        }
    }

useEffect (()=>{
    fetchListOfUsers()
},[])
 
console.log(users)

return (
    loading? <div>Loading...</div> : <div>data is in console, check it out</div>
)
}