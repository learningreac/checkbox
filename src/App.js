import React from "react";
import { useRoutes } from "react-router-dom";
import GithubUserAPP from './GithubUser/GithubUser';
import BingMapApp from './BingMapAPP/BingmapAPP';
import RouterApp from './BasicRouter/RouterAPP';
import Home from './Home';


function App() {
  let element = useRoutes([
    {path:'/', element:<Home />,},
    { path: "Githubuser", element: <GithubUserAPP />, },
    { path: "Bingmap", element: <BingMapApp />, },
    { path: "Basicrouter", element: <RouterApp />, },
  ]);
  return element;
}

export default App;