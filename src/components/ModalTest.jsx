import { useState } from 'react'


export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false)

    return <div>
<button onClick={()=>setShowModalPopup(prev=>!prev)}>Open up modal</button>
{showModalPopup && <Modal
  id="custom-id"
  header={<h1>Customized Header!</h1>}
  body={<div>I can put any HTML I want here.</div>}
  footer={<h3>Awesome footer</h3>}
  onClose={() => setShowModalPopup(false)} 
/> }

</div>

}