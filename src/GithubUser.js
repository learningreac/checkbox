import React, { useState, useEffect } from "react";
import InputBox from './Inputbox';
import HistoryList from './fetchHistory';

function GitHubUser({ login }) {
    const [mydata, setData] = useState();

    useEffect(() => {
        if (!login) return;
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, [login]);

    if (mydata)
        return <pre>{JSON.stringify(mydata, null, 2)}</pre>

    return null;
}

export default function APP() {
    const [id, setID] = useState("learningreac" );
    const [fetchHistory, setFetchHistory] = useState(["learningreac", "moonhighway", "learningreac", "moonhighway"] );

    const removeUser = username => {
        const newHistory = fetchHistory.filter( item => item !== username);
        setFetchHistory(newHistory);
      };

    return (
        <>
            <InputBox initialID={id} onNewFetch={setID} setFetchHistory={setFetchHistory} fetchHistory={fetchHistory}/>
            <HistoryList FetchList = {fetchHistory} setcurrentid= {setID} onRemove= {removeUser}/>
            <GitHubUser login={id} />
        </>
    )
}