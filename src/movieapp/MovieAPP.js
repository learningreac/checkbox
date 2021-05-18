import React from 'react';
import {useState, useEffect} from 'react';

const API_URL = 'https://omdbapi.com';
const API_KEY = 'b947c005';

const id= 'tt1563738';
export default function APP(){
    // let moviedetail = FetchMovieDetail('tt1563738');
    const [mdata, setData] = useState();

    useEffect(() => {
        //if (!login) return;
        fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    },[]);

    return {mdata}?<div> {JSON.stringify(mdata)} </div>:<div>loading...</div>

}
