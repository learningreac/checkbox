import React from 'react';
import ListItem from './HistoryItem';

const HistoryList = ({ FetchList, setcurrentid}) => {

    return (
        <>
            <ul>
                {FetchList.map((userID, i) => (
                    <ListItem 
                    key={i} 
                    username = {userID}
                    setcurrentid = {setcurrentid}
                    />
                ))}
            </ul>
        </>

    );
}

export default HistoryList;