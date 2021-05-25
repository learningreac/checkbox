import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './Home';
import FetchMovieDetail from './FetchMovieDetail';
import { useRoutes } from "react-router-dom";

function AppRoute() {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "movie", element: <FetchMovieDetail />, },
    ]);
    return element;
}


export default function APP() {

    return (
        <div className="App">
            <Router>
                <AppRoute/>
            </Router>
        </div>
    )
}
