import React from 'react';

const FetchHistory = ({ FetchList, newID }) => {
    FetchList = [...FetchList, newID]

    return (
        <>
            <ul>
                {FetchList.map((item,i) => <li key={i}> {item} </li>)}
            </ul>
        </>

    );
}

export default FetchHistory;