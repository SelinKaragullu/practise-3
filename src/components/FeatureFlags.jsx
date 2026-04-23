
import { useContext } from "react"
import { FeatureFlagsContext } from "./context"

export default function FeatureFlags () {

const {loading, enabledFlags} = useContext(FeatureFlagsContext)

const componentsToRender = [
  { key: "showLightAndDarkMode", component: <div >Light/Dark Mode Componenti</div> },
  { key: "showTicTacToeBoard", component: <div>Tic Tac Toe Componenti</div> }
]


return <>{loading? <div>Loading...</div> : null}
    {componentsToRender.map((component)=> <div key={component.key}>{
    enabledFlags[component.key]? enabledFlags[component.component] : null}
</div>
    )}
</>
}

