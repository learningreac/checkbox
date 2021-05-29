import { useState , useEffect} from "react";
import React from 'react';
import { useGit } from './GithubUserProvider';

export default function GitHubUser( ) {
    // login={id}
    const { ID } = useGit();
    const [mydata, setData] = useState();

    useEffect(() => {
        if (!ID) return;
        fetch(`https://api.github.com/users/${ID}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, [ID]);

    if (mydata)
        return <pre>{JSON.stringify(mydata, null, 2)}</pre>

    return null;
}