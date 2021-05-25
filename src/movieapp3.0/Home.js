import React from 'react';
import SearchInputBox from './SearchInputBox';
import MovieListContainer from './MovieListContainer';
import { Outlet } from "react-router-dom";


export default function Home(){
    return (
        <>
        <SearchInputBox />
        <MovieListContainer />  
        <Outlet/>
        </>
    )
}