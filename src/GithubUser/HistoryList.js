import React from 'react';
import ListItem from './HistoryItem';
import { useGit } from './GithubUserProvider';

const HistoryList = ( ) => {
    //FetchList={fetchHistory} setcurrentid={setID} onRemove={removeUser}
    const { setID, fetchHistory, removeUser} = useGit();

    return (
        <>
            <ul>
                {fetchHistory.map((userID, i) => (
                    <ListItem 
                    key={i} 
                    username = {userID}
                    />
                ))}
            </ul>
        </>

    );
}

export default HistoryList;