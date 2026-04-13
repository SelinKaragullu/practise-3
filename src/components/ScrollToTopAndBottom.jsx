

export default function ScrollToTopAndBottom () {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

async function fetchData () {
    try{
    setLoading(true)
   const res = await fetch(https://dummyjson.com/products?limit=100)
   const data = await res.json() 
    setData(data.products)
    setLoading(false)
    } catch (err) {
        setLoading(false)
        setErrorMessage(err)
    }
  }


useEffect(()=>{
    fetchData(url)
},[url])
}