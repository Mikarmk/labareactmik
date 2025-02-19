import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailPage from '../pages/MovieDetailPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<MoviesPage />} />
                    <Route path="/details/:id" element={<MovieDetailPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
