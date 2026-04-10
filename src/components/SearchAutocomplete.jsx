
import { useState, useEffect } from 'react'

export default function SearchAutocomplete() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchParam,setSearchParam] = useState("")
    const [filteredUsers,setFilteredUsers] = useState([])
    const [showDropdown,setShowDropdown] = useState(false)



    function handleChange(e) {
const query = event.target.value.toLowerCase()
setSearchParam(query)
    }

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