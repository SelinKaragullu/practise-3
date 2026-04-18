



export default function useLocalStorage(key, defaultValue) {

   
const [value, setValue] = useState(()=>{
    try{
const savedValue = localStorage.getItem(key)    
if(savedValue !== null) {
    return JSON.parse(savedValue)
}    

return defaultValue
} catch (error) {
console.log(error)
return defaultValue
} 

})

    useEffect(()=>{
localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

return [value,setValue]
}