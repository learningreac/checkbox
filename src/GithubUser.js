import React, { useState, useEffect } from "react";
import FetchUser from './FetchUserInputbox'

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

    return (
        <>
            <FetchUser initialID={id} onNewFetch={setID} />
            <GitHubUser login={id} />
        </>
    )
}