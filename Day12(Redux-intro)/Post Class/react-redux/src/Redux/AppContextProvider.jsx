
import React, { useState } from "react";

export const AppContext = React.createContext()

const AppContextProvider = ({children, store}) =>{
    const{dispatch, getState} = store
    const value = {dispatch, getState} 
    const [state, setState] = useState(0)
    //don't use it in production ....it's just for testing
    const ForceUpdate  = ()=>setState((prev)=>prev + 1)
    store.subscribe(ForceUpdate)
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export {AppContextProvider}