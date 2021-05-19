import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import movieListData from './movielistdata.json';

const MovieList = () => {
let movies = movieListData.Search;

    useEffect(() =>
        console.log(movieListData.Search)
    );
    return (
        <div className='movie-list'>
            <List itemLayout='horizontal'>
                {movies.map((movie,index) => (
                    <List.Item key={movie.imdbID}>
                        <List.Item.Meta
                            avatar={<Avatar src={movie.poster} />}
                            title={movie.Title}
                            description={movie.Year}
                        />
                    </List.Item>
                ))}
            </List>
        </div>
    )

}

export default MovieList;



