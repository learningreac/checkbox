import React, { useState } from 'react';

const FetchUser = ({initialID, onNewFetch =f => f}) => {
    const [id, setID] = useState(initialID);

    const submit = e => {
        e.preventDefault();
        onNewFetch(id);
    };

    return (
        <form onSubmit={submit}>
            <input 
                value = {id}
                onChange = {e => setID(e.target.value)}
                type="text" 
                placeholder='GitHub ID' 
                required 
            />
            <button>Fetch</button>
        </form>
    )

}

export default FetchUser;