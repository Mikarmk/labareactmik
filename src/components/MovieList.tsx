import { Link } from 'react-router-dom';
import '../styles/MovieList.css';

interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
}

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <div key={movie.imdbID} className="movie-list-item">
                        <Link to={`/details/${movie.imdbID}`}>
                            <img
                                src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'}
                                alt={movie.Title}
                                className="movie-poster"
                            />
                            <p className="movie-title">
                                {movie.Title} ({movie.Year})
                            </p>
                        </Link>
                    </div>
                ))
            ) : (
                <p className="no-movies">Фильмы не найдены</p>
            )}
        </div>
    );
};

export default MovieList;
