import {useState,useEffect} from 'react'

export default function LoadMoreData () {

const[products,setProducts] = useState([])
const [count,setCount] = useState(0)


async function fetchProducts() {
    const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count*20}`)
    const data = await res.json()
    setProducts(data.products)
}

useEffect(()=>{
fetchProducts()
},[count])

return <>
<div>Loading...</div>
{products.map((item)=><div key={item.id}>
<div>{item.title}</div>
<img src={item.thumbnail} alt="" />
</div>
)}
<button onClick={()=>setCount(prevCount=>prevCount+1)}>Load more</button>
</>

}