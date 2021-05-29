import React, {createContext, useContext, useState} from 'react';

const GhubContext = createContext();
export const useGit = () => useContext(GhubContext); // custom hook with context p126

export default function GithubProvider ({children}) {
    const [ID, setID] = useState("learningreac" );
    const [fetchHistory, setFetchHistory] = useState(["learningreac", "moonhighway"] );

    const removeUser = username => {
        const newHistory = fetchHistory.filter( item => item !== username);
        setFetchHistory(newHistory);
      };

    return (
        <GhubContext.Provider value={{ID, setID, fetchHistory, setFetchHistory,removeUser}} >
            {children}
        </GhubContext.Provider>
    );
};
