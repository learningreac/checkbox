import React from "react";
import { useRoutes } from "react-router-dom";
import GithubUserAPP from './GithubUser/GithubUser';
import BingMapApp from './BingMapAPP/BingmapAPP';


function App() {
  let element = useRoutes([
    {path:'/', element:<GithubUserAPP/>,},
    { path: "Githubuser", element: <GithubUserAPP />, },
    { path: "Bingmap", element: <BingMapApp />, },
  ]);
  return element;
}

export default App;