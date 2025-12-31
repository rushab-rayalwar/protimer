import { createContext, useState, useContext } from "react";

let HistoryContext = createContext();

export function HistoryProvider({children}){
    const [history, setHistory] = useState([]);

    return (
        <HistoryContext.Provider value={{history, setHistory}}>
            {children}
        </HistoryContext.Provider>
    )
}

export function useHistory(){
    let context = useContext(HistoryContext);
    if(!context) return console.log("useHistory should be used under the HistoryProvider");
    return context;
}