import {useState,useEffect} from 'react'

export default function ImageSlider() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [images,setImages] = useState([])
    const [loading,setLoading] = useState(false)


function handleNext () {
 currentSlide===4 ? setCurrentSlide(0) : setCurrentSlide(prev=>prev+1)
}

function handlePrevious () {
    currentSlide===0 ? setCurrentSlide(4) : setCurrentSlide(prev=>prev-1)
}

async function fetchImages() {
    setLoading(true)
    const res = await fetch ('https://picsum.photos/v2/list?page=1&limit=5')
    const data = await res.json()
    setImages(data)
    setLoading(false)
}

useEffect(()=>{
    fetchImages()
},[])

    return <><button onClick={handlePrevious}> Previous </button>

{images.map((item,index)=>(
    <div key={item.id}>
<img className ={currentSlide===index? "active" : "hidden"}  src={item.download_url} alt="" />

    </div>
))}
    <button onClick={handleNext}> Next </button>
    <div className="circle-indicators">
{images.map((_,index)=> <button key={index} 
className={currentSlide===index? "current-indicator" : "inactive-indicator"}
onClick={()=>setCurrentSlide(index)}
></button>
)}
   </div>
    </>
}