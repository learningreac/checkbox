import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { Navbar } from './app/Navbar';
import {PostsList} from './feature/posts/PostsList';
import { AddPostForm } from './feature/posts/AddPostsForm';


function App() {
    return (
        <div>
            <Navbar />
            <AddPostForm />
            <PostsList />
        </div>
    )
}

export default function SocialMediaApp() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}


