import { useFetch } from "./useFetch.jsx"

export default function UseFetchHookTest() {
    const { data, loading, error } = useFetch("https://dummyjson.com/products")


    return (<>
        {loading ? <p>Loading, please wait</p> : null}
        {error ? <p>Error!</p> : null}
        {data ? data.products.map((item) => <p key={item.id}>{item.title}</p>) : null
        }
    </>)}