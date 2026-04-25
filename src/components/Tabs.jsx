

export default function Tabs ({tabsContent}) {

    return <div>{
        tabsContent.map((tab)=>(
<div key={tab.label}>{tab.label}</div>
        ))
        }</div>
}