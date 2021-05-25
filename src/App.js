import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './Home';
import GithubUserAPP from './GithubUser/GithubUser';
import BingMapApp from './BingMapAPP/BingmapAPP';
import RouterApp from './BasicRouter/RouterAPP';
import  MovieAPP from './movieapp3.0/MovieAPP';


function App() {
  let element = useRoutes([
    {path:'/', element:<Home />,},
    { path: "Githubuser", element: <GithubUserAPP />, },
    { path: "Bingmap", element: <BingMapApp />, },
    { path: "Basicrouter", element: <RouterApp />, },
    { path: "Movieapp", element: < MovieAPP />, },
  ]);
  return element;
}

export default App;