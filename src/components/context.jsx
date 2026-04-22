import { createContext } from "react";
import { useState,useEffect } from "react";
import featureFlagsDataServiceCall from "./data";


export const FeatureFlagsContext = createContext(null)

export default function FeatureFlagGlobalState({children}) {
        const [enabledFlags,setEnabledFlags] = useState({})
        const [loading,setLoading] = useState(false)

             useEffect (()=>{
                        fetchFeatureFlags()
                },[])

        async function fetchFeatureFlags () {
                setLoading(true)
              try{
                const data = await featureFlagsDataServiceCall()
              setEnabledFlags(data)
                setLoading(false)}
                catch (err) {
                        err.message
                }

           
        }

        return <FeatureFlagsContext.Provider value={{loading,enabledFlags}}> {children}</FeatureFlagsContext.Provider>
}