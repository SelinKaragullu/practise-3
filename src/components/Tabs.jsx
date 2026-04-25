

export default function Tabs({ tabsContent }) {

        const [currentTabIndex, setCurrentTabIndex] = useState(0)

        return <div>{
                tabsContent.map((tab, index) => (
                        <div key={tab.index}
                                onClick={setCurrentTabIndex(index)}

                        >{tab.label}</div>
                ))
        }</div>
}