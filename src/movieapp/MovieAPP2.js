import React, { useState, useEffect } from 'react';

import SearchInputBox from './SearchInputBox';
import MovieList from './MovieList';
import movieListData from './movielistdata.json';
import FetchMovieDetail from './FetchMovieDetail'
import './App.css';

const API_URL = 'https://omdbapi.com';
const API_KEY = 'b947c005';
//const movies = movieListData.Search;

export default function APP() {
    const [mldata, setMList] = useState(null); // movielist data
    const [ID, setID] =useState('tt0381681'); // single movie id
    const [SearchText, setSearchText] = useState('sunset'); // search text

    // search movie list
    useEffect(() => {
        fetch(`${API_URL}?apikey=${API_KEY}&s=${SearchText}&type=movie&page=1`)
            .then(response => response.json())
            .then(obj => { console.log(obj); setMList(obj); })
            .catch(console.error);
    }, [SearchText]);

    if (null == mldata)
    return <div>loading... </div>

    return (
        <div className="App">
            <SearchInputBox onNewSearch={setSearchText}/>
            <MovieList movies={mldata.Search}/>
            <FetchMovieDetail id={ID}/>
        </div>
    )
}
