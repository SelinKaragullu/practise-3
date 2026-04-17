import { useState } from "react";



export default function LightDarkMode () {
const [theme,setTheme] = useState('light')

function handleToggleTheme () {
    setTheme(theme==='dark' ? 'light':'dark')
}


return <div>
    <p>{theme}</p>
    <button onClick={handleToggleTheme}>change theme</button>

</div>
}