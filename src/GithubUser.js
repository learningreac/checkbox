import React, { useState, useEffect } from "react";
import FetchUser from './FetchUserInputbox';
import FetchHistory from './fetchHistory';

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
    const [fetchHistory, setFetchHistory] = useState(["learningreac"] )


    return (
        <>
            <FetchUser initialID={id} onNewFetch={setID} setFetchHistory={setFetchHistory} fetchHistory={fetchHistory}/>
            <FetchHistory FetchList = {fetchHistory} />
            <GitHubUser login={id} />
        </>
    )
}