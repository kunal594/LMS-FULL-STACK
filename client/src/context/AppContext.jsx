import {createContext} from "react";
//import {AppContext} from "./AppContext";
export const AppContext = createContext()

export const AppContextProvider  = (props)=> {
const value={

}
return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)


}


