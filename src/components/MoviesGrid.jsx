import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const MoviesGrid = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        //Lấy data từ file json trong folder public, sau đó lấy data set cho movies
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data));
    }, []);
    return (
        <div className='movies-grid'>
            {
                movies.map(item => (
                    <MovieCard movie={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default MoviesGrid