import React from "react";
import { Link } from 'react-router-dom'; 

export default function Home() {
    return (
        <div>
            <h1>[Project Website]</h1>
            <nav>
            <Link  className='action-item' to='reduxSocial'>Redux_Social_Media</Link>
                <Link  className='action-item' to='reduxCounter'>Redux_Counter</Link>
                <Link  className='action-item' to='Githubuser'>Fetch_GitHubUser_info</Link>
                <Link  className='action-item' to='Basicrouter'>Basic_Router</Link>
            </nav>
        </div>
    );
}