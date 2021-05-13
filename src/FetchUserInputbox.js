import React, { useState } from 'react';

const InputBox = ({fetchHistory, setFetchHistory, initialID, onNewFetch}) => {
    const [id, setID] = useState(initialID);

    const submit = e => {
        e.preventDefault();
        onNewFetch(id);
        setFetchHistory([...fetchHistory, id]);
    };

    return (
        <form onSubmit={submit}>
            <input 
                onChange = {e => setID(e.target.value)}
                type="text" 
                placeholder='GitHub ID' 
                required 
            />
            <button>Fetch</button>
        </form>
    )

}

export default InputBox;