import React from 'react';
import { useRoutes } from "react-router-dom";
import './movie.css';
import MovieProvider from './MovieProvider';
import MovieHome from './Home';
import FetchMovieDetail from './FetchMovieDetail';


/*
        { path: "movieapp", element: <Home /> },
        { path: "movieapp/movie/:ID", element: <FetchMovieDetail />, },


*/

function AppRoute() {
    let element = useRoutes([
        { path: "movieapp", element: <MovieHome />},
        { path: "movieapp/movie/:ID", element: <FetchMovieDetail /> }

    ]);
    return element;
}


export default function MovieAPP() {

    return (
        <MovieProvider>
            <AppRoute />
        </MovieProvider>
    )
}
