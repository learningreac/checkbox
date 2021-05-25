import React from 'react';
import { useRoutes } from "react-router-dom";
import './movie.css';
import MovieProvider from './MovieProvider';
import Home from './Home';
import FetchMovieDetail from './FetchMovieDetail';



/*
        { path: "movieapp", element: <Home /> },
        { path: "movieapp/movie/:ID", element: <FetchMovieDetail />, },


        {
            path: "index",
            element: <p>index</p>,
            children:[
                {path: "about", element: <p>index about</p>}
            ]
        }

        path: "/movieapp", 
            element: <Home />,
            children: [
                { path: ":ID", element: <FetchMovieDetail /> },
                { path: "about", element: <p>about!!!</p> }
            ]
*/

function AppRoute() {
    let element = useRoutes([
        {
            path: "/movieapp", element: <Home />,
            children: [
                { path: "about", element: <p>about!!!</p> }
            ]
        },
        { path: "/movieapp/movie/:ID", element: <FetchMovieDetail />, },

    ]);
    return element;
}


export default function MovieAPP() {

    return (
        <MovieProvider>
            <div className="App">
                <AppRoute />
            </div>
        </MovieProvider>
    )
}
