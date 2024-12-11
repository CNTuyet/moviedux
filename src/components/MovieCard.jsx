import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles.css'

const MovieCard = ({ movie, isWatchlisted, toggleWatchlist }) => {
    const handleError = (e) => {
        // khi tên src ảnh bị lỗi thì hiển thị ảnh default
        e.target.src = "images/default.jpg";
    }

    const navigate = useNavigate();

    const getRatingClass = (rating) => {
        if (rating > 8) {
            // đây là 1 class đã được css thay màu text
            return 'rating-good';
        }
        else if (rating < 5) {
            return 'rating-bad';
        }
        else {
            return 'rating-ok';
        };
    }

    const handleClick = () => {
        const slug = movie.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        navigate(`/${slug}`, { state: { movieId: movie.id } });
    };

    return (
        <div 
        onClick={ ()=>{handleClick()}}
        key={movie.id} 
        className='movie-card'>
            <img
                src={`images/${movie.image}`}
                alt={movie.title}
                onError={handleError} />
            <div className='movie-card-info'>
                <h3 className='movie-card-title'>{movie.title}</h3>
                <div>
                    <span className='movie-card-genre'>{movie.genre}</span>
                    <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</span>
                </div>
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
        </div >
    )
}

export default MovieCard