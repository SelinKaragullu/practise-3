import { useState } from "react";
import useLocalStorage from "./useLocalStorage";



export default function LightDarkMode () {
const [theme,setTheme] = useLocalStorage('theme','dark')

function handleToggleTheme () {
    setTheme(theme==='dark' ? 'light':'dark')
}


return <div data-theme={theme}>
    <p>{theme}</p>
    <button onClick={handleToggleTheme}>change theme</button>

</div>
}