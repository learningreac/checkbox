import React from "react";
import { Link } from 'react-router-dom'; 

export default function Home() {
    return (
        <div>
            <h1>[Project Website]</h1>
            <nav>
                <Link  className='action-item' to='reduxCounter'>ReduxCounter</Link>
                <Link  className='action-item' to='Githubuser'>GitHubUser</Link>
                <Link  className='action-item' to='Bingmap'>BingMapApp</Link>
                <Link  className='action-item' to='Basicrouter'>BasicRouter</Link>
                <Link  className='action-item' to='Movieapp'>MovieApp</Link>
            </nav>
        </div>
    );
}