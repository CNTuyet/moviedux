import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const MoviesGrid = () => {
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filterMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        //Lấy data từ file json trong folder public, sau đó lấy data set cho movies
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data));
    }, []);
    return (
        <div>
            <input
                type='text'
                placeholder='Search movies...'
                className='search-input'
                onChange={handleSearchChange}
                value={searchTerm}
            />
            <div className='movies-grid'>
                {
                    filterMovies.map(item => (
                        <MovieCard movie={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default MoviesGrid