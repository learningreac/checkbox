import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import SearchInputBox from './SearchInputBox';
import FetchMovieDetail from './FetchMovieDetail';
import MovieListContainer from './MovieListContainer';
import './App.css';



export default function APP() {
   
    return (
        <div className="App">
            <SearchInputBox />
            <MovieListContainer />       
            <FetchMovieDetail />
        </div>
    )
}
