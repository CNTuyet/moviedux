import './App.css';
import { useEffect, useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import MovieDetail from './components/MovieDetail';
import './styles.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    //Lấy data từ file json trong folder public, sau đó lấy data set cho movies
    fetch("movies.json")
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  // Nếu đã có trong watchlist thì xóa id của movie đó đi, chưa có thì thêm vào
  const toggleWatchlist = (movieId) => {
    // prev đại diện cho state watchlist cũ, id trong filter đại diện cho từng item trong watchlist
    setWatchlist(prev =>
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    );
  }

  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Router>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/watchlist'>Watchlist</Link></li>
                </ul>
            </nav>
          {/* Định nghĩa các đường dẫn, khi truy cập đúng path, element sẽ được hiển thị */}
          <Routes>
            <Route path='/' element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}></Route>
            <Route path='/watchlist' element={<Watchlist movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}></Route>
            <Route path="/:title" element={<MovieDetail movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
