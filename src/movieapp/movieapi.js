import {useState, useEffect} from 'react';

const API_URL = 'https://omdbapi.com';
const API_KEY = 'b947c005';
// `https://omdbapi.com?apikey=b947c005&i=tt1563738` fetch'one day'detail
// `https://omdbapi.com?apikey=b947c005&i&s='one day'&type=movie&page=1`   search'one day'


export default function FetchMovieDetail( id ) {
    const [mdata, setData] = useState();

    useEffect(() => {
        //if (!login) return;
        fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, [id]);

    if (mdata)
        console.log(mdata);
        return mdata;
}