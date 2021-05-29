import { useState , useEffect} from "react";
import React from 'react';

export default function GitHubUser({ login }) {
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