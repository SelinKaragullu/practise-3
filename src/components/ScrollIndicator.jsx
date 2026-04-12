import {useState,useEffect} from 'react'



export default function ScrollIndicator ({url}) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [scrollPercentage, setScrollPercentage] = useState(0);


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


useEffect(()=>{
window.addEventListener("scroll",handleScrollPercentage)

return ()=>{
  window.removeEventListener("scroll",handleScrollPercentage)
}
},[])

function handleScrollPercentage() {
    const howMuchScrolled = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
}


return (<>
<div className="top-container">
       <div className="scroll-progress-tracking-container">
        <div
          className="current-progress-bar"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>

<div>
    {loading && <div>Loading...</div>} 
{data && data.length>0 && data.map((dataItem)=><p key={dataItem.id}>{dataItem.title}</p>
)}
</div>
</>
)
}