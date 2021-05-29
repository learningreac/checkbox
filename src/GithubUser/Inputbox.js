import React, { useEffect, useState } from 'react';
import { useGit } from './GithubUserProvider';

const InputBox = ( ) => {
    // initialID={ID} onNewFetch={setID} setFetchHistory={setFetchHistory} fetchHistory={fetchHistory} 
    const { ID, setID, fetchHistory, setFetchHistory} = useGit();
    const [Inputid, setInputID] = useState(ID);

    const submit = e => {
        e.preventDefault();
        setID(Inputid);
        setFetchHistory([...fetchHistory, Inputid]);
    };

    useEffect(()=>{
        setInputID(ID)
    }, [ID]);

    console.log('initialid-->'+ID);
    console.log('current id-->'+Inputid);

    return (
        <form onSubmit={submit}>
            <input 
                value={Inputid}
                onChange = {e => setInputID(e.target.value)}
                type="text" 
                placeholder='GitHub ID' 
                required 
            />
            <button>Fetch</button>
        </form>
    )

}

export default InputBox;