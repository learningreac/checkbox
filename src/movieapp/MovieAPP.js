import React, { useState, useEffect } from 'react';
import MovieDetail from './Moviedetail';
import SearchInputBox from './SearchInputBox';
import MovieList from './MovieList';
import movieListData from './movielistdata.json';
import './App.css';

const API_URL = 'https://omdbapi.com';
const API_KEY = 'b947c005';
const id = 'tt1563738';
const movies = movieListData.Search;

export default function APP() {
    const [mldata, setMList] = useState(movies); //
    const [mdata, setData] = useState(null);
 

    useEffect(() => {
        fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`)
            .then(response => response.json())
            .then(obj => { console.log(obj); setData(obj); })
            .catch(console.error);
    }, []);

    

    // return {mdata}?<div> {JSON.stringify(mdata)} </div>:<div>loading...</div>

    if (null == mdata)
        return <div>loading... </div>

    return (
        <div className="App">
            <SearchInputBox />
            <MovieList movies={mldata}/>
            <MovieDetail
                isFetching={false}
                Title={mdata.Title}
                Type={mdata.Type}
                Year={mdata.Year}
                Poster={mdata.Poster} />
        </div>
    )
}
