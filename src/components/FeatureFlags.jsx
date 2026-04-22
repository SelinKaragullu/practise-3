
import { useContext } from "react"
import { FeatureFlagsContext } from "./context"

export default function FeatureFlags () {

const {loading, enabledFlags} = useContext(FeatureFlagsContext)

const componentsToRender = [
  { key: "showLightAndDarkMode", component: <div>Light/Dark Mode Componenti</div> },
  { key: "showTicTacToeBoard", component: <div>Tic Tac Toe Componenti</div> }
]


return <>{loading? <div>Tic Tac Toe Componenti</div> : null}
    {componentsToRender.map((component)=>enabledFlags[component.key]? enabledFlags[component] : null

    )}
</>
}

