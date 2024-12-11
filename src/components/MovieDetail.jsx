import React from 'react'
import { useLocation } from 'react-router-dom';

const MovieDetail = ({ movies, watchlist, toggleWatchlist  }) => {
    const location = useLocation();
    const { movieId } = location.state || {};
    const movie = movies.find(m => m.id === movieId);
    const isWatchlisted=watchlist.includes(movieId);
    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className='movie_detail'>
            <img src={`images/${movie.image}`} alt={movie.title} />
            <div>
                <p className='movie_detail_header'>{movie.title.toUpperCase()}</p>
                <div className='genre_rating_description'>
                    <p className='movie_detail_genre'>Genre:  {movie.genre}</p>
                    <p className='movie_detail_genre'>Rating:  {movie.rating}</p>
                    <p className='movie_detail_genre'>Status: Completed</p>
                    <p className='movie_detail_genre'>Description:</p>
                    <p className='movie_detail_description'>{movie.description}</p>
                </div>
                <div className='cover_label'>
                    <label className='switch'>
                        <input
                            onClick={(e)=> {e.stopPropagation();}}
                            type="checkbox"
                            checked={isWatchlisted}
                            onChange={() => toggleWatchlist(movie.id)} />
                        <span className='slider' onClick={(e)=> {e.stopPropagation();}}>
                            <span className='slider-label'>{isWatchlisted ? "In Watchlist" : "Add To Watchlist"}</span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail