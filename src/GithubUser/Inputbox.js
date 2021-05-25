import React, { useEffect, useState } from 'react';

const InputBox = ({fetchHistory, setFetchHistory, initialID, onNewFetch}) => {
    const [id, setID] = useState(initialID);

    const submit = e => {
        e.preventDefault();
        onNewFetch(id);
        setFetchHistory([...fetchHistory, id]);
    };

    useEffect(()=>{
        setID(initialID)
    }, [initialID]);

    console.log('initialid-->'+initialID);
    console.log('current id-->'+id);

    return (
        <form onSubmit={submit}>
            <input 
                value={id}
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