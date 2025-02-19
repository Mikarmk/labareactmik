import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import '../styles/MoviesPage.css';

interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
}

const MoviesPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [search, setSearch] = useState('batman');
    const [year, setYear] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let url = `https://www.omdbapi.com/?s=${search}&apikey=db59c2b4`;
                if (year) {
                    url += `&y=${year}`;
                }
                const response = await axios.get(url);
                setMovies(response.data.Search || []);
            } catch (error) {
                console.error('Ошибка загрузки данных:', error);
            }
        };

        fetchMovies();
    }, [search, year]);

    return (
        <div className="movies-page">
            <h2>Поиск фильмов</h2>
            <div className="search-controls">
                <input
                    type="text"
                    placeholder="Поиск фильма..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
                <input
                    type="number"
                    placeholder="Введите год..."
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="year-input"
                />
            </div>
            <MovieList movies={movies} />
        </div>
    );
};

export default MoviesPage;
