import React, { useState } from "react";
import InputBox from './Inputbox';
import HistoryList from './HistoryList';
import GitHubUser from './fetchUserInfo';
import GithubProvider from './GithubUserProvider';


/*function GitHubUser({ login }) {
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
*/

export default function GithubUserAPP() {
    /*const [id, setID] = useState("learningreac" );
    const [fetchHistory, setFetchHistory] = useState(["learningreac", "moonhighway"] );

    const removeUser = username => {
        const newHistory = fetchHistory.filter( item => item !== username);
        setFetchHistory(newHistory);
      };

      */

    return (
        <GithubProvider>
            <div className='ant-page-body'>
                <InputBox />
                <HistoryList  />
                <GitHubUser />
            </div>
        </GithubProvider>
    )
}