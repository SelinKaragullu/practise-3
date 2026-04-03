import { useEffect } from "react"
import { useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchData() {
        try {
            setLoading(true)
            const res = await fetch(url)
            if (!response.ok) throw new Error()
            const fetchedData = await res.json()
            setData(fetchedData)
            setLoading(false)
        } catch {
            setLoading(false)
            setError("cannot proceed")
        }
    }


    useEffect(() => {
        fetchData()
    }, [url])

    return { data, loading, error }
}