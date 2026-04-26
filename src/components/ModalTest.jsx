import { useState } from 'react'


export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false)

    return <div>
<button onClick={()=>setShowModalPopup(prev=>!prev)}>Open up modal</button>
{showModalPopup && <p>Modal is now open</p> }
</div>
}