import React from 'react';
import ListItem from './HistoryItem';

const HistoryList = ({ FetchList, onNewFetch}) => {

    return (
        <>
            <ul>
                {FetchList.map((item) => (
                    <ListItem 
                    key={item} // key is id
                    username = {item}
                    onFetch = {onNewFetch}
                    />
                ))}
            </ul>
        </>

    );
}

export default HistoryList;