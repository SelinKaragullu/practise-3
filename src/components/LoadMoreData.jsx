import {useState,useEffect} from 'react'

export default function LoadMoreData () {

const[products,setProducts] = useState([])
const [count,setCount] = useState(0)
const [loading,setLoading] = useState(false)

async function fetchProducts() {
    setLoading(true)
    const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count*20}`)
    const data = await res.json()
    setProducts((prevProducts=>[...prevProducts, ...data.products]))
     setLoading(false)
}

useEffect(()=>{
fetchProducts()
},[count])

return <>
{loading? <div>Loading...</div> : null}
{products.map((item)=><div key={item.id}>
<div>{item.title}</div>
<img src={item.thumbnail} alt="" />
</div>
)}
<button onClick={()=>setCount(prevCount=>prevCount+1)}>Load more</button>
</>

}