import { useFetch } from "./useFetch.jsx"
import { useState,useRef } from "react"
import {useOutsideClick} from "./useOutsideClick.jsx"

export default function UseFetchHookTest() {
    const { data, loading, error } = useFetch("https://dummyjson.com/products")
    const [showContent,setShowContent] = useState(false)


    return (<>
        {loading ? <p>Loading, please wait</p> : null}
        {error ? <p>Error!</p> : null}
        {data ? data.products.map((item) => <p ref={ref} key={item.id}>{item.title}</p>) : null
        }
    </>)}