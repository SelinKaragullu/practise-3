import { createContext } from "react";
import { useState,useEffect } from "react";
import featureFlagsDataServiceCall from "./data";


export const FeatureFlagsContext = createContext(null)

export default function FeatureFlagGlobalState({children}) {
        const [enabledFlags,setenabledFlags] = useState({})
        const [loading,setLoading] = useState(false)

        return <FeatureFlagsContext.Provider value={{loading,enabledFlags}}> {children}</FeatureFlagsContext.Provider>
}