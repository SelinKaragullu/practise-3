

export default function Tabs({ tabsContent }) {

        const [currentTabIndex, setCurrentTabIndex] = useState(0)

        return <div>{
                tabsContent.map((tab, index) => (
                        <div key={index}
                             onClick={()=>setCurrentTabIndex(index)}
                             className={currentTabIndex===index? "active" : ""}

                        >{tab.label}
                        </div>
                ))}
                <div>{tabsContent[currentTabIndex].content}</div>
        </div>
}