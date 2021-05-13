import React from 'react';
import ListItem from './HistoryItem';

const HistoryList = ({ FetchList, setcurrentid, onRemove}) => {

    return (
        <>
            <ul>
                {FetchList.map((userID, i) => (
                    <ListItem 
                    key={i} 
                    username = {userID}
                    setcurrentid = {setcurrentid}
                    onRemove = {onRemove}
                    />
                ))}
            </ul>
        </>

    );
}

export default HistoryList;