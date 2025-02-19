import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MovieDetailPage.css";

interface Movie {
    Title: string;
    Year: string;
    Poster: string;
    Plot: string;
}

const MovieDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `https://www.omdbapi.com/?i=${id}&apikey=db59c2b4`
                );
                setMovie(response.data);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
            }
        };

        if (id) {
            fetchMovieDetails();
        }
    }, [id]);

    if (!movie) return <p>Загрузка...</p>;

    return (
        <div className="movie-detail">
            <button className="back-button" onClick={() => navigate(-1)}>
                Назад
            </button>
            <h2 className="movie-title">
                {movie.Title} ({movie.Year})
            </h2>
            <img
                className="movie-poster"
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
                alt={movie.Title}
            />
            <p className="movie-plot">{movie.Plot}</p>
        </div>
    );
};

export default MovieDetailPage;
