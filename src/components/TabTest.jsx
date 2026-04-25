import { useState } from "react"
import Tabs from "./Tabs"

export default function TabTest () {

const tabs = [
    { label: "Sekme 1", content: <div>first content</div> },
    { label: "Sekme 2", content: <div>second content</div> },
    { label: "Sekme 3", content: <div>third content</div> }
]

return (
<Tabs tabsContent={tabs}/>
)
}
