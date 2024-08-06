import React, { useState } from 'react'
import MovieCard from './MovieCard';

const MoviesGrid = ({ movies, watchlist, toggleWatchlist }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const [genre, setGenre] = useState("All Genres");

    const [rating, setRating] = useState("All");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }


    const matchesGenre = (movie, genre) => {
        return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
    }

    const matchesRating = (movie, rating) => {
        switch (rating) {
            case 'All':
                return 'true';
            case 'Good':
                return movie.rating >= 8;
            case 'Ok':
                return movie.rating >= 5 && movie.rating < 8;
            default:
                return movie.rating < 5;
        }
    }

    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const filterMovies = movies.filter(movie =>
        // Tìm trên thể loại trước (ưu tiên hơn), mới tìm theo từ khóa
        matchesGenre(movie, genre) &&
        matchesRating(movie, rating) &&
        matchesSearchTerm(movie, searchTerm)
    );
    return (
        <div>
            <input
                type='text'
                placeholder='Search movies...'
                className='search-input'
                onChange={handleSearchChange}
                value={searchTerm}
            />
            <div className='filter-bar'>
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className='filter-dropdown' value={genre} onChange={handleGenreChange}>
                        <option >All Genres</option>
                        <option >Action</option>
                        <option >Drama</option>
                        <option >Fantasy</option>
                        <option >Hornor</option>
                    </select>
                </div>
                <div className="filter-slot">
                    <label>Rating</label>
                    <select className='filter-dropdown' value={rating} onChange={handleRatingChange}>
                        <option >All</option>
                        <option >Good</option>
                        <option >Ok</option>
                        <option >Bad</option>
                    </select>
                </div>
            </div>
            <div className='movies-grid'>
                {
                    filterMovies.map(item => (
                        <MovieCard
                            movie={item}
                            isWatchlisted={watchlist.includes(item.id)}
                            toggleWatchlist={toggleWatchlist}
                            key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default MoviesGrid