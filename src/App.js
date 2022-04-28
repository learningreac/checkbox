import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './Home';
import SocialMediaApp from './reduxSocialMedia/SocialMediaApp';
import { SinglePostPage } from "./reduxSocialMedia/feature/posts/SinglePostPage";
import CounterApp from './reduxCounter/counterApp.js'
import GithubUserAPP from './GithubUser/GithubUser';
import RouterApp from './BasicRouter/RouterAPP';
import { About, Events, Products, Contact } from "./BasicRouter/pages";


function App() {
  let element = useRoutes([
    { path: '/', element: <Home />, },
    {
      path: "reduxSocial", element: <SocialMediaApp />,
      children: [
        { path: "/posts/:postId", element: <SinglePostPage /> }
      ]
    },
    { path: "reduxCounter", element: <CounterApp /> },
    { path: "Githubuser", element: <GithubUserAPP /> },
    {
      path: "Basicrouter", element: <RouterApp />,
      children: [
        { path: "about", element: <About /> },
        { path: "events", element: <Events /> },
        { path: "products", element: <Products /> },
        { path: "contact", element: <Contact /> },
      ]
    },
  ]);
return element;
}

export default App;