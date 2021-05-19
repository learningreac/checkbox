import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';

const MovieList = ({ movies}) => {

    useEffect(() =>
        console.log(movies)
    );
    return (
        <div className='movie-list'>
            <List itemLayout='horizontal'>
                {movies.map((movie,index) => (
                    <List.Item key={movie.imdbID}>
                        <List.Item.Meta
                            avatar={<Avatar src={movie.Poster} />}
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



