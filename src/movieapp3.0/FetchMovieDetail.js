import React,{useState, useEffect} from 'react';
import MovieDetail from './Moviedetail';
import {useMovie} from './MovieProvider';

const API_URL = 'https://omdbapi.com';
const API_KEY = 'b947c005';

export default function FetchMovieDetail( ) {
    const [mdata, setData] = useState(null);
    const {ID} = useMovie()

    useEffect(() => {
        fetch(`${API_URL}?apikey=${API_KEY}&i=${ID}`)
            .then(response => response.json())
            .then(obj => { console.log(obj); setData(obj); })
            .catch(console.error);
    }, [ID]);

    if (null == mdata)
        return <div>loading... </div>

    return (
        <MovieDetail
            isFetching={false}
            Title={mdata.Title}
            Type={mdata.Type}
            Year={mdata.Year}
            Poster={mdata.Poster} 
        />
    )
}