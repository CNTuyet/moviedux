import React from 'react'
import '../styles.css'

const MovieCard = ({ movie }) => {
    const handleError = (e) => {
        // khi tên src ảnh bị lỗi thì hiển thị ảnh default
        e.target.src = "images/default.jpg";
    }

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

    return (
        <div key={movie.id} className='movie-card'>
            <img
                src={`images/${movie.image}`}
                alt={movie.title}
                onError={handleError} />
            <div className='movie-card-info'>
                <h3 className='movie-card-title'>{movie.title}</h3>
                <p className='movie-card-genre'>{movie.genre}</p>
                <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
            </div>
        </div >
    )
}

export default MovieCard