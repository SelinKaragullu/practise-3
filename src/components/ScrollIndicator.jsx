import {useState,useEffect} from 'react'



export default function ScrollIndicator ({url}) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")


  async function fetchData (url) {
    try{
    setLoading(true)
   const res = await fetch(url)
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



return (<>
    {loading && <div>Loading...</div>} 
{data && data.length>0 && data.map((dataItem)=><p key={dataItem.id}>{dataItem.title}</p>
)

}

</>
)
}