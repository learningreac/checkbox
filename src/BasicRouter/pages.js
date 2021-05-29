import React from "react";
import { Link } from 'react-router-dom'; 

export function RoutesHome() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link className='action-item' to='about'>About</Link>
                <Link className='action-item' to='events'>Events</Link>
                <Link className='action-item' to='products'>Products</Link>
                <Link className='action-item' to='contact'>Contact Us</Link>
            </nav>
        </div>
    );
}
export function About() {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}
export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}
export function Products() {
    return (
        <div>
            <h1>[Products]</h1>
        </div>
    );
}
export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}