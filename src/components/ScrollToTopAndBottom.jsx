import {useState,useEffect,useRef} from 'react'

const bottomRef = useRef(null)



export default function ScrollToTopAndBottom () {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

async function fetchData () {
    try{
    setLoading(true)
   const res = await fetch("https://dummyjson.com/products?limit=100")
   const data = await res.json() 
    setData(data.products)
    setLoading(false)
    } catch (err) {
        setLoading(false)
        setError(err)
    }
  }



useEffect(()=>{
    fetchData()
},[])


function handleScrollToTop () {
  return window.scrollTo({
  top: 0, 
  left: 0, 
  behavior: "smooth" 
})}

function handleScrollToBottom () {
  bottomRef.current.scrollIntoView({behavior: "smooth"})
}


return <>
<h1>Scroll feature</h1>
{data.map((item)=><li key={item.id}>{item.title}</li>

)}
<button onClick={handleScrollToTop}>Go Top!</button>

<div ref={bottomRef}></div>
</>
}
