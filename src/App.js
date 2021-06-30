import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './Home';
import CounterApp from './reduxCounter/counterApp.js'
import GithubUserAPP from './GithubUser/GithubUser';
import BingMapApp from './BingMapAPP/BingmapAPP';
import RouterApp from './BasicRouter/RouterAPP';
import {  About,   Events,   Products,  Contact } from "./BasicRouter/pages";
import  MovieAPP from './movieapp3.0/MovieAPP';

//children:[ { path: "Movieapp/:ID", element: <FetchMovieDetail />} ]


function App() {
  let element = useRoutes([
    {path:'/', element:<Home />,},
    { path: "reduxCounter", element: <CounterApp /> },
    { path: "Githubuser", element: <GithubUserAPP /> },
    { path: "Bingmap", element: <BingMapApp /> },
    { path: "Basicrouter", element: <RouterApp />,
        children:[
          { path: "about", element: <About />},
          { path: "events", element: <Events /> },
          { path: "products", element: <Products /> },
          { path: "contact", element: <Contact /> },
        ]
    },
    { path: "Movieapp", element: < MovieAPP /> ,
  
    },
  ]);
  return element;
}

export default App;