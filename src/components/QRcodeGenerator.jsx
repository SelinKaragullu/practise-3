import { useState } from 'react'
import QRCode from 'react-qr-code'


export default function QRcodeGenerator() {
    const [query, setQuery] = useState("")
    const [qrCode, setQrCode] = useState("")

    function handleQuery(e) {
        setQrCode("")
        setQuery(e.target.value)
        console.log(e.target.value)
    }

    function handleGenerate() {
        console.log(query)
        setQrCode(query)
        setQuery("")
    }

    function reset() {
        setQrCode("")
        setQuery("")
    }
    return <>

        <input
            onChange={handleQuery}
            value={query}
            type="text" />
        <button disabled={query.trim() === ""} onClick={handleGenerate}>Generate</button>
        {qrCode && <QRCode value={qrCode} />}

        <button onClick={reset}>Reset</button>
    </>
}